(ns v0-cljfx-ladder-logic.core
  (:require [cljfx.api :as fx]
            [clojure.string :as clojure.string])
  (:gen-class)
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

;; IEC 61131-3 IL Parser
(defn parse-il-instruction
  "Parse a single IL instruction line"
  [line]
  (let [trimmed (clojure.string/trim line)
        tokens (clojure.string/split trimmed #"\s+")]
    (when (and (not (empty? trimmed))
               (not (clojure.string/starts-with? trimmed "//"))
               (not (clojure.string/starts-with? trimmed "(*")))
      (let [op (first tokens)
            operand (second tokens)]
        {:operation op :operand operand :line trimmed}))))

(defn create-contact
  "Create a Contact record from operand and type"
  [operand contact-type id-prefix]
  (->Contact (str id-prefix "_" operand) contact-type operand false))

(defn create-coil
  "Create a Coil record from operand"
  [operand id-prefix]
  (->Coil (str id-prefix "_" operand) operand false))

(defn build-logic-expression
  "Build a human-readable logic expression from branches"
  [branches]
  (let [branch-expressions (map (fn [branch]
                                  (let [contact-exprs (map (fn [contact]
                                                             (if (= "NC" (:type contact))
                                                               (str "NOT " (:label contact))
                                                               (:label contact)))
                                                           (:contacts branch))]
                                    (if (> (count contact-exprs) 1)
                                      (str "(" (clojure.string/join " AND " contact-exprs) ")")
                                      (first contact-exprs))))
                                branches)]
    (clojure.string/join " OR " branch-expressions)))

(defn parse-il-to-rungs
  "Parse IEC 61131-3 IL code and convert to ladder logic rungs"
  [il-lines]
  (let [instructions (keep parse-il-instruction il-lines)
        _ (println "Parsed instructions:" (count instructions) instructions)

        ;; Group instructions by ST operations
        groups (loop [remaining instructions
                      current-group []
                      all-groups []]
                 (if (empty? remaining)
                   (if (seq current-group) (conj all-groups current-group) all-groups)
                   (let [inst (first remaining)
                         rest-insts (rest remaining)]
                     (if (= "ST" (:operation inst))
                       (recur rest-insts [] (conj all-groups (conj current-group inst)))
                       (recur rest-insts (conj current-group inst) all-groups)))))

        _ (println "Instruction groups:" (count groups) groups)

        process-rung-group (fn [rung-idx group]
                             (println "Processing rung" rung-idx "with group:" group)
                             (let [store-op (last group)
                                   contacts-and-ops (butlast group)
                                   current-branch (atom [])
                                   branches (atom [])

                                   process-instruction (fn [inst]
                                                         (case (:operation inst)
                                                           "LD"  ; Load (start new branch with NO contact)
                                                           (do
                                                             (when (seq @current-branch)
                                                               (swap! branches conj (->Branch (str "branch" rung-idx "_" (count @branches)) @current-branch))
                                                               (reset! current-branch []))
                                                             (swap! current-branch conj (create-contact (:operand inst) "NO" (str "rung" rung-idx))))

                                                           "LDN" ; Load NOT (start new branch with NC contact)
                                                           (do
                                                             (when (seq @current-branch)
                                                               (swap! branches conj (->Branch (str "branch" rung-idx "_" (count @branches)) @current-branch))
                                                               (reset! current-branch []))
                                                             (swap! current-branch conj (create-contact (:operand inst) "NC" (str "rung" rung-idx))))

                                                           "AND" ; AND with NO contact (add to current branch)
                                                           (swap! current-branch conj (create-contact (:operand inst) "NO" (str "rung" rung-idx)))

                                                           "ANDN" ; AND NOT with NC contact (add to current branch)
                                                           (swap! current-branch conj (create-contact (:operand inst) "NC" (str "rung" rung-idx)))

                                                           "OR"  ; OR with NO contact (start new branch)
                                                           (do
                                                             (when (seq @current-branch)
                                                               (swap! branches conj (->Branch (str "branch" rung-idx "_" (count @branches)) @current-branch))
                                                               (reset! current-branch []))
                                                             (swap! current-branch conj (create-contact (:operand inst) "NO" (str "rung" rung-idx))))

                                                           "ORN" ; OR NOT with NC contact (start new branch)
                                                           (do
                                                             (when (seq @current-branch)
                                                               (swap! branches conj (->Branch (str "branch" rung-idx "_" (count @branches)) @current-branch))
                                                               (reset! current-branch []))
                                                             (swap! current-branch conj (create-contact (:operand inst) "NC" (str "rung" rung-idx))))

                                                           nil)) ; ignore other operations for now
                                   ]

                              ; Process all contact/logic instructions
                               (doseq [inst contacts-and-ops]
                                 (process-instruction inst))

                              ; Add final branch if it has contacts
                               (when (seq @current-branch)
                                 (swap! branches conj (->Branch (str "branch" rung-idx "_" (count @branches)) @current-branch)))

                              ; Create the rung with coil from ST operation
                               (when (and (= "ST" (:operation store-op)) (seq @branches))
                                 (let [coil (create-coil (:operand store-op) (str "rung" rung-idx))
                                       logic-expr (build-logic-expression @branches)]
                                   (->Rung (str "rung" rung-idx) @branches coil logic-expr)))))

        ; Process each group to create rungs
        rung-data (keep-indexed process-rung-group groups)]
    (println "Final rung data:" rung-data)
    rung-data))

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

(defn load-il-file
  "Load and parse an IEC 61131-3 IL file, returning ladder logic rungs"
  [file-path]
  (try
    (let [file-content (slurp file-path)
          lines (clojure.string/split-lines file-content)
          rungs (parse-il-to-rungs lines)
          evaluated-rungs (mapv evaluate-rung rungs)]
      {:rungs evaluated-rungs})
    (catch Exception e
      (println "Error loading IL file:" (.getMessage e))
      {:rungs []})))

(defn update-state-from-il-file!
  "Load IL file and update the application state"
  [file-path]
  (let [parsed-data (load-il-file file-path)]
    (when (seq (:rungs parsed-data))
      (reset! *state parsed-data)
      (println "Loaded" (count (:rungs parsed-data)) "rungs from" file-path))
    parsed-data))

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
;; (def colors
;;   {:contact-active {:fill Color/LIGHTGREEN :stroke Color/GREEN}
;;    :contact-inactive {:fill Color/LIGHTGRAY :stroke Color/GRAY}
;;    :coil-energized {:fill Color/LIGHTCORAL :stroke Color/RED}
;;    :coil-de-energized {:fill Color/LIGHTGRAY :stroke Color/GRAY}
;;    :power-rail Color/BLACK
;;    :connection-line Color/BLACK})

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
                           :text "• Green = Contact is active: XIC:CLOSED, XIO: OPEN"
                           :grid-pane/column 0
                           :grid-pane/row 1
                           :style {:-fx-font-size 12}}
                          {:fx/type :label
                           :text "• Red = Coil is energized"
                           :grid-pane/column 1
                           :grid-pane/row 1
                           :style {:-fx-font-size 12}}]}]})

