import{av as h,aw as D,ax as M}from"./entry.ax1a-eCJ.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const k=(n,m,g,p,w)=>{const c=n.ownerDocument.defaultView;let s=h(n);const X=t=>{const{startX:e}=t;return s?e>=c.innerWidth-50:e<=50},i=t=>s?-t.deltaX:t.deltaX,v=t=>s?-t.velocityX:t.velocityX;return D({el:n,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:t=>(s=h(n),X(t)&&m()),onStart:g,onMove:t=>{const e=i(t)/c.innerWidth;p(e)},onEnd:t=>{const o=i(t),e=c.innerWidth,r=o/e,a=v(t),y=e/2,l=a>=0&&(a>.2||o>y),u=(l?1-r:r)*e;let d=0;if(u>5){const f=u/Math.abs(a);d=Math.min(f,540)}w(l,r<=0?.01:M(0,r,.9999),d)}})};export{k as createSwipeBackGesture};
