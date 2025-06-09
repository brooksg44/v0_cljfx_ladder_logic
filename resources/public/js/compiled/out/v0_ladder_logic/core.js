// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('v0_ladder_logic.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
v0_ladder_logic.core.Contact = (function (id,type,label,state,__meta,__extmap,__hash){
this.id = id;
this.type = type;
this.label = label;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(v0_ladder_logic.core.Contact.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(v0_ladder_logic.core.Contact.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k3047,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__3051 = k3047;
var G__3051__$1 = (((G__3051 instanceof cljs.core.Keyword))?G__3051.fqn:null);
switch (G__3051__$1) {
case "id":
return self__.id;

break;
case "type":
return self__.type;

break;
case "label":
return self__.label;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k3047,else__5303__auto__);

}
}));

(v0_ladder_logic.core.Contact.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5323__auto__,p__3052){
var vec__3053 = p__3052;
var k__5324__auto__ = cljs.core.nth.call(null,vec__3053,(0),null);
var v__5325__auto__ = cljs.core.nth.call(null,vec__3053,(1),null);
return f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__);
}),init__5322__auto__,this__5320__auto____$1);
}));

(v0_ladder_logic.core.Contact.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,pr_pair__5318__auto__,"#v0-ladder-logic.core.Contact{",", ","}",opts__5317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"label","label",1718410804),self__.label],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
}));

(v0_ladder_logic.core.Contact.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3046){
var self__ = this;
var G__3046__$1 = this;
return (new cljs.core.RecordIter((0),G__3046__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"state","state",-1988618099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(v0_ladder_logic.core.Contact.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(v0_ladder_logic.core.Contact.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new v0_ladder_logic.core.Contact(self__.id,self__.type,self__.label,self__.state,self__.__meta,self__.__extmap,self__.__hash));
}));

(v0_ladder_logic.core.Contact.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(v0_ladder_logic.core.Contact.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (487075302 ^ cljs.core.hash_unordered_coll.call(null,coll__5297__auto__));
}).call(null,this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(v0_ladder_logic.core.Contact.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3048,other3049){
var self__ = this;
var this3048__$1 = this;
return (((!((other3049 == null)))) && ((((this3048__$1.constructor === other3049.constructor)) && (((cljs.core._EQ_.call(null,this3048__$1.id,other3049.id)) && (((cljs.core._EQ_.call(null,this3048__$1.type,other3049.type)) && (((cljs.core._EQ_.call(null,this3048__$1.label,other3049.label)) && (((cljs.core._EQ_.call(null,this3048__$1.state,other3049.state)) && (cljs.core._EQ_.call(null,this3048__$1.__extmap,other3049.__extmap)))))))))))));
}));

(v0_ladder_logic.core.Contact.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"label","label",1718410804),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new v0_ladder_logic.core.Contact(self__.id,self__.type,self__.label,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5311__auto__)),null));
}
}));

(v0_ladder_logic.core.Contact.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k3047){
var self__ = this;
var this__5307__auto____$1 = this;
var G__3056 = k3047;
var G__3056__$1 = (((G__3056 instanceof cljs.core.Keyword))?G__3056.fqn:null);
switch (G__3056__$1) {
case "id":
case "type":
case "label":
case "state":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k3047);

}
}));

(v0_ladder_logic.core.Contact.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__3046){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__3057 = cljs.core.keyword_identical_QMARK_;
var expr__3058 = k__5309__auto__;
if(cljs.core.truth_(pred__3057.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__3058))){
return (new v0_ladder_logic.core.Contact(G__3046,self__.type,self__.label,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3057.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__3058))){
return (new v0_ladder_logic.core.Contact(self__.id,G__3046,self__.label,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3057.call(null,new cljs.core.Keyword(null,"label","label",1718410804),expr__3058))){
return (new v0_ladder_logic.core.Contact(self__.id,self__.type,G__3046,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3057.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__3058))){
return (new v0_ladder_logic.core.Contact(self__.id,self__.type,self__.label,G__3046,self__.__meta,self__.__extmap,null));
} else {
return (new v0_ladder_logic.core.Contact(self__.id,self__.type,self__.label,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5309__auto__,G__3046),null));
}
}
}
}
}));

(v0_ladder_logic.core.Contact.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"label","label",1718410804),self__.label,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null))], null),self__.__extmap));
}));

(v0_ladder_logic.core.Contact.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__3046){
var self__ = this;
var this__5299__auto____$1 = this;
return (new v0_ladder_logic.core.Contact(self__.id,self__.type,self__.label,self__.state,G__3046,self__.__extmap,self__.__hash));
}));

(v0_ladder_logic.core.Contact.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5306__auto__,(0)),cljs.core._nth.call(null,entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(v0_ladder_logic.core.Contact.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(v0_ladder_logic.core.Contact.cljs$lang$type = true);

(v0_ladder_logic.core.Contact.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"v0-ladder-logic.core/Contact",null,(1),null));
}));

(v0_ladder_logic.core.Contact.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write.call(null,writer__5347__auto__,"v0-ladder-logic.core/Contact");
}));

