import{_ as N,l as K,m as L,n as O,t as Q,o as X,p as Y,s as Z,q as ee,r as te,v as oe,w as ne,x as ae,y as re,z as se,h as le,j as ie,A as ce,b as de,e as ue,f as pe,c as ge,B as fe,C as _e,D as me,E as be,k as ye,I as ve}from"./entry.DZ7ENWm0.js";import{B as p,C as y,D as a,E as r,u as I,U as xe,V as ke,W as he,X as we,Y as Ie,Q as M,R as U,F as c,Z as Se,k as v,_ as B,i as Ce,A as $e,y as ze,g as Ae,j as F,t as Ve,$ as Be,a0 as Oe,G as u,I as S,a1 as je,J as q,a2 as H,H as j,a3 as Ne,a as G,a4 as $}from"./swiper-vue.BTzHRR6v.js";import{_ as Te}from"./nuxt-link.Dn8W0oJa.js";import{v as D}from"./videoData.DyHS2Cg1.js";import{i as Ge}from"./instructorData.Bafp4lRo.js";function De(t,o){const l={...t};for(const n of o)delete l[n];return l}function Ee(t,o,l){typeof o=="string"&&(o=o.split(".").map(e=>{const s=Number(e);return isNaN(s)?e:s}));let n=t;for(const e of o){if(n==null)return l;n=n[e]}return n!==void 0?n:l}const z=t=>(M("data-v-75715b6b"),t=t(),U(),t),Le={id:"container",class:"my-10 max-w-5xl mx-auto p-5"},Me=z(()=>c("strong",null,"Slide 1",-1)),Ue=z(()=>c("strong",null,"Slide 2",-1)),Fe=z(()=>c("strong",null,"Slide 3",-1)),qe=z(()=>c("strong",null,"Slide 4",-1)),He={__name:"TheSwiper",setup(t){return(o,l)=>{const n=we,e=Ie;return p(),y("div",Le,[a(e,{pagination:!0,modules:["SwiperAutoplay"in o?o.SwiperAutoplay:I(xe),"SwiperEffectCreative"in o?o.SwiperEffectCreative:I(ke),I(he)],"slides-per-view":1,loop:!0,effect:"creative",autoplay:{delay:1e3,disableOnInteraction:!1},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:r(()=>[a(n,{style:{"background-color":"red"}},{default:r(()=>[Me]),_:1}),a(n,{style:{"background-color":"blue"}},{default:r(()=>[Ue]),_:1}),a(n,{style:{"background-color":"green"}},{default:r(()=>[Fe]),_:1}),a(n,{style:{"background-color":"yellow"}},{default:r(()=>[qe]),_:1})]),_:1},8,["modules"])])}}},Pe=N(He,[["__scopeId","data-v-75715b6b"]]),Je=(t,o,l,n,e=!1)=>{const s=Se(),i=K(),d=v(()=>{var h;const f=B(o),x=B(l),k=B(n);return L((f==null?void 0:f.strategy)||((h=i.ui)==null?void 0:h.strategy),k?{wrapper:k}:{},f||{},e?Ee(i.ui,t,{}):{},x||{})}),m=v(()=>De(s,["class"]));return{ui:d,attrs:m}};function Re({ui:t,props:o}){const l=Ae();let n=l.parent,e;for(;n&&!e;){if(n.type.name==="ButtonGroup"){e=Ce(`group-${n.uid}`);break}n=n.parent}const s=v(()=>e==null?void 0:e.value.children.indexOf(l));return $e(()=>{e==null||e.value.register(l)}),ze(()=>{e==null||e.value.unregister(l)}),{size:v(()=>(e==null?void 0:e.value.size)||o.size),rounded:v(()=>!e||s.value===-1?t.value.rounded:e.value.children.length===1?e.value.ui.rounded:s.value===0?e.value.rounded.start:s.value===e.value.children.length-1?e.value.rounded.end:"rounded-none")}}const We={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},P={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},E={container:"z-20 group",trigger:"inline-flex w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...P,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...E,option:{...E.option},arrow:{...P}});const b=L(O.ui.strategy,O.ui.badge,We),Ke=F({inheritAttrs:!1,props:{size:{type:String,default:()=>b.default.size,validator(t){return Object.keys(b.size).includes(t)}},color:{type:String,default:()=>b.default.color,validator(t){return[...O.ui.colors,...Object.keys(b.color)].includes(t)}},variant:{type:String,default:()=>b.default.variant,validator(t){return[...Object.keys(b.variant),...Object.values(b.color).flatMap(o=>Object.keys(o))].includes(t)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:o,attrs:l}=Je("badge",Ve(t,"ui"),b),{size:n,rounded:e}=Re({ui:o,props:t}),s=v(()=>{var d,m;const i=((m=(d=o.value.color)==null?void 0:d[t.color])==null?void 0:m[t.variant])||o.value.variant[t.variant];return Q(X(o.value.base,o.value.font,e.value,o.value.size[n.value],i==null?void 0:i.replaceAll("{color}",t.color)),t.class)});return{attrs:l,badgeClass:s}}});function Qe(t,o,l,n,e,s){return p(),y("span",Oe({class:t.badgeClass},t.attrs),[Be(t.$slots,"default",{},()=>[u(S(t.label),1)])],16)}const Xe=N(Ke,[["render",Qe]]),J=t=>(M("data-v-f10700e1"),t=t(),U(),t),Ye={key:0},Ze={class:"video-list cursor-pointer"},et=["src","alt"],tt=["onClick"],ot={class:"flex flex-col w-full h-full items-start"},nt={class:"flex flex-col justify-end h-full"},at=J(()=>c("span",{class:"font-bold"},"Instructor:",-1)),rt={key:1,class:"ion-padding"},st=J(()=>c("p",null,"Sorry, no videos exist for this query.",-1)),lt=[st],it={__name:"VideoList",props:{tag:String,instructor:String},setup(t){const o=t,l=Y("myVideos",()=>[]),n=v(()=>{let s=D;o.tag&&o.tag!=="all videos"&&(s=D.filter(d=>d.tags.includes(o.tag)));let i=s;return o.instructor&&o.instructor!=="All"&&(i=s.filter(d=>d.instructor===o.instructor)),i});function e(s){l.value.includes(s)?console.log("Video already saved:",s):(l.value.push(s),console.log("Video saved:",s))}return(s,i)=>{const d=te,m=Te,f=oe,x=ne,k=ae,h=re,w=se,C=le,A=ie;return p(),y("div",null,[a(A,null,{default:r(()=>[n.value.length>0?(p(),y("div",Ye,[a(je,{name:"fade",tag:"ion-row"},{default:r(()=>[(p(!0),y(q,null,H(n.value,(g,V)=>(p(),j(C,{size:"12","size-md":"6",key:V},{default:r(()=>[a(w,null,{default:r(()=>[c("div",Ze,[g.placeholder?(p(),y("img",{key:0,src:g.placeholder,alt:g.name,class:"video-placeholder"},null,8,et)):Ne("",!0),c("button",{class:"save-btn",onClick:T=>e(g.vimeoId)},[a(d,{md:"ioniconsStarOutline"in s?s.ioniconsStarOutline:I(Z),ios:"ioniconsStar"in s?s.ioniconsStar:I(ee),slot:"end"},null,8,["md","ios"])],8,tt)]),a(k,null,{default:r(()=>[c("div",ot,[c("div",null,[a(f,null,{default:r(()=>[a(m,{to:`/video/${g.vimeoId}`},{default:r(()=>[u(S(g.name),1)]),_:2},1032,["to"])]),_:2},1024)]),c("div",nt,[a(x,null,{default:r(()=>[at,u(" "+S(g.instructor),1)]),_:2},1024)])])]),_:2},1024),a(h,{class:"text-left"},{default:r(()=>[u(S(g.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})])):(p(),y("div",rt,lt))]),_:1})])}}},ct=N(it,[["__scopeId","data-v-f10700e1"]]),dt={id:"container",class:"my-10 max-w-full mx-auto"},ut={class:"flex flex-col md:flex-row gap-4 md:gap-20 justify-center items-center mt-8 mb-4 w-full max-w-8xl"},pt={class:"flex flex-row gap-4 items-center"},yt=F({__name:"index",setup(t){const o=G("all videos"),l=G("All"),n=s=>{o.value=s},e=s=>o.value===s?"badge-selected":"badge-default";return(s,i)=>{const d=ce,m=de,f=ue,x=pe,k=ge,h=Pe,w=Xe,C=fe,A=_e,g=me,V=be,T=ct,R=ye,W=ve;return p(),j(W,null,{default:r(()=>[a(x,{translucent:!0,class:"ion-no-border transparent"},{default:r(()=>[a(f,null,{default:r(()=>[a(m,{slot:"start"},{default:r(()=>[a(d)]),_:1})]),_:1})]),_:1}),a(R,{fullscreen:!0},{default:r(()=>[a(x,{collapse:"condense"},{default:r(()=>[a(f,null,{default:r(()=>[a(k,{size:"large"},{default:r(()=>[u("Nuxt Ionic")]),_:1})]),_:1})]),_:1}),c("div",dt,[c("div",null,[a(h)]),c("div",ut,[c("div",pt,[a(w,{onClick:i[0]||(i[0]=_=>n("New")),class:$([e("New"),"cursor-pointer py-1.5 px-3 rounded-full border !border-opacity-80 border-primary"])},{default:r(()=>[u("New")]),_:1},8,["class"]),a(w,{onClick:i[1]||(i[1]=_=>n("all videos")),class:$([e("all videos"),"cursor-pointer py-1.5 px-3 rounded-full"])},{default:r(()=>[u("All Videos")]),_:1},8,["class"]),a(w,{onClick:i[2]||(i[2]=_=>n("dance")),class:$([e("dance"),"cursor-pointer py-1.5 px-3 rounded-full"])},{default:r(()=>[u("Dance")]),_:1},8,["class"]),a(w,{onClick:i[3]||(i[3]=_=>n("golf")),class:$([e("golf"),"cursor-pointer py-1.5 px-3 rounded-full"])},{default:r(()=>[u("Golf")]),_:1},8,["class"])]),a(V,{class:"flex items-center bg-transparent",size:"small"},{default:r(()=>[a(g,{class:"border-b-0"},{default:r(()=>[a(A,{label:"Instructor",placeholder:"All",modelValue:l.value,"onUpdate:modelValue":i[4]||(i[4]=_=>l.value=_),shape:"round"},{default:r(()=>[a(C,{value:"All"},{default:r(()=>[u("All")]),_:1}),(p(!0),y(q,null,H(I(Ge),_=>(p(),j(C,{key:_.value,value:_.value},{default:r(()=>[u(S(_.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),a(T,{tag:o.value,instructor:l.value,class:"max-w-5xl mx-auto"},null,8,["tag","instructor"])])]),_:1})]),_:1})}}});export{yt as default};
