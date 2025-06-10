(ns v0-cljfx-ladder-logic.core
  (:require [cljfx.api :as fx])
  (:import [javafx.scene.input MouseEvent]
           [javafx.scene.paint Color]
           [javafx.geometry Pos Insets]))

;; Data structures
(defrecord Contact [id type label state])
(defrecord Branch [id contacts])
(defrecord Coil [id label state])
(defrecord Rung [id branches coil logic])

;; Initial state
(def initial-state
  {:rungs [(->Rung "rung1"
                   [(->Branch "branch1a"
                              [(->Contact "x1" "NO" "X1" true)
                               (->Contact "x2" "NO" "X2" false)])]
                   (->Coil "y1" "Y1" false)
                   "Y1=X1 AND X2")

           (->Rung "rung2"
                   [(->Branch "branch2a"
                              [(->Contact "x2" "NO" "X2" false)])
                    (->Branch "branch2b"
                              [(->Contact "x3" "NO" "X3" true)
                               (->Contact "x4" "NC" "X4" false)])]
                   (->Coil "y2" "Y2" true)
                   "Y2=X2 OR (X3 AND NOT X4)")

           (->Rung "rung3"
                   [(->Branch "branch3a"
                              [(->Contact "x1" "NO" "X1" true)])
                    (->Branch "branch3b"
                              [(->Contact "x5" "NC" "X5" true)])
                    (->Branch "branch3c"
                              [(->Contact "x6" "NO" "X6" false)
                               (->Contact "x7" "NO" "X7" false)])]
                   (->Coil "y3" "Y3" true)
                   "Y3=X1 OR NOT X5 OR (X6 AND X7)")]})

;; State atom
(def *state (atom initial-state))

;; Logic evaluation functions
(defn contact-satisfied?
  "Check if a contact is satisfied based on its type and state"
  [contact]
  (case (:type contact)
    "NO" (:state contact)
    "NC" (not (:state contact))))

(defn branch-satisfied?
  "Check if all contacts in a branch are satisfied (AND logic)"
  [branch]
  (every? contact-satisfied? (:contacts branch)))

(defn rung-satisfied?
  "Check if any branch in a rung is satisfied (OR logic)"
  [rung]
  (some branch-satisfied? (:branches rung)))

(defn evaluate-rung
  "Evaluate a rung and return updated rung with coil state"
  [rung]
  (let [coil-state (rung-satisfied? rung)]
    (assoc-in rung [:coil :state] coil-state)))