/**
 * Positional factory function for v0-ladder-logic.core/Contact.
 */
v0_ladder_logic.core.__GT_Contact = (function v0_ladder_logic$core$__GT_Contact(id,type,label,state){
return (new v0_ladder_logic.core.Contact(id,type,label,state,null,null,null));
});

/**
 * Factory function for v0-ladder-logic.core/Contact, taking a map of keywords to field values.
 */
v0_ladder_logic.core.map__GT_Contact = (function v0_ladder_logic$core$map__GT_Contact(G__3050){
var extmap__5342__auto__ = (function (){var G__3060 = cljs.core.dissoc.call(null,G__3050,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.record_QMARK_.call(null,G__3050)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__3060);
} else {
return G__3060;
}
})();
return (new v0_ladder_logic.core.Contact(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__3050),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__3050),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(G__3050),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__3050),null,cljs.core.not_empty.call(null,extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
v0_ladder_logic.core.Branch = (function (id,contacts,__meta,__extmap,__hash){
this.id = id;
this.contacts = contacts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(v0_ladder_logic.core.Branch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(v0_ladder_logic.core.Branch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k3064,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__3068 = k3064;
var G__3068__$1 = (((G__3068 instanceof cljs.core.Keyword))?G__3068.fqn:null);
switch (G__3068__$1) {
case "id":
return self__.id;

break;
case "contacts":
return self__.contacts;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k3064,else__5303__auto__);

}
}));

(v0_ladder_logic.core.Branch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5323__auto__,p__3069){
var vec__3070 = p__3069;
var k__5324__auto__ = cljs.core.nth.call(null,vec__3070,(0),null);
var v__5325__auto__ = cljs.core.nth.call(null,vec__3070,(1),null);
return f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__);
}),init__5322__auto__,this__5320__auto____$1);
}));

(v0_ladder_logic.core.Branch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,pr_pair__5318__auto__,"#v0-ladder-logic.core.Branch{",", ","}",opts__5317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"contacts","contacts",333503174),self__.contacts],null))], null),self__.__extmap));
}));

(v0_ladder_logic.core.Branch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3063){
var self__ = this;
var G__3063__$1 = this;
return (new cljs.core.RecordIter((0),G__3063__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"contacts","contacts",333503174)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(v0_ladder_logic.core.Branch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(v0_ladder_logic.core.Branch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new v0_ladder_logic.core.Branch(self__.id,self__.contacts,self__.__meta,self__.__extmap,self__.__hash));
}));

(v0_ladder_logic.core.Branch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(v0_ladder_logic.core.Branch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1093513854 ^ cljs.core.hash_unordered_coll.call(null,coll__5297__auto__));
}).call(null,this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(v0_ladder_logic.core.Branch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3065,other3066){
var self__ = this;
var this3065__$1 = this;
return (((!((other3066 == null)))) && ((((this3065__$1.constructor === other3066.constructor)) && (((cljs.core._EQ_.call(null,this3065__$1.id,other3066.id)) && (((cljs.core._EQ_.call(null,this3065__$1.contacts,other3066.contacts)) && (cljs.core._EQ_.call(null,this3065__$1.__extmap,other3066.__extmap)))))))));
}));

(v0_ladder_logic.core.Branch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contacts","contacts",333503174),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new v0_ladder_logic.core.Branch(self__.id,self__.contacts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5311__auto__)),null));
}
}));

(v0_ladder_logic.core.Branch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k3064){
var self__ = this;
var this__5307__auto____$1 = this;
var G__3073 = k3064;
var G__3073__$1 = (((G__3073 instanceof cljs.core.Keyword))?G__3073.fqn:null);
switch (G__3073__$1) {
case "id":
case "contacts":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k3064);

}
}));

(v0_ladder_logic.core.Branch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__3063){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__3074 = cljs.core.keyword_identical_QMARK_;
var expr__3075 = k__5309__auto__;
if(cljs.core.truth_(pred__3074.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__3075))){
return (new v0_ladder_logic.core.Branch(G__3063,self__.contacts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3074.call(null,new cljs.core.Keyword(null,"contacts","contacts",333503174),expr__3075))){
return (new v0_ladder_logic.core.Branch(self__.id,G__3063,self__.__meta,self__.__extmap,null));
} else {
return (new v0_ladder_logic.core.Branch(self__.id,self__.contacts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5309__auto__,G__3063),null));
}
}
}));

(v0_ladder_logic.core.Branch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"contacts","contacts",333503174),self__.contacts,null))], null),self__.__extmap));
}));

(v0_ladder_logic.core.Branch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__3063){
var self__ = this;
var this__5299__auto____$1 = this;
return (new v0_ladder_logic.core.Branch(self__.id,self__.contacts,G__3063,self__.__extmap,self__.__hash));
}));

(v0_ladder_logic.core.Branch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5306__auto__,(0)),cljs.core._nth.call(null,entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(v0_ladder_logic.core.Branch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"contacts","contacts",1974034701,null)], null);
}));

(v0_ladder_logic.core.Branch.cljs$lang$type = true);

(v0_ladder_logic.core.Branch.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"v0-ladder-logic.core/Branch",null,(1),null));
}));

