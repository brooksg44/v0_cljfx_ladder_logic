// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__2919__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__2919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2920__i = 0, G__2920__a = new Array(arguments.length -  0);
while (G__2920__i < G__2920__a.length) {G__2920__a[G__2920__i] = arguments[G__2920__i + 0]; ++G__2920__i;}
  args = new cljs.core.IndexedSeq(G__2920__a,0,null);
} 
return G__2919__delegate.call(this,args);};
G__2919.cljs$lang$maxFixedArity = 0;
G__2919.cljs$lang$applyTo = (function (arglist__2921){
var args = cljs.core.seq(arglist__2921);
return G__2919__delegate(args);
});
G__2919.cljs$core$IFn$_invoke$arity$variadic = G__2919__delegate;
return G__2919;
})()
);

(o.error = (function() { 
var G__2922__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__2922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2923__i = 0, G__2923__a = new Array(arguments.length -  0);
while (G__2923__i < G__2923__a.length) {G__2923__a[G__2923__i] = arguments[G__2923__i + 0]; ++G__2923__i;}
  args = new cljs.core.IndexedSeq(G__2923__a,0,null);
} 
return G__2922__delegate.call(this,args);};
G__2922.cljs$lang$maxFixedArity = 0;
G__2922.cljs$lang$applyTo = (function (arglist__2924){
var args = cljs.core.seq(arglist__2924);
return G__2922__delegate(args);
});
G__2922.cljs$core$IFn$_invoke$arity$variadic = G__2922__delegate;
return G__2922;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