;; Helper functions
(defn find-contact-path
  "Find the path to a specific contact in the rungs structure"
  [rungs rung-id branch-id contact-id]
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

(defn toggle-contact
  "Toggle a contact state and recalculate coil states"
  [rungs rung-id branch-id contact-id]
  (let [[rung-idx branch-idx contact-idx] (first (find-contact-path rungs rung-id branch-id contact-id))]
    (if (and rung-idx branch-idx contact-idx)
      (let [updated-rungs (update-in rungs [rung-idx :branches branch-idx :contacts contact-idx :state] not)]
        (mapv evaluate-rung updated-rungs))
      rungs)))

;; Event handlers
(defn handle-contact-click [rung-id branch-id contact-id]
  (println "Contact clicked:" rung-id branch-id contact-id)
  (println "Updating state...")
  (println "Old state:" @*state)

  (swap! *state update :rungs toggle-contact rung-id branch-id contact-id)
  (println "New state:" @*state))

;; Color definitions
(def colors
  {:contact-active {:fill Color/LIGHTGREEN :stroke Color/GREEN}
   :contact-inactive {:fill Color/LIGHTGRAY :stroke Color/GRAY}
   :coil-energized {:fill Color/LIGHTCORAL :stroke Color/RED}
   :coil-de-energized {:fill Color/LIGHTGRAY :stroke Color/GRAY}
   :power-rail Color/BLACK
   :connection-line Color/BLACK})

;; Color definitions - using proper JavaFX color strings
(def colors
  {:contact-active {:fill "#d1fae5" :stroke "#10b981"}
   :contact-inactive {:fill "#f3f4f6" :stroke "#9ca3af"}
   :coil-energized {:fill "#fee2e2" :stroke "#ef4444"}
   :coil-de-energized {:fill "#f3f4f6" :stroke "#9ca3af"}
   :power-rail "#000000"
   :connection-line "#000000"})

;; Component functions
(defn contact-view [{:keys [contact rung-id branch-id]}]
  (let [active? (contact-satisfied? contact)
        colors (if active? (:contact-active colors) (:contact-inactive colors))]
    {:fx/type :stack-pane
     :alignment :center
     :pref-width 60
     :pref-height 30
     :style {:-fx-background-color (str (:fill colors))
             :-fx-border-color (str (:stroke colors))
             :-fx-border-width 2
             :-fx-cursor :hand}
     :on-mouse-clicked {:event/type :contact-clicked
                        :rung-id rung-id
                        :branch-id branch-id
                        :contact-id (:id contact)}
     :children [{:fx/type :label
                 :text (str (when (= "NC" (:type contact)) "/")
                            (:label contact))
                 :style {:-fx-font-family "monospace"
                         :-fx-font-size 10}}]}))

(defn coil-view [{:keys [coil]}]
  (let [energized? (:state coil)
        colors (if energized? (:coil-energized colors) (:coil-de-energized colors))]
    {:fx/type :stack-pane
     :alignment :center
     :pref-width 45
     :pref-height 30
     :style {:-fx-background-color (str (:fill colors))
             :-fx-border-color (str (:stroke colors))
             :-fx-border-width 2
             :-fx-background-radius 5
             :-fx-border-radius 5}
     :children [{:fx/type :label
                 :text (str "(" (:label coil) ")")
                 :style {:-fx-font-family "monospace"
                         :-fx-font-size 10}}]}))

(defn connection-line-view [{:keys [width height]}]
  {:fx/type :rectangle
   :width width
   :height height
   :fill (:connection-line colors)})

(defn power-rail-view [{:keys [height]}]
  {:fx/type :rectangle
   :width 4
   :height height
   :fill (:power-rail colors)})

(defn branch-view [{:keys [branch rung-id is-first? is-last?]}]
  {:fx/type :h-box
   :alignment :center-left
   :spacing 4
   :children (concat
              ;; Vertical connection indicators (simplified for JavaFX)
              (when-not is-first?
                [{:fx/type :label :text "┬" :style {:-fx-font-size 8}}])

              ;; Contacts in series
              (map-indexed
               (fn [idx contact]
                 {:fx/type :h-box
                  :alignment :center
                  :spacing 2
                  :children (concat
                             (when (> idx 0)
                               [{:fx/type connection-line-view :width 15 :height 2}])
                             [{:fx/type contact-view
                               :contact contact
                               :rung-id rung-id
                               :branch-id (:id branch)}])})
               (:contacts branch))

              (when-not is-last?
                [{:fx/type :label :text "┴" :style {:-fx-font-size 8}}]))})

(defn rung-view [{:keys [rung index]}]
  {:fx/type :v-box
   :spacing 8
   :padding (Insets. 10)
   :style {:-fx-background-color "#f9fafb"
           :-fx-background-radius 8}
   :children [{:fx/type :h-box
               :alignment :center-left
               :spacing 8
               :children [{:fx/type :label
                           :text (str "Rung " (inc index) ":")
                           :style {:-fx-font-size 12
                                   :-fx-text-fill "#6b7280"}}
                          {:fx/type :label
                           :text (:logic rung)
                           :style {:-fx-font-size 10
                                   :-fx-background-color "white"
                                   :-fx-border-color "#d1d5db"
                                   :-fx-border-width 1
                                   :-fx-background-radius 4
                                   :-fx-border-radius 4
                                   :-fx-padding "2 8 2 8"}}]}

              {:fx/type :h-box
               :alignment :center
               :spacing 8
               :children [{:fx/type power-rail-view :height 60}

                          {:fx/type :v-box
                           :alignment :center-left
                           :spacing 4
                           :children (map-indexed
                                      (fn [idx branch]
                                        {:fx/type branch-view
                                         :branch branch
                                         :rung-id (:id rung)
                                         :is-first? (= idx 0)
                                         :is-last? (= idx (dec (count (:branches rung))))})
                                      (:branches rung))}

                          {:fx/type connection-line-view :width 30 :height 2}

                          {:fx/type coil-view :coil (:coil rung)}

                          {:fx/type power-rail-view :height 60}]}]})

(defn legend-view [_]
  {:fx/type :v-box
   :spacing 8
   :padding (Insets. 16)
   :style {:-fx-background-color "#dbeafe"
           :-fx-background-radius 8}
   :children [{:fx/type :label
               :text "Legend:"
               :style {:-fx-font-weight "bold"}}
              {:fx/type :grid-pane
               :column-constraints [{:fx/type :column-constraints :hgrow :always}
                                    {:fx/type :column-constraints :hgrow :always}]
               :children [{:fx/type :label
                           :text "• NO = Normally Open contact"
                           :grid-pane/column 0
                           :grid-pane/row 0
                           :style {:-fx-font-size 12}}
                          {:fx/type :label
                           :text "• NC = Normally Closed contact (with /)"
                           :grid-pane/column 1
                           :grid-pane/row 0
                           :style {:-fx-font-size 12}}
                          {:fx/type :label
                           :text "• Green = Contact is active/closed"
                           :grid-pane/column 0
                           :grid-pane/row 1
                           :style {:-fx-font-size 12}}
                          {:fx/type :label
                           :text "• Red = Coil is energized"
                           :grid-pane/column 1
                           :grid-pane/row 1
                           :style {:-fx-font-size 12}}]}]})

(defn root-view [{:keys [rungs]}]
  {:fx/type :stage
   :showing true
   :title "Ladder Logic Viewer - cljfx"
   :width 1000
   :height 700
   :scene {:fx/type :scene
           :root {:fx/type :scroll-pane
                  :fit-to-width true
                  :content {:fx/type :v-box
                            :spacing 16
                            :padding (Insets. 20)
                            :children (concat
                                       [{:fx/type :v-box
                                         :spacing 8
                                         :children [{:fx/type :label
                                                     :text "Ladder Logic Viewer"
                                                     :style {:-fx-font-size 24
                                                             :-fx-font-weight "bold"}}
                                                    {:fx/type :label
                                                     :text "Click on contacts to toggle their state and see how it affects the outputs"
                                                     :style {:-fx-font-size 12
                                                             :-fx-text-fill "#6b7280"}}]}]

                                       (map-indexed
                                        (fn [idx rung]
                                          {:fx/type rung-view
                                           :rung rung
                                           :index idx})
                                        rungs)

                                       [{:fx/type legend-view}])}}}})

;; Event handling
(defmulti handle :event/type)

(defmethod handle :contact-clicked [{:keys [rung-id branch-id contact-id]}]
  (handle-contact-click rung-id branch-id contact-id))

;; Renderer with event handling
(def renderer
  (fx/create-renderer
   :middleware (fx/wrap-map-desc (fn [state]
                                   {:fx/type root-view
                                    :rungs (:rungs state)}))
   :opts {:fx.opt/map-event-handler handle}))

;; Application lifecycle
(defn -main [& args]
  (fx/mount-renderer *state renderer)
  (println "Ladder Logic Viewer started!"))

;; For development
(defn start []
  (fx/mount-renderer *state renderer))

(defn stop []
  (fx/unmount-renderer *state renderer))

;; Initialize with evaluated rungs
(swap! *state update :rungs #(mapv evaluate-rung %))

;; Start the application
(-main)