(v0_ladder_logic.core.Branch.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write.call(null,writer__5347__auto__,"v0-ladder-logic.core/Branch");
}));

/**
 * Positional factory function for v0-ladder-logic.core/Branch.
 */
v0_ladder_logic.core.__GT_Branch = (function v0_ladder_logic$core$__GT_Branch(id,contacts){
return (new v0_ladder_logic.core.Branch(id,contacts,null,null,null));
});

/**
 * Factory function for v0-ladder-logic.core/Branch, taking a map of keywords to field values.
 */
v0_ladder_logic.core.map__GT_Branch = (function v0_ladder_logic$core$map__GT_Branch(G__3067){
var extmap__5342__auto__ = (function (){var G__3077 = cljs.core.dissoc.call(null,G__3067,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"contacts","contacts",333503174));
if(cljs.core.record_QMARK_.call(null,G__3067)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__3077);
} else {
return G__3077;
}
})();
return (new v0_ladder_logic.core.Branch(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__3067),new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(G__3067),null,cljs.core.not_empty.call(null,extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
v0_ladder_logic.core.Coil = (function (id,label,state,__meta,__extmap,__hash){
this.id = id;
this.label = label;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(v0_ladder_logic.core.Coil.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(v0_ladder_logic.core.Coil.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k3081,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__3085 = k3081;
var G__3085__$1 = (((G__3085 instanceof cljs.core.Keyword))?G__3085.fqn:null);
switch (G__3085__$1) {
case "id":
return self__.id;

break;
case "label":
return self__.label;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k3081,else__5303__auto__);

}
}));

(v0_ladder_logic.core.Coil.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5323__auto__,p__3086){
var vec__3087 = p__3086;
var k__5324__auto__ = cljs.core.nth.call(null,vec__3087,(0),null);
var v__5325__auto__ = cljs.core.nth.call(null,vec__3087,(1),null);
return f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__);
}),init__5322__auto__,this__5320__auto____$1);
}));

(v0_ladder_logic.core.Coil.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,pr_pair__5318__auto__,"#v0-ladder-logic.core.Coil{",", ","}",opts__5317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"label","label",1718410804),self__.label],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
}));

(v0_ladder_logic.core.Coil.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3080){
var self__ = this;
var G__3080__$1 = this;
return (new cljs.core.RecordIter((0),G__3080__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"state","state",-1988618099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(v0_ladder_logic.core.Coil.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(v0_ladder_logic.core.Coil.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new v0_ladder_logic.core.Coil(self__.id,self__.label,self__.state,self__.__meta,self__.__extmap,self__.__hash));
}));

(v0_ladder_logic.core.Coil.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(v0_ladder_logic.core.Coil.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1506607690 ^ cljs.core.hash_unordered_coll.call(null,coll__5297__auto__));
}).call(null,this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(v0_ladder_logic.core.Coil.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3082,other3083){
var self__ = this;
var this3082__$1 = this;
return (((!((other3083 == null)))) && ((((this3082__$1.constructor === other3083.constructor)) && (((cljs.core._EQ_.call(null,this3082__$1.id,other3083.id)) && (((cljs.core._EQ_.call(null,this3082__$1.label,other3083.label)) && (((cljs.core._EQ_.call(null,this3082__$1.state,other3083.state)) && (cljs.core._EQ_.call(null,this3082__$1.__extmap,other3083.__extmap)))))))))));
}));

(v0_ladder_logic.core.Coil.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"label","label",1718410804),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new v0_ladder_logic.core.Coil(self__.id,self__.label,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5311__auto__)),null));
}
}));

(v0_ladder_logic.core.Coil.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k3081){
var self__ = this;
var this__5307__auto____$1 = this;
var G__3090 = k3081;
var G__3090__$1 = (((G__3090 instanceof cljs.core.Keyword))?G__3090.fqn:null);
switch (G__3090__$1) {
case "id":
case "label":
case "state":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k3081);

}
}));

(v0_ladder_logic.core.Coil.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__3080){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__3091 = cljs.core.keyword_identical_QMARK_;
var expr__3092 = k__5309__auto__;
if(cljs.core.truth_(pred__3091.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__3092))){
return (new v0_ladder_logic.core.Coil(G__3080,self__.label,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3091.call(null,new cljs.core.Keyword(null,"label","label",1718410804),expr__3092))){
return (new v0_ladder_logic.core.Coil(self__.id,G__3080,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3091.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__3092))){
return (new v0_ladder_logic.core.Coil(self__.id,self__.label,G__3080,self__.__meta,self__.__extmap,null));
} else {
return (new v0_ladder_logic.core.Coil(self__.id,self__.label,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5309__auto__,G__3080),null));
}
}
}
}));

(v0_ladder_logic.core.Coil.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"label","label",1718410804),self__.label,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null))], null),self__.__extmap));
}));

(v0_ladder_logic.core.Coil.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__3080){
var self__ = this;
var this__5299__auto____$1 = this;
return (new v0_ladder_logic.core.Coil(self__.id,self__.label,self__.state,G__3080,self__.__extmap,self__.__hash));
}));

