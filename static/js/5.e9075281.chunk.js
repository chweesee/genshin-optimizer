(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[5],{191:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(16),c=a(14),r=a(52),i=a(1),s=function(){return Object(i.jsx)(r.a,{icon:c.x})},o=function(e){var t=e.stars,a=e.colored,c=void 0!==a&&a;return Object(i.jsx)("span",{className:c?"text-5star":"",children:t?Object(n.a)(Array(t).keys()).map((function(e,t){return Object(i.jsx)(s,{},t)})):null})}},192:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(207),c=a(111),r=a(16),i=a(11),s=a(4),o=a(21),l=a(43),d=a(110),u=a(99),j=a(35),b=a(80),f=a(42),h=a(36),v=a(199),O=a(12),m=a(9),p=a(44),x=function e(){if(Object(o.a)(this,e),this instanceof e)throw Error("A static class cannot be instantiated.")};x.getElementalName=function(e){return b.a[e].name},x.getLevelString=function(e){return"".concat(e.level,"/").concat(j.a[e.ascension])},x.getTalentFieldValue=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return e[t]?Object(m.f)(e[t],a):n},x.hasOverride=function(e,t){return"finalHP"===t?x.hasOverride(e,"hp")||x.hasOverride(e,"hp_")||x.hasOverride(e,"characterHP"):"finalDEF"===t?x.hasOverride(e,"def")||x.hasOverride(e,"def_")||x.hasOverride(e,"characterDEF"):"finalATK"===t?x.hasOverride(e,"atk")||x.hasOverride(e,"atk_")||x.hasOverride(e,"characterATK"):!!(null===e||void 0===e?void 0:e.baseStatOverrides)&&t in e.baseStatOverrides},x.getBaseStatValue=function(e,t,a,n){return"enemyLevel"===n?e.level:n.includes("enemyRes_")?10:n in j.b?j.b[n]:0},x.getStatValueWithOverride=function(e,t,a,n){var c,r;return x.hasOverride(e,n)?null!==(c=null===(r=e.baseStatOverrides)||void 0===r?void 0:r[n])&&void 0!==c?c:0:x.getBaseStatValue(e,t,a,n)},x.calculateBuild=function(e,t,a,n){var c,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;e.artifacts?c=Object.fromEntries(e.artifacts.map((function(e,t){return[t,e]}))):e.equippedArtifacts&&(c=Object.fromEntries(Object.entries(e.equippedArtifacts).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return[a,f.a._getArt(n)]}))));var i=x.createInitialStats(e,t,a);return i.mainStatAssumptionLevel=r,x.calculateBuildwithArtifact(i,c,n)},x.calculateBuildwithArtifact=function(e,t,a){var n,c=l.a.setToSlots(t),r=d.a.setEffectsStats(a,e,c),o=Object(m.d)(e);Object.values(t).forEach((function(e){e&&(o[e.mainStatKey]=(o[e.mainStatKey]||0)+l.a.mainStatValue(e.mainStatKey,e.numStars,Math.max(Math.min(o.mainStatAssumptionLevel,4*e.numStars),e.level)),e.substats.forEach((function(e){return e&&e.key&&(o[e.key]=(o[e.key]||0)+e.value)})))})),Object(p.a)(o,r),u.a.parseConditionalValues({artifact:null===o||void 0===o||null===(n=o.conditionalValues)||void 0===n?void 0:n.artifact},(function(e,t,a){var n,r,i=Object(s.a)(a,3),l=i[1],d=i[2];if(!(parseInt(d)>(null!==(n=null===c||void 0===c||null===(r=c[l])||void 0===r?void 0:r.length)&&void 0!==n?n:0))){var j=u.a.resolve(e,o,t).stats;Object(p.a)(o,j)}})),o.equippedArtifacts=Object.fromEntries(Object.entries(t).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return[a,null===n||void 0===n?void 0:n.id]}))),o.setToSlots=c;var j=Object(v.a)(o,null===o||void 0===o?void 0:o.modifiers),b=Object(h.c)(j,o),f=b.initialStats;return(0,b.formula)(f),Object(i.a)(Object(i.a)({},o),f)},x.createInitialStats=function(e,t,a){var o,l,d,b=e=Object(m.d)(e),f=b.characterKey,h=b.elementKey,v=b.level,g=b.ascension,y=b.hitMode,S=b.infusionAura,w=b.reactionMode,N=b.talentLevelKeys,E=b.constellation,_=b.equippedArtifacts,k=b.conditionalValues,A=void 0===k?{}:k,K=b.weapon,C=["enemyLevel"].concat(Object(r.a)(Object.keys(j.b))),T=Object.fromEntries(C.map((function(n){return[n,x.getStatValueWithOverride(e,t,a,n)]})));T.characterHP=t.getBase("hp",v,g),T.characterDEF=t.getBase("def",v,g),T.characterATK=t.getBase("atk",v,g),T.characterLevel=v,T.characterEle=null!==(o=null!==(l=t.elementKey)&&void 0!==l?l:h)&&void 0!==o?o:"anemo",T.characterKey=f,T.hitMode=y,T.infusionAura=S,T.reactionMode=w,T.conditionalValues=A,T.weaponType=t.weaponTypeKey,T.tlvl=N,T.constellation=E,T.ascension=g,T.weapon=Object(m.d)(K),T.equippedArtifacts=_,["physical"].concat(Object(r.a)(O.d)).forEach((function(n){var c="".concat(n,"_enemyRes_");T[c]=x.getStatValueWithOverride(e,t,a,c),c="".concat(n,"_enemyImmunity"),T[c]=x.getStatValueWithOverride(e,t,a,c)}));var V=(null===(d=e)||void 0===d?void 0:d.baseStatOverrides)||{};Object.entries(V).forEach((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];T.hasOwnProperty(a)||(T[a]=n)}));var M=t.getSpecializedStat(g);if(M){var B=t.getSpecializedStatVal(g);Object(p.a)(T,Object(c.a)({},M,B))}for(var F in t.getTalentStatsAll(T,T.characterEle).forEach((function(e){return Object(p.a)(T,e)})),T.tlvl){var I;T.tlvl[F]+=null!==(I=T["".concat(F,"Boost")])&&void 0!==I?I:0}var L=a.getMainStatValue(K.level,K.ascension);T.weaponATK=L;var W=a.getSubStatKey();W&&Object(p.a)(T,Object(c.a)({},W,a.getSubStatValue(K.level,K.ascension))),Object(p.a)(T,a.stats(T));A.artifact;var z=A.weapon,D=Object(n.a)(A,["artifact","weapon"]);return u.a.parseConditionalValues(Object(i.a)(Object(i.a)({},K.key&&{weapon:Object(c.a)({},K.key,null===z||void 0===z?void 0:z[K.key])}),D),(function(e,t,a){if(("character"!==a[0]||"talents"!==a[3]||a[4]===h)&&u.a.canShow(e,T)){var n=u.a.resolve(e,T,t).stats;Object(p.a)(T,n)}})),T},x.getDisplayStatKeys=function(e,t){var a=t.characterSheet,n=t.weaponSheet,c=t.artifactSheets,r=e.characterEle,o=["finalHP","finalATK","finalDEF","eleMas","critRate_","critDMG_","heal_","enerRech_","".concat(r,"_dmg_")];a.isAutoElemental||o.push("physical_dmg_");var l=Object(m.d)(h.a[r]),d=a.weaponTypeKey;l.includes("shattered_hit")||"claymore"!==d||l.push("shattered_hit");var j={},b=a.getTalent(r),f=function(t,a){return t.forEach((function(t){var n;t.formula&&(null===t||void 0===t||null===(n=t.canShow)||void 0===n?void 0:n.call(t,e))&&(j[a]||(j[a]=[]),j[a].push(t.formula.keys))}))},v=function(t,a){if(t.conditional&&u.a.canShow(t.conditional,e)){var n=u.a.resolve(t.conditional,e,null).fields;n&&f(n,a)}t.fields&&f(t.fields,a)};b&&Object.entries(b.sheets).forEach((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1].sections;"normal"!==a&&"charged"!==a&&"plunging"!==a||(a="auto"),n.forEach((function(e){return v(e,"talentKey_".concat(a))}))}));var O="weapon_".concat(e.weapon.key);return n.document&&n.document.map((function(e){return v(e,O)})),e.setToSlots&&Object.entries(e.setToSlots).map((function(e){var t=Object(s.a)(e,2);return[t[0],t[1].length]})).forEach((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1],r=c[a];r&&Object.entries(r.setEffects).forEach((function(e){var t=Object(s.a)(e,2),c=t[0],r=t[1].document;n<parseInt(c)||r&&r.map((function(e){return v(e,"artifact_".concat(a,"_").concat(c))}))}))})),Object(i.a)(Object(i.a)({basicKeys:o},j),{},{transReactions:l})}},198:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return l})),a.d(t,"e",(function(){return d})),a.d(t,"f",(function(){return u})),a.d(t,"g",(function(){return j})),a.d(t,"d",(function(){return f}));var n=a(52),c=a(54),r=a(1);function i(e){var t=e.noColor,a=void 0!==t&&t;return Object(r.jsx)(n.a,{icon:c.a,className:a?"":"text-anemo"})}function s(e){var t=e.noColor,a=void 0!==t&&t;return Object(r.jsx)(n.a,{icon:c.b,className:a?"":"text-cryo"})}function o(e){var t=e.noColor,a=void 0!==t&&t;return Object(r.jsx)(n.a,{icon:c.c,className:a?"":"text-dendro"})}function l(e){var t=e.noColor,a=void 0!==t&&t;return Object(r.jsx)(n.a,{icon:c.d,className:a?"":"text-electro"})}function d(e){var t=e.noColor,a=void 0!==t&&t;return Object(r.jsx)(n.a,{icon:c.e,className:a?"":"text-geo"})}function u(e){var t=e.noColor,a=void 0!==t&&t;return Object(r.jsx)(n.a,{icon:c.f,className:a?"":"text-hydro"})}function j(e){var t=e.noColor,a=void 0!==t&&t;return Object(r.jsx)(n.a,{icon:c.g,className:a?"":"text-pyro"})}var b={anemo:Object(r.jsx)(i,{}),cryo:Object(r.jsx)(s,{}),dendro:Object(r.jsx)(o,{}),electro:Object(r.jsx)(l,{}),geo:Object(r.jsx)(d,{}),hydro:Object(r.jsx)(u,{}),pyro:Object(r.jsx)(j,{})},f={anemo:i,cryo:s,dendro:o,electro:l,geo:d,hydro:u,pyro:j};t.h=b},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(4),c=a(16),r=a(69),i=a(36);function s(e){var t=new Set;return e(new Proxy({},{get:function(e,a,n){t.add(a.toString())}})),Object(c.a)(t)}var o=Object.freeze(Object.fromEntries(Object.entries(i.b).map((function(e){var t=Object(n.a)(e,2);return[t[0],s(t[1])]}))));function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.keys(i.d),n=new Set,r=[new Set,new Set];return a.forEach((function(a){return d(e,a,t,r,n)})),r.flatMap((function(e){return Object(c.a)(e)}))}function d(e,t,a,n,c){var s,l;c.has(t)||(c.add(t),null===(s=o[t])||void 0===s||s.forEach((function(t){return d(e,t,a,n,c)})),(null!==(l=a[t])&&void 0!==l?l:[]).forEach((function(t){return r.a.getCurrent(t,e)[1].forEach((function(t){return d(e,t,a,n,c)}))})),n[Object(i.e)(t)].add(t))}},200:function(e,t,a){"use strict";var n={weaponTypes:{bow:a.p+"static/media/Weapon-class-bow-icon.b8e7b5ca.png",catalyst:a.p+"static/media/Weapon-class-catalyst-icon.2cbef800.png",claymore:a.p+"static/media/Weapon-class-claymore-icon.17418b20.png",polearm:a.p+"static/media/Weapon-class-polearm-icon.a4e7fffc.png",sword:a.p+"static/media/Weapon-class-sword-icon.4470b487.png"},resin:{fragile:a.p+"static/media/Item_Fragile_Resin.f9ec8223.png",condensed:a.p+"static/media/Item_Condensed_Resin.1cecf64a.png"},exp_books:{advice:a.p+"static/media/Item_Wanderer's_Advice.58c62cf7.png",wit:a.p+"static/media/Item_Hero's_Wit.a79e36d0.png",experience:a.p+"static/media/Item_Adventurer's_Experience.92b5d195.png"}};t.a=n},207:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}a.d(t,"a",(function(){return n}))},215:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(4),c=a(14),r=a(52),i=a(0),s=a(505),o=a(27),l=a(62),d=a(30),u=a(58),j=a(188),b=a(9),f=a(1);function h(e){var t,a,h=e.pageKey,v=void 0===h?"":h,O=e.text,m=void 0===O?"":O,p=e.modalTitle,x=void 0===p?"":p,g=e.children,y=Object(i.useState)(null===(t=null===(a=Object(b.l)("infoShown"))||void 0===a?void 0:a[v])||void 0===t||t),S=Object(n.a)(y,2),w=S[0],N=S[1],E=Object(i.useState)(Array.isArray(m)?Object(b.g)(m):m),_=Object(n.a)(E,1)[0],k=function(){var e,t=null!==(e=Object(b.l)("infoShown"))&&void 0!==e?e:{};t[v]=!1,Object(b.p)("infoShown",t),N(!1)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(s.a,{show:w,onHide:function(){return k()},size:"xl",variant:"success",contentClassName:"bg-transparent",children:Object(f.jsxs)(o.a,{bg:"darkcontent",text:"lightfont",children:[Object(f.jsx)(o.a.Header,{children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(d.a,{children:Object(f.jsx)(o.a.Title,{children:x})}),Object(f.jsx)(d.a,{xs:"auto",children:Object(f.jsx)(u.a,{variant:"danger",onClick:function(){return k()},children:Object(f.jsx)(r.a,{icon:c.z})})})]})}),Object(f.jsx)(o.a.Body,{children:Object(f.jsx)(i.Suspense,{fallback:Object(f.jsxs)("h3",{className:"text-center",children:["Loading... ",Object(f.jsx)(j.a,{animation:"border",variant:"primary"})]}),children:g})}),Object(f.jsx)(o.a.Footer,{children:Object(f.jsx)(u.a,{variant:"danger",onClick:function(){return k()},children:Object(f.jsx)("span",{children:"Close"})})})]})}),Object(f.jsx)(o.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(f.jsx)(o.a.Body,{className:"pl-2 py-0 pr-0",children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(d.a,{children:Object(f.jsx)("small",{children:_})}),Object(f.jsx)(d.a,{xs:"auto",children:Object(f.jsx)(u.a,{size:"sm",variant:"info",className:"m-0 py-1",onClick:function(){return N(!0)},children:Object(f.jsx)(r.a,{icon:c.r})})})]})})})]})}},271:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var n=a(16),c=a(4),r=a(14),i=a(52),s=a(0),o=a(202),l=a(153),d=a(58),u=a(27),j=a(30),b=a(62),f=a(48),h=a(110),v=a(200),O=a(198),m=a(191),p=a(116),x=a(42),g=a(24),y=a(79),S=a(114),w=a(192),N=a(113),E=a(1);function _(e){var t,a=e.characterKey,_=e.onEdit,k=e.onDelete,A=e.cardClassName,K=void 0===A?"":A,C=e.bg,T=void 0===C?"":C,V=e.header,M=e.footer,B=void 0!==M&&M,F=Object(s.useState)(void 0),I=Object(c.a)(F,2),L=I[0],W=I[1];Object(s.useEffect)((function(){return a?x.a.followChar(a,W):void 0}),[a,W]);var z=Object(y.b)(h.a.getAll(),[]),D=L,H=Object(y.b)(N.b.get(a),[a]),P=Object(y.b)(D&&S.a.get(D.weapon.key),[D]),R=Object(s.useMemo)((function(){return D&&H&&P&&z&&w.a.calculateBuild(D,H,P,z)}),[D,H,P,z]);if(!D||!H||!P||!R)return null;var q=D.weapon,U=D.constellation,G=q.level,J=q.ascension,Q=R.tlvl,X=H.name,Y=R.characterEle,Z=H.weaponTypeKey,$=null===P||void 0===P?void 0:P.name,ee=P.getMainStatValue(G,J).toFixed(g.b.fixedUnit("atk")),te=P.getSubStatKey(),ae=P.getSubStatValue(G,J).toFixed(g.b.fixedUnit(te)),ne=S.a.getLevelString(q),ce=null===P||void 0===P?void 0:P.passiveName;return Object(E.jsxs)(u.a,{className:K,bg:T||"darkcontent",text:"lightfont",children:[Object(E.jsx)(u.a.Header,{className:"pr-2",children:Object(E.jsxs)(b.a,{className:"no-gutters",children:[Object(E.jsx)(j.a,{children:V||Object(E.jsx)("h5",{children:Object(E.jsx)("b",{children:X})})}),Object(E.jsx)(j.a,{xs:"auto",children:Object(E.jsxs)("span",{className:"float-right align-top ml-1",children:[_&&Object(E.jsx)(d.a,{variant:"primary",size:"sm",className:"mr-1",onClick:function(){return _(a)},children:Object(E.jsx)(i.a,{icon:r.h})}),k&&Object(E.jsx)(d.a,{variant:"danger",size:"sm",onClick:function(){return k(a)},children:Object(E.jsx)(i.a,{icon:r.C})})]})})]})}),Object(E.jsxs)(u.a.Body,{onClick:function(){return null===_||void 0===_?void 0:_(a)},className:_?"cursor-pointer":"",children:[Object(E.jsxs)(b.a,{children:[Object(E.jsx)(j.a,{xs:"auto",className:"pr-0",children:Object(E.jsx)(o.a,{src:H.thumbImg,className:"thumb-big grad-".concat(H.star,"star p-0"),thumbnail:!0})}),Object(E.jsxs)(j.a,{children:[Object(E.jsxs)("h5",{className:"mb-0",children:["Lv. ",w.a.getLevelString(D)," ","C".concat(U)]}),Object(E.jsxs)("h6",{className:"mb-0",children:[Object(E.jsx)(l.a,{variant:"secondary",children:Object(E.jsx)("strong",{className:"mx-1",children:Q.auto+1})})," ",Object(E.jsx)(l.a,{variant:"secondary",children:Object(E.jsx)("strong",{className:"mx-1",children:Q.skill+1})})," ",Object(E.jsx)(l.a,{variant:"secondary",children:Object(E.jsx)("strong",{className:"mx-1",children:Q.burst+1})})]}),Object(E.jsx)("h6",{className:"mb-0",children:Object(E.jsx)(m.a,{stars:H.star,colored:!0})}),Object(E.jsxs)("h3",{className:"mb-0",children:[O.h[Y]," ",Object(E.jsx)(o.a,{src:null===(t=v.a.weaponTypes)||void 0===t?void 0:t[Z],className:"inline-icon"})]})]})]}),Object(E.jsx)(b.a,{className:"mb-2",children:Object(E.jsxs)(j.a,{children:[Object(E.jsxs)("h6",{className:"mb-0",children:[$,ce&&Object(E.jsx)(l.a,{variant:"info",className:"ml-1",children:q.refineIndex+1})," ",ne]}),Object(E.jsxs)("span",{children:["ATK: ",ee,"  ",ce&&Object(E.jsxs)("span",{children:[g.b.getStatName(te),": ",ae,g.b.getStatUnit(te)]})]})]})}),Object(E.jsx)(b.a,{children:Object(E.jsx)(j.a,{children:z&&Object.entries(h.a.setEffects(z,R.setToSlots)).map((function(e){var t,a=Object(c.a)(e,2),r=a[0],i=a[1],s=null!==(t=null===z||void 0===z?void 0:z[r].name)&&void 0!==t?t:"",o=Math.max.apply(Math,Object(n.a)(i));return Object(E.jsx)("h5",{children:Object(E.jsxs)(l.a,{variant:"secondary",children:[s," ",Object(E.jsx)(l.a,{variant:"success",children:o})]})},r)}))})}),Object(E.jsx)(b.a,{children:["finalHP","finalATK","finalDEF","eleMas","critRate_","critDMG_","enerRech_"].map((function(e){var t=g.b.getStatUnit(e),a=R[e];return Object(E.jsxs)(j.a,{xs:12,children:[Object(E.jsxs)("h6",{className:"d-inline",children:[Object(p.a)(e)," ",g.b.getStatName(e)]}),Object(E.jsx)("span",{className:"float-right",children:(null===a||void 0===a?void 0:a.toFixed(g.b.fixedUnit(e)))+t})]},e)}))})]}),B&&Object(E.jsx)(u.a.Footer,{children:Object(E.jsx)(d.a,{as:f.b,to:{pathname:"/build",characterKey:a},children:"Generate Builds"})})]})}}}]);
//# sourceMappingURL=5.e9075281.chunk.js.map