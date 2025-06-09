// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__2973 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__2974 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__2974);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__2975 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__2976 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__2976);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__2975);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__2973);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__2978 = arguments.length;
switch (G__2978) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__2979 = ((cljs.core.map_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.call(null,vec__2979,(0),null);
var callback = cljs.core.nth.call(null,vec__2979,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__2983_2999 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__2984_3000 = null;
var count__2985_3001 = (0);
var i__2986_3002 = (0);
while(true){
if((i__2986_3002 < count__2985_3001)){
var vec__2993_3003 = cljs.core._nth.call(null,chunk__2984_3000,i__2986_3002);
var container_3004 = cljs.core.nth.call(null,vec__2993_3003,(0),null);
var comp_3005 = cljs.core.nth.call(null,vec__2993_3003,(1),null);
reagent.dom.re_render_component.call(null,comp_3005,container_3004);


var G__3006 = seq__2983_2999;
var G__3007 = chunk__2984_3000;
var G__3008 = count__2985_3001;
var G__3009 = (i__2986_3002 + (1));
seq__2983_2999 = G__3006;
chunk__2984_3000 = G__3007;
count__2985_3001 = G__3008;
i__2986_3002 = G__3009;
continue;
} else {
var temp__5804__auto___3010 = cljs.core.seq.call(null,seq__2983_2999);
if(temp__5804__auto___3010){
var seq__2983_3011__$1 = temp__5804__auto___3010;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2983_3011__$1)){
var c__5525__auto___3012 = cljs.core.chunk_first.call(null,seq__2983_3011__$1);
var G__3013 = cljs.core.chunk_rest.call(null,seq__2983_3011__$1);
var G__3014 = c__5525__auto___3012;
var G__3015 = cljs.core.count.call(null,c__5525__auto___3012);
var G__3016 = (0);
seq__2983_2999 = G__3013;
chunk__2984_3000 = G__3014;
count__2985_3001 = G__3015;
i__2986_3002 = G__3016;
continue;
} else {
var vec__2996_3017 = cljs.core.first.call(null,seq__2983_3011__$1);
var container_3018 = cljs.core.nth.call(null,vec__2996_3017,(0),null);
var comp_3019 = cljs.core.nth.call(null,vec__2996_3017,(1),null);
reagent.dom.re_render_component.call(null,comp_3019,container_3018);


var G__3020 = cljs.core.next.call(null,seq__2983_3011__$1);
var G__3021 = null;
var G__3022 = (0);
var G__3023 = (0);
seq__2983_2999 = G__3020;
chunk__2984_3000 = G__3021;
count__2985_3001 = G__3022;
i__2986_3002 = G__3023;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
