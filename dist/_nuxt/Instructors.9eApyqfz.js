import{_ as x,q as y,w as B,h as b,j as k,I as C,a as S,b as V,c as j,e as z,f as T,i as L,k as N}from"./entry.CDQDiHB_.js";import{_ as D}from"./nuxt-link.B3n0llON.js";import{k as G,B as c,C as d,D as t,E as o,a1 as H,J as q,a2 as E,H as v,F as _,G as I,I as F,Q as P,R}from"./swiper-vue.BTzHRR6v.js";import{i as g}from"./instructorData.Bafp4lRo.js";const $=e=>(P("data-v-c1262a0b"),e=e(),R(),e),A={key:0},J={class:"flex flex-row items-center space-x-4"},Q={class:"h-24 w-24"},W=["src"],K={class:"flex flex-col"},M=["href"],O={key:1,class:"ion-padding"},U=$(()=>_("p",null,"Sorry, no instructors exist for this query.",-1)),X=[U],Y={__name:"InstructorList",props:{tag:String,instructor:String},setup(e){const i=e,l=G(()=>{let s=g;return i.instructor&&i.instructor!=="All"&&(s=g.filter(a=>a.name===i.instructor)),s.sort((a,r)=>a.name.localeCompare(r.name)),s});return(s,a)=>{const r=y,u=D,p=B,f=b,m=k;return c(),d("div",null,[t(m,null,{default:o(()=>[l.value.length>0?(c(),d("div",A,[t(H,{name:"fade",tag:"ion-row"},{default:o(()=>[(c(!0),d(q,null,E(l.value,(n,h)=>(c(),v(f,{size:"12","size-md":"6",key:h},{default:o(()=>[t(p,null,{default:o(()=>[_("div",J,[_("div",Q,[_("img",{src:n.photo?n.photo:"path/to/default/image",alt:"Instructor Photo",class:"object-cover h-full w-full"},null,8,W)]),_("div",K,[t(r,null,{default:o(()=>[I(F(n.name),1)]),_:2},1024),_("a",{href:n.website,target:"_blank"},"Visit Website",8,M),t(u,{to:`/?instructor=${n.name}`},{default:o(()=>[I("View Videos")]),_:2},1032,["to"])])])]),_:2},1024)]),_:2},1024))),128))]),_:1})])):(c(),d("div",O,X))]),_:1})])}}},Z=x(Y,[["__scopeId","data-v-c1262a0b"]]),tt={};function ot(e,i){const l=S,s=V,a=j,r=z,u=T,p=Z,f=b,m=L,n=k,h=N,w=C;return c(),v(w,null,{default:o(()=>[t(u,null,{default:o(()=>[t(r,null,{default:o(()=>[t(s,{slot:"start"},{default:o(()=>[t(l,{defaultHref:"/"})]),_:1}),t(a,{class:"justify-center text-center"},{default:o(()=>[I("Instructors")]),_:1})]),_:1})]),_:1}),t(h,{class:"ion-padding"},{default:o(()=>[t(n,{class:"ion-justify-content-center"},{default:o(()=>[t(m,{class:"ion-justify-content-center"},{default:o(()=>[t(f,{"size-md":"8","size-lg":"6","size-xs":"12"},{default:o(()=>[t(p)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const ct=x(tt,[["render",ot]]);export{ct as default};