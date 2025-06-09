(ns v0-ladder-logic.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

;; Data structures
(defrecord Contact [id type label state])
(defrecord Branch [id contacts])
(defrecord Coil [id label state])
(defrecord Rung [id branches coil logic])

;; Initial state
(def initial-rungs
  [(->Rung "rung1"
           [(->Branch "branch1a"
                      [(->Contact "x1" "NO" "X1" true)
                       (->Contact "x2" "NO" "X2" false)])]
           (->Coil "y1" "Y1" false)
           "X1 AND X2")

   (->Rung "rung2"
           [(->Branch "branch2a"
                      [(->Contact "x2" "NO" "X2" false)])
            (->Branch "branch2b"
                      [(->Contact "x3" "NO" "X3" true)
                       (->Contact "x4" "NC" "X4" false)])]
           (->Coil "y1" "Y1" true)
           "X2 OR (X3 AND NOT X4)")

   (->Rung "rung3"
           [(->Branch "branch3a"
                      [(->Contact "x1" "NO" "X1" true)])
            (->Branch "branch3b"
                      [(->Contact "x5" "NC" "X5" true)])
            (->Branch "branch3c"
                      [(->Contact "x6" "NO" "X6" false)
                       (->Contact "x7" "NO" "X7" false)])]
           (->Coil "y2" "Y2" true)
           "X1 OR NOT X5 OR (X6 AND X7)")])

;; Logic evaluation functions
(defn contact-satisfied? [contact]
  "Check if a contact is satisfied based on its type and state"
  (case (:type contact)
    "NO" (:state contact)
    "NC" (not (:state contact))))

(defn branch-satisfied? [branch]
  "Check if all contacts in a branch are satisfied (AND logic)"
  (every? contact-satisfied? (:contacts branch)))

(defn rung-satisfied? [rung]
  "Check if any branch in a rung is satisfied (OR logic)"
  (some branch-satisfied? (:branches rung)))

(defn evaluate-rung [rung]
  "Evaluate a rung and return updated rung with coil state"
  (let [coil-state (rung-satisfied? rung)]
    (assoc-in rung [:coil :state] coil-state)))

;; State management
(defonce app-state (r/atom {:rungs initial-rungs}))

;; Helper functions
(defn find-contact-path [rungs rung-id branch-id contact-id]
  "Find the path to a specific contact in the rungs structure"
  (for [rung-idx (range (count rungs))
        :let [rung (nth rungs rung-idx)]
        :when (= (:id rung) rung-id)
        branch-idx (range (count (:branches rung)))
        :let [branch (nth (:branches rung) branch-idx)]
        :when (= (:id branch) branch-id)
        contact-idx (range (count (:contacts branch)))
        :let [contact (nth (:contacts branch) contact-idx)]
        :when (= (:id contact) contact-id)]
    [rung-idx branch-idx contact-idx]))

(defn toggle-contact [rungs rung-id branch-id contact-id]
  "Toggle a contact state and recalculate coil states"
  (let [[rung-idx branch-idx contact-idx] (first (find-contact-path rungs rung-id branch-id contact-id))]
    (if (and rung-idx branch-idx contact-idx)
      (let [updated-rungs (update-in rungs [rung-idx :branches branch-idx :contacts contact-idx :state] not)]
        (mapv evaluate-rung updated-rungs))
      rungs)))

;; Event handlers
(defn handle-contact-click [rung-id branch-id contact-id]
  (swap! app-state update :rungs toggle-contact rung-id branch-id contact-id))

;; Utility functions for styling
(defn contact-classes [contact]
  (str "contact "
       (if (contact-satisfied? contact) "active" "inactive")))

(defn coil-classes [coil]
  (str "coil "
       (if (:state coil) "energized" "de-energized")))

;; Component functions
(defn contact-symbol [contact rung-id branch-id]
  [:div {:class (contact-classes contact)
         :on-click #(handle-contact-click rung-id branch-id (:id contact))}
   [:span.contact-label
    (str (when (= "NC" (:type contact)) "/")
         (:label contact))]])

(defn coil-symbol [coil]
  [:div {:class (coil-classes coil)}
   [:span.coil-label (str "(" (:label coil) ")")]])

(defn branch-component [branch rung-id is-first? is-last?]
  [:div.branch
   ;; Vertical connection lines for parallel branches
   (when-not is-first?
     [:div.connection-line.top])
   (when-not is-last?
     [:div.connection-line.bottom])

   ;; Contacts in series within this branch
   [:div.contacts-series
    (map-indexed
     (fn [idx contact]
       ^{:key (:id contact)}
       [:div.contact-container
        (when (> idx 0)
          [:div.horizontal-line])
        [contact-symbol contact rung-id (:id branch)]])
     (:contacts branch))]])

(defn rung-component [rung index]
  [:div.rung {:key (:id rung)}
   [:div.rung-header
    [:span.rung-number (str "Rung " (inc index) ":")]
    [:span.rung-logic (:logic rung)]]

   [:div.rung-body
    ;; Left power rail
    [:div.power-rail.left]

    ;; Parallel branches
    [:div.branches-container
     (map-indexed
      (fn [idx branch]
        ^{:key (:id branch)}
        [branch-component branch (:id rung)
         (= idx 0)
         (= idx (dec (count (:branches rung))))])
      (:branches rung))]

    ;; Connection line to coil
    [:div.connection-to-coil]

    ;; Output coil
    [coil-symbol (:coil rung)]

    ;; Right power rail
    [:div.power-rail.right]]])

(defn legend-component []
  [:div.legend
   [:h3 "Legend:"]
   [:div.legend-items
    [:div "• NO = Normally Open contact"]
    [:div "• NC = Normally Closed contact (with /)"]
    [:div "• Green = Contact is active/closed"]
    [:div "• Red = Coil is energized"]]])

;; Main component
(defn ladder-logic-viewer []
  (let [rungs (:rungs @app-state)]
    [:div.ladder-logic-viewer
     [:div.header
      [:h1 "Ladder Logic Viewer"]
      [:p "Click on contacts to toggle their state and see how it affects the outputs"]]

     [:div.rungs-container
      (map-indexed
       (fn [idx rung]
         ^{:key (:id rung)}
         [rung-component rung idx])
       rungs)]

     [legend-component]]))

;; CSS styles (would typically be in a separate CSS file)
(def styles
  "
  .ladder-logic-viewer {
    max-width: 1024px;
    margin: 0 auto;
    padding: 16px;
  }
  
  .header h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .rung {
    margin-bottom: 24px;
    padding: 16px;
    background-color: #f9fafb;
    border-radius: 8px;
  }
  
  .rung-header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    font-size: 14px;
    color: #6b7280;
  }
  
  .rung-logic {
    margin-left: 8px;
    padding: 2px 8px;
    background-color: white;
    border: 1px solid #d1d5db;
    border-radius: 4px;
  }
  
  .rung-body {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .power-rail {
    width: 4px;
    height: 64px;
    background-color: black;
  }
  
  .branches-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
  }
  
  .branch {
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .contacts-series {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  
  .contact {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 32px;
    border: 2px solid;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .contact.active {
    border-color: #10b981;
    background-color: #d1fae5;
    color: #065f46;
  }
  
  .contact.inactive {
    border-color: #9ca3af;
    background-color: #f3f4f6;
    color: #6b7280;
  }
  
  .coil {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 32px;
    border: 2px solid;
    border-radius: 4px;
  }
  
  .coil.energized {
    border-color: #ef4444;
    background-color: #fee2e2;
    color: #991b1b;
  }
  
  .coil.de-energized {
    border-color: #9ca3af;
    background-color: #f3f4f6;
    color: #6b7280;
  }
  
  .horizontal-line {
    width: 16px;
    height: 2px;
    background-color: black;
  }
  
  .connection-to-coil {
    width: 32px;
    height: 2px;
    background-color: black;
  }
  
  .legend {
    margin-top: 24px;
    padding: 16px;
    background-color: #dbeafe;
    border-radius: 8px;
  }
  
  .legend h3 {
    font-weight: 600;
    margin-bottom: 8px;
  }
  
  .legend-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    font-size: 14px;
  }
  ")

;; Main application entry point
(defn app []
  [:div
   [:style styles]
   [ladder-logic-viewer]])

;; Initialize the application
(defn init []
  (rdom/render [app] (.getElementById js/document "app")))

;; Initialize when the page loads
(defn ^:export main []
  (init))

;; Auto-initialize in development
(init)