(defn contact-status-view [{:keys [rungs]}]
  (let [all-contacts (for [rung rungs
                           branch (:branches rung)
                           contact (:contacts branch)]
                       contact)
        unique-contacts (vals (group-by :label all-contacts))]
    {:fx/type :v-box
     :spacing 8
     :padding (Insets. 16)
     :style {:-fx-background-color "#f0fdf4"
             :-fx-background-radius 8}
     :children (concat
                [{:fx/type :label
                  :text "Contact Status:"
                  :style {:-fx-font-weight "bold"
                          :-fx-font-size 14}}]
                (map (fn [contact-group]
                       (let [contact (first contact-group)
                             state-text (if (:state contact) "CLOSED" "OPEN")
                             type-text (case (:type contact)
                                         "NO" "Normally Open"
                                         "NC" "Normally Closed"
                                         "Unknown")
                             status-color (if (:state contact) "#10b981" "#6b7280")]
                         {:fx/type :h-box
                          :alignment :center-left
                          :spacing 8
                          :children [{:fx/type :label
                                      :text (:label contact)
                                      :style {:-fx-font-weight "bold"
                                              :-fx-font-size 12
                                              :-fx-min-width 40}}
                                     {:fx/type :label
                                      :text (str "(" type-text ")")
                                      :style {:-fx-font-size 10
                                              :-fx-text-fill "#6b7280"
                                              :-fx-min-width 120}}
                                     {:fx/type :label
                                      :text state-text
                                      :style {:-fx-font-size 12
                                              :-fx-text-fill status-color
                                              :-fx-font-weight "bold"}}]}))
                     unique-contacts))}))

(defn root-view [{:keys [rungs]}]
  {:fx/type :stage
   :showing true
   :title "Ladder Logic Viewer - cljfx"
   :width 1000
   :height 700
   :on-close-request {:event/type :window-close-requested}
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

                                       [{:fx/type legend-view}
                                        {:fx/type contact-status-view
                                         :rungs rungs}])}}}})

;; Event handling
(defmulti handle :event/type)

(defmethod handle :contact-clicked [{:keys [rung-id branch-id contact-id]}]
  (handle-contact-click rung-id branch-id contact-id))

(defmethod handle :window-close-requested [_]
  (println "Window close requested, shutting down...")
  (javafx.application.Platform/exit)
  (System/exit 0))

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
  (println "Ladder Logic Viewer started!")
  ;; Add shutdown hook to properly close JavaFX
  (.addShutdownHook (Runtime/getRuntime)
                    (Thread. #(do
                                (println "Shutting down...")
                                (fx/unmount-renderer *state renderer)
                                (javafx.application.Platform/exit)))))


;; For development
(defn start []
  (fx/mount-renderer *state renderer))

(defn stop []
  (fx/unmount-renderer *state renderer))

;; Test function to load IL file
(defn test-load-il
  "Test function to load the sample IL file"
  []
  (let [file-path "sample.il"]
    (println "Loading IL file:" file-path)
    (update-state-from-il-file! file-path)
    (println "Loaded rungs:" (count (:rungs @*state)))))

;; Initialize with evaluated rungs
(swap! *state update :rungs #(mapv evaluate-rung %))

;; Start the application
(-main)

(comment
  ;; Test functions - uncomment to use
  (update-state-from-il-file! "sample.il")
  ;;=> {:rungs []}
  (test-load-il))