(v0_ladder_logic.core.Coil.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5306__auto__,(0)),cljs.core._nth.call(null,entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(v0_ladder_logic.core.Coil.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(v0_ladder_logic.core.Coil.cljs$lang$type = true);

(v0_ladder_logic.core.Coil.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"v0-ladder-logic.core/Coil",null,(1),null));
}));

(v0_ladder_logic.core.Coil.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write.call(null,writer__5347__auto__,"v0-ladder-logic.core/Coil");
}));

/**
 * Positional factory function for v0-ladder-logic.core/Coil.
 */
v0_ladder_logic.core.__GT_Coil = (function v0_ladder_logic$core$__GT_Coil(id,label,state){
return (new v0_ladder_logic.core.Coil(id,label,state,null,null,null));
});

/**
 * Factory function for v0-ladder-logic.core/Coil, taking a map of keywords to field values.
 */
v0_ladder_logic.core.map__GT_Coil = (function v0_ladder_logic$core$map__GT_Coil(G__3084){
var extmap__5342__auto__ = (function (){var G__3094 = cljs.core.dissoc.call(null,G__3084,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.record_QMARK_.call(null,G__3084)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__3094);
} else {
return G__3094;
}
})();
return (new v0_ladder_logic.core.Coil(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__3084),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(G__3084),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__3084),null,cljs.core.not_empty.call(null,extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
v0_ladder_logic.core.Rung = (function (id,branches,coil,logic,__meta,__extmap,__hash){
this.id = id;
this.branches = branches;
this.coil = coil;
this.logic = logic;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(v0_ladder_logic.core.Rung.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(v0_ladder_logic.core.Rung.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k3098,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__3102 = k3098;
var G__3102__$1 = (((G__3102 instanceof cljs.core.Keyword))?G__3102.fqn:null);
switch (G__3102__$1) {
case "id":
return self__.id;

break;
case "branches":
return self__.branches;

break;
case "coil":
return self__.coil;

break;
case "logic":
return self__.logic;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k3098,else__5303__auto__);

}
}));

(v0_ladder_logic.core.Rung.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5323__auto__,p__3103){
var vec__3104 = p__3103;
var k__5324__auto__ = cljs.core.nth.call(null,vec__3104,(0),null);
var v__5325__auto__ = cljs.core.nth.call(null,vec__3104,(1),null);
return f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__);
}),init__5322__auto__,this__5320__auto____$1);
}));

(v0_ladder_logic.core.Rung.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,pr_pair__5318__auto__,"#v0-ladder-logic.core.Rung{",", ","}",opts__5317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coil","coil",1134177722),self__.coil],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logic","logic",564698810),self__.logic],null))], null),self__.__extmap));
}));

(v0_ladder_logic.core.Rung.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__3097){
var self__ = this;
var G__3097__$1 = this;
return (new cljs.core.RecordIter((0),G__3097__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"branches","branches",-1240337268),new cljs.core.Keyword(null,"coil","coil",1134177722),new cljs.core.Keyword(null,"logic","logic",564698810)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(v0_ladder_logic.core.Rung.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(v0_ladder_logic.core.Rung.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new v0_ladder_logic.core.Rung(self__.id,self__.branches,self__.coil,self__.logic,self__.__meta,self__.__extmap,self__.__hash));
}));

(v0_ladder_logic.core.Rung.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(v0_ladder_logic.core.Rung.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1557279601 ^ cljs.core.hash_unordered_coll.call(null,coll__5297__auto__));
}).call(null,this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(v0_ladder_logic.core.Rung.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this3099,other3100){
var self__ = this;
var this3099__$1 = this;
return (((!((other3100 == null)))) && ((((this3099__$1.constructor === other3100.constructor)) && (((cljs.core._EQ_.call(null,this3099__$1.id,other3100.id)) && (((cljs.core._EQ_.call(null,this3099__$1.branches,other3100.branches)) && (((cljs.core._EQ_.call(null,this3099__$1.coil,other3100.coil)) && (((cljs.core._EQ_.call(null,this3099__$1.logic,other3100.logic)) && (cljs.core._EQ_.call(null,this3099__$1.__extmap,other3100.__extmap)))))))))))));
}));

(v0_ladder_logic.core.Rung.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"branches","branches",-1240337268),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"coil","coil",1134177722),null,new cljs.core.Keyword(null,"logic","logic",564698810),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new v0_ladder_logic.core.Rung(self__.id,self__.branches,self__.coil,self__.logic,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5311__auto__)),null));
}
}));

(v0_ladder_logic.core.Rung.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k3098){
var self__ = this;
var this__5307__auto____$1 = this;
var G__3107 = k3098;
var G__3107__$1 = (((G__3107 instanceof cljs.core.Keyword))?G__3107.fqn:null);
switch (G__3107__$1) {
case "id":
case "branches":
case "coil":
case "logic":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k3098);

}
}));

(v0_ladder_logic.core.Rung.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__3097){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__3108 = cljs.core.keyword_identical_QMARK_;
var expr__3109 = k__5309__auto__;
if(cljs.core.truth_(pred__3108.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__3109))){
return (new v0_ladder_logic.core.Rung(G__3097,self__.branches,self__.coil,self__.logic,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3108.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__3109))){
return (new v0_ladder_logic.core.Rung(self__.id,G__3097,self__.coil,self__.logic,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3108.call(null,new cljs.core.Keyword(null,"coil","coil",1134177722),expr__3109))){
return (new v0_ladder_logic.core.Rung(self__.id,self__.branches,G__3097,self__.logic,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__3108.call(null,new cljs.core.Keyword(null,"logic","logic",564698810),expr__3109))){
return (new v0_ladder_logic.core.Rung(self__.id,self__.branches,self__.coil,G__3097,self__.__meta,self__.__extmap,null));
} else {
return (new v0_ladder_logic.core.Rung(self__.id,self__.branches,self__.coil,self__.logic,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5309__auto__,G__3097),null));
}
}
}
}
}));

(v0_ladder_logic.core.Rung.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"coil","coil",1134177722),self__.coil,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logic","logic",564698810),self__.logic,null))], null),self__.__extmap));
}));

(v0_ladder_logic.core.Rung.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__3097){
var self__ = this;
var this__5299__auto____$1 = this;
return (new v0_ladder_logic.core.Rung(self__.id,self__.branches,self__.coil,self__.logic,G__3097,self__.__extmap,self__.__hash));
}));

(v0_ladder_logic.core.Rung.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5306__auto__,(0)),cljs.core._nth.call(null,entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(v0_ladder_logic.core.Rung.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"branches","branches",400194259,null),new cljs.core.Symbol(null,"coil","coil",-1520258047,null),new cljs.core.Symbol(null,"logic","logic",-2089736959,null)], null);
}));

(v0_ladder_logic.core.Rung.cljs$lang$type = true);

(v0_ladder_logic.core.Rung.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"v0-ladder-logic.core/Rung",null,(1),null));
}));

(v0_ladder_logic.core.Rung.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write.call(null,writer__5347__auto__,"v0-ladder-logic.core/Rung");
}));

/**
 * Positional factory function for v0-ladder-logic.core/Rung.
 */
v0_ladder_logic.core.__GT_Rung = (function v0_ladder_logic$core$__GT_Rung(id,branches,coil,logic){
return (new v0_ladder_logic.core.Rung(id,branches,coil,logic,null,null,null));
});

/**
 * Factory function for v0-ladder-logic.core/Rung, taking a map of keywords to field values.
 */
v0_ladder_logic.core.map__GT_Rung = (function v0_ladder_logic$core$map__GT_Rung(G__3101){
var extmap__5342__auto__ = (function (){var G__3111 = cljs.core.dissoc.call(null,G__3101,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"branches","branches",-1240337268),new cljs.core.Keyword(null,"coil","coil",1134177722),new cljs.core.Keyword(null,"logic","logic",564698810));
if(cljs.core.record_QMARK_.call(null,G__3101)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__3111);
} else {
return G__3111;
}
})();
return (new v0_ladder_logic.core.Rung(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__3101),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__3101),new cljs.core.Keyword(null,"coil","coil",1134177722).cljs$core$IFn$_invoke$arity$1(G__3101),new cljs.core.Keyword(null,"logic","logic",564698810).cljs$core$IFn$_invoke$arity$1(G__3101),null,cljs.core.not_empty.call(null,extmap__5342__auto__),null));
});

v0_ladder_logic.core.initial_rungs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.__GT_Rung.call(null,"rung1",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.__GT_Branch.call(null,"branch1a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.__GT_Contact.call(null,"x1","NO","X1",true),v0_ladder_logic.core.__GT_Contact.call(null,"x2","NO","X2",false)], null))], null),v0_ladder_logic.core.__GT_Coil.call(null,"y1","Y1",false),"X1 AND X2"),v0_ladder_logic.core.__GT_Rung.call(null,"rung2",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.__GT_Branch.call(null,"branch2a",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.__GT_Contact.call(null,"x2","NO","X2",false)], null)),v0_ladder_logic.core.__GT_Branch.call(null,"branch2b",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.__GT_Contact.call(null,"x3","NO","X3",true),v0_ladder_logic.core.__GT_Contact.call(null,"x4","NC","X4",false)], null))], null),v0_ladder_logic.core.__GT_Coil.call(null,"y1","Y1",true),"X2 OR (X3 AND NOT X4)"),v0_ladder_logic.core.__GT_Rung.call(null,"rung3",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.__GT_Branch.call(null,"branch3a",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.__GT_Contact.call(null,"x1","NO","X1",true)], null)),v0_ladder_logic.core.__GT_Branch.call(null,"branch3b",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.__GT_Contact.call(null,"x5","NC","X5",true)], null)),v0_ladder_logic.core.__GT_Branch.call(null,"branch3c",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.__GT_Contact.call(null,"x6","NO","X6",false),v0_ladder_logic.core.__GT_Contact.call(null,"x7","NO","X7",false)], null))], null),v0_ladder_logic.core.__GT_Coil.call(null,"y2","Y2",true),"X1 OR NOT X5 OR (X6 AND X7)")], null);
v0_ladder_logic.core.contact_satisfied_QMARK_ = (function v0_ladder_logic$core$contact_satisfied_QMARK_(contact){

var G__3114 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(contact);
switch (G__3114) {
case "NO":
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(contact);

break;
case "NC":
return cljs.core.not.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(contact));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3114)].join('')));

}
});
v0_ladder_logic.core.branch_satisfied_QMARK_ = (function v0_ladder_logic$core$branch_satisfied_QMARK_(branch){

return cljs.core.every_QMARK_.call(null,v0_ladder_logic.core.contact_satisfied_QMARK_,new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(branch));
});
v0_ladder_logic.core.rung_satisfied_QMARK_ = (function v0_ladder_logic$core$rung_satisfied_QMARK_(rung){

return cljs.core.some.call(null,v0_ladder_logic.core.branch_satisfied_QMARK_,new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(rung));
});
v0_ladder_logic.core.evaluate_rung = (function v0_ladder_logic$core$evaluate_rung(rung){

var coil_state = v0_ladder_logic.core.rung_satisfied_QMARK_.call(null,rung);
return cljs.core.assoc_in.call(null,rung,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coil","coil",1134177722),new cljs.core.Keyword(null,"state","state",-1988618099)], null),coil_state);
});
if((typeof v0_ladder_logic !== 'undefined') && (typeof v0_ladder_logic.core !== 'undefined') && (typeof v0_ladder_logic.core.app_state !== 'undefined')){
} else {
v0_ladder_logic.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rungs","rungs",822055505),v0_ladder_logic.core.initial_rungs], null));
}
v0_ladder_logic.core.find_contact_path = (function v0_ladder_logic$core$find_contact_path(rungs,rung_id,branch_id,contact_id){

var iter__5480__auto__ = (function v0_ladder_logic$core$find_contact_path_$_iter__3116(s__3117){
return (new cljs.core.LazySeq(null,(function (){
var s__3117__$1 = s__3117;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__3117__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var rung_idx = cljs.core.first.call(null,xs__6360__auto__);
var rung = cljs.core.nth.call(null,rungs,rung_idx);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(rung),rung_id)){
var iterys__5476__auto__ = ((function (s__3117__$1,rung,rung_idx,xs__6360__auto__,temp__5804__auto__){
return (function v0_ladder_logic$core$find_contact_path_$_iter__3116_$_iter__3118(s__3119){
return (new cljs.core.LazySeq(null,((function (s__3117__$1,rung,rung_idx,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__3119__$1 = s__3119;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__3119__$1);
if(temp__5804__auto____$1){
var xs__6360__auto____$1 = temp__5804__auto____$1;
var branch_idx = cljs.core.first.call(null,xs__6360__auto____$1);
var branch = cljs.core.nth.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(rung),branch_idx);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(branch),branch_id)){
var iterys__5476__auto__ = ((function (s__3119__$1,s__3117__$1,branch,branch_idx,xs__6360__auto____$1,temp__5804__auto____$1,rung,rung_idx,xs__6360__auto__,temp__5804__auto__){
return (function v0_ladder_logic$core$find_contact_path_$_iter__3116_$_iter__3118_$_iter__3120(s__3121){
return (new cljs.core.LazySeq(null,((function (s__3119__$1,s__3117__$1,branch,branch_idx,xs__6360__auto____$1,temp__5804__auto____$1,rung,rung_idx,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__3121__$1 = s__3121;
while(true){
var temp__5804__auto____$2 = cljs.core.seq.call(null,s__3121__$1);
if(temp__5804__auto____$2){
var s__3121__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3121__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__3121__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__3123 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__3122 = (0);
while(true){
if((i__3122 < size__5479__auto__)){
var contact_idx = cljs.core._nth.call(null,c__5478__auto__,i__3122);
var contact = cljs.core.nth.call(null,new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(branch),contact_idx);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(contact),contact_id)){
cljs.core.chunk_append.call(null,b__3123,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rung_idx,branch_idx,contact_idx], null));

var G__3124 = (i__3122 + (1));
i__3122 = G__3124;
continue;
} else {
var G__3125 = (i__3122 + (1));
i__3122 = G__3125;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3123),v0_ladder_logic$core$find_contact_path_$_iter__3116_$_iter__3118_$_iter__3120.call(null,cljs.core.chunk_rest.call(null,s__3121__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3123),null);
}
} else {
var contact_idx = cljs.core.first.call(null,s__3121__$2);
var contact = cljs.core.nth.call(null,new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(branch),contact_idx);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(contact),contact_id)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rung_idx,branch_idx,contact_idx], null),v0_ladder_logic$core$find_contact_path_$_iter__3116_$_iter__3118_$_iter__3120.call(null,cljs.core.rest.call(null,s__3121__$2)));
} else {
var G__3126 = cljs.core.rest.call(null,s__3121__$2);
s__3121__$1 = G__3126;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__3119__$1,s__3117__$1,branch,branch_idx,xs__6360__auto____$1,temp__5804__auto____$1,rung,rung_idx,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__3119__$1,s__3117__$1,branch,branch_idx,xs__6360__auto____$1,temp__5804__auto____$1,rung,rung_idx,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq.call(null,iterys__5476__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(branch)))));
if(fs__5477__auto__){
return cljs.core.concat.call(null,fs__5477__auto__,v0_ladder_logic$core$find_contact_path_$_iter__3116_$_iter__3118.call(null,cljs.core.rest.call(null,s__3119__$1)));
} else {
var G__3127 = cljs.core.rest.call(null,s__3119__$1);
s__3119__$1 = G__3127;
continue;
}
} else {
var G__3128 = cljs.core.rest.call(null,s__3119__$1);
s__3119__$1 = G__3128;
continue;
}
} else {
return null;
}
break;
}
});})(s__3117__$1,rung,rung_idx,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__3117__$1,rung,rung_idx,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq.call(null,iterys__5476__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(rung)))));
if(fs__5477__auto__){
return cljs.core.concat.call(null,fs__5477__auto__,v0_ladder_logic$core$find_contact_path_$_iter__3116.call(null,cljs.core.rest.call(null,s__3117__$1)));
} else {
var G__3129 = cljs.core.rest.call(null,s__3117__$1);
s__3117__$1 = G__3129;
continue;
}
} else {
var G__3130 = cljs.core.rest.call(null,s__3117__$1);
s__3117__$1 = G__3130;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,rungs)));
});
v0_ladder_logic.core.toggle_contact = (function v0_ladder_logic$core$toggle_contact(rungs,rung_id,branch_id,contact_id){

var vec__3131 = cljs.core.first.call(null,v0_ladder_logic.core.find_contact_path.call(null,rungs,rung_id,branch_id,contact_id));
var rung_idx = cljs.core.nth.call(null,vec__3131,(0),null);
var branch_idx = cljs.core.nth.call(null,vec__3131,(1),null);
var contact_idx = cljs.core.nth.call(null,vec__3131,(2),null);
if(cljs.core.truth_((function (){var and__5000__auto__ = rung_idx;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = branch_idx;
if(cljs.core.truth_(and__5000__auto____$1)){
return contact_idx;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
var updated_rungs = cljs.core.update_in.call(null,rungs,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rung_idx,new cljs.core.Keyword(null,"branches","branches",-1240337268),branch_idx,new cljs.core.Keyword(null,"contacts","contacts",333503174),contact_idx,new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core.not);
return cljs.core.mapv.call(null,v0_ladder_logic.core.evaluate_rung,updated_rungs);
} else {
return rungs;
}
});
v0_ladder_logic.core.handle_contact_click = (function v0_ladder_logic$core$handle_contact_click(rung_id,branch_id,contact_id){
return cljs.core.swap_BANG_.call(null,v0_ladder_logic.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"rungs","rungs",822055505),v0_ladder_logic.core.toggle_contact,rung_id,branch_id,contact_id);
});
v0_ladder_logic.core.contact_classes = (function v0_ladder_logic$core$contact_classes(contact){
return ["contact ",(cljs.core.truth_(v0_ladder_logic.core.contact_satisfied_QMARK_.call(null,contact))?"active":"inactive")].join('');
});
v0_ladder_logic.core.coil_classes = (function v0_ladder_logic$core$coil_classes(coil){
return ["coil ",(cljs.core.truth_(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(coil))?"energized":"de-energized")].join('');
});
v0_ladder_logic.core.contact_symbol = (function v0_ladder_logic$core$contact_symbol(contact,rung_id,branch_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),v0_ladder_logic.core.contact_classes.call(null,contact),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return v0_ladder_logic.core.handle_contact_click.call(null,rung_id,branch_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(contact));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.contact-label","span.contact-label",1827338411),[((cljs.core._EQ_.call(null,"NC",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(contact)))?"/":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(contact))].join('')], null)], null);
});
v0_ladder_logic.core.coil_symbol = (function v0_ladder_logic$core$coil_symbol(coil){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),v0_ladder_logic.core.coil_classes.call(null,coil)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.coil-label","span.coil-label",74210282),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(coil)),")"].join('')], null)], null);
});
v0_ladder_logic.core.branch_component = (function v0_ladder_logic$core$branch_component(branch,rung_id,is_first_QMARK_,is_last_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.branch","div.branch",-1995614140),(cljs.core.truth_(is_first_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.connection-line.top","div.connection-line.top",99939465)], null)),(cljs.core.truth_(is_last_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.connection-line.bottom","div.connection-line.bottom",-395445023)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contacts-series","div.contacts-series",1805316799),cljs.core.map_indexed.call(null,(function (idx,contact){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contact-container","div.contact-container",-150750751),(((idx > (0)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.horizontal-line","div.horizontal-line",-739210867)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.contact_symbol,contact,rung_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(branch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(contact)], null));
}),new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(branch))], null)], null);
});
v0_ladder_logic.core.rung_component = (function v0_ladder_logic$core$rung_component(rung,index){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rung","div.rung",24652668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(rung)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rung-header","div.rung-header",1202905333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.rung-number","span.rung-number",42870887),["Rung ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((index + (1))),":"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.rung-logic","span.rung-logic",-1260205479),new cljs.core.Keyword(null,"logic","logic",564698810).cljs$core$IFn$_invoke$arity$1(rung)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rung-body","div.rung-body",-1889716079),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.power-rail.left","div.power-rail.left",-427263361)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.branches-container","div.branches-container",1994106936),cljs.core.map_indexed.call(null,(function (idx,branch){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.branch_component,branch,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(rung),cljs.core._EQ_.call(null,idx,(0)),cljs.core._EQ_.call(null,idx,(cljs.core.count.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(rung)) - (1)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(branch)], null));
}),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(rung))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.connection-to-coil","div.connection-to-coil",93215385)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.coil_symbol,new cljs.core.Keyword(null,"coil","coil",1134177722).cljs$core$IFn$_invoke$arity$1(rung)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.power-rail.right","div.power-rail.right",1363919594)], null)], null)], null);
});
v0_ladder_logic.core.legend_component = (function v0_ladder_logic$core$legend_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend","div.legend",-315677844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Legend:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend-items","div.legend-items",177763013),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u2022 NO = Normally Open contact"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u2022 NC = Normally Closed contact (with /)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u2022 Green = Contact is active/closed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u2022 Red = Coil is energized"], null)], null)], null);
});
v0_ladder_logic.core.ladder_logic_viewer = (function v0_ladder_logic$core$ladder_logic_viewer(){
var rungs = new cljs.core.Keyword(null,"rungs","rungs",822055505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,v0_ladder_logic.core.app_state));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ladder-logic-viewer","div.ladder-logic-viewer",178919203),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Ladder Logic Viewer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Click on contacts to toggle their state and see how it affects the outputs"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rungs-container","div.rungs-container",519826632),cljs.core.map_indexed.call(null,(function (idx,rung){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.rung_component,rung,idx], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(rung)], null));
}),rungs)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.legend_component], null)], null);
});
v0_ladder_logic.core.styles = "\n  .ladder-logic-viewer {\n    max-width: 1024px;\n    margin: 0 auto;\n    padding: 16px;\n  }\n  \n  .header h1 {\n    font-size: 24px;\n    font-weight: bold;\n    margin-bottom: 8px;\n  }\n  \n  .rung {\n    margin-bottom: 24px;\n    padding: 16px;\n    background-color: #f9fafb;\n    border-radius: 8px;\n  }\n  \n  .rung-header {\n    display: flex;\n    align-items: center;\n    margin-bottom: 8px;\n    font-size: 14px;\n    color: #6b7280;\n  }\n  \n  .rung-logic {\n    margin-left: 8px;\n    padding: 2px 8px;\n    background-color: white;\n    border: 1px solid #d1d5db;\n    border-radius: 4px;\n  }\n  \n  .rung-body {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n  \n  .power-rail {\n    width: 4px;\n    height: 64px;\n    background-color: black;\n  }\n  \n  .branches-container {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    position: relative;\n  }\n  \n  .branch {\n    display: flex;\n    align-items: center;\n    position: relative;\n  }\n  \n  .contacts-series {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n  }\n  \n  .contact {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 64px;\n    height: 32px;\n    border: 2px solid;\n    cursor: pointer;\n    transition: all 0.2s;\n  }\n  \n  .contact.active {\n    border-color: #10b981;\n    background-color: #d1fae5;\n    color: #065f46;\n  }\n  \n  .contact.inactive {\n    border-color: #9ca3af;\n    background-color: #f3f4f6;\n    color: #6b7280;\n  }\n  \n  .coil {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 32px;\n    border: 2px solid;\n    border-radius: 4px;\n  }\n  \n  .coil.energized {\n    border-color: #ef4444;\n    background-color: #fee2e2;\n    color: #991b1b;\n  }\n  \n  .coil.de-energized {\n    border-color: #9ca3af;\n    background-color: #f3f4f6;\n    color: #6b7280;\n  }\n  \n  .horizontal-line {\n    width: 16px;\n    height: 2px;\n    background-color: black;\n  }\n  \n  .connection-to-coil {\n    width: 32px;\n    height: 2px;\n    background-color: black;\n  }\n  \n  .legend {\n    margin-top: 24px;\n    padding: 16px;\n    background-color: #dbeafe;\n    border-radius: 8px;\n  }\n  \n  .legend h3 {\n    font-weight: 600;\n    margin-bottom: 8px;\n  }\n  \n  .legend-items {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n    font-size: 14px;\n  }\n  ";
v0_ladder_logic.core.app = (function v0_ladder_logic$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),v0_ladder_logic.core.styles], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.ladder_logic_viewer], null)], null);
});
v0_ladder_logic.core.init = (function v0_ladder_logic$core$init(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0_ladder_logic.core.app], null),document.getElementById("app"));
});
v0_ladder_logic.core.main = (function v0_ladder_logic$core$main(){
return v0_ladder_logic.core.init.call(null);
});
goog.exportSymbol('v0_ladder_logic.core.main', v0_ladder_logic.core.main);
v0_ladder_logic.core.init.call(null);

//# sourceMappingURL=core.js.map
