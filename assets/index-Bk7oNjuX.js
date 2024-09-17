import{f as ce,o as oe,bD as fe,k as ve,R as U,bE as me,D as ye,C as x,bF as pe,h as te,aL as J,w as W,ay as ge,bG as be,bH as Ce,bI as he,a2 as K,q as G,d as V,A as Y,P as R,Y as E,bJ as we,bK as Ee,ap as ke,B as Z,e as S,G as O,O as X,K as H,L as k,u as o,aj as Me,I as L,H as q,Z as Te,av as Be,$ as _,M as se,_ as ne,bL as Ie,bM as le,j as Le,aa as De,ag as Q,r as D,z as Se,V as Fe,g as $e,bN as Ae,bO as ee,aE as Oe,bP as Pe,x as Ne,J as ze,a9 as Re,bb as Ye,N as He,T as Ve,ae as Ke,a1 as Xe}from"./index-DPf8HTXv.js";import{a as je,P as j,F as Ue,i as We,E as qe}from"./focus-trap-BRJrcfWO.js";const _e=(...e)=>t=>{e.forEach(a=>{ce(a)?a(t):a.value=t})},xe=(e,t,a,c)=>{let n={offsetX:0,offsetY:0};const u=v=>{const d=v.clientX,y=v.clientY,{offsetX:p,offsetY:C}=n,f=e.value.getBoundingClientRect(),r=f.left,w=f.top,F=f.width,P=f.height,$=document.documentElement.clientWidth,N=document.documentElement.clientHeight,z=-r+p,A=-w+C,M=$-r-F+p,T=N-w-P+C,h=s=>{let m=p+s.clientX-d,g=C+s.clientY-y;c!=null&&c.value||(m=Math.min(Math.max(m,z),M),g=Math.min(Math.max(g,A),T)),n={offsetX:m,offsetY:g},e.value&&(e.value.style.transform=`translate(${U(m)}, ${U(g)})`)},B=()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",B)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",B)},i=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",u)},l=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",u)};oe(()=>{fe(()=>{a.value?i():l()})}),ve(()=>{l()})},Ge=(e,t={})=>{me(e)||ye("[useLockscreen]","You need to pass a ref param to this function");const a=t.ns||x("popup"),c=pe(()=>a.bm("parent","hidden"));if(!te||J(document.body,c.value))return;let n=0,u=!1,i="0";const l=()=>{setTimeout(()=>{he(document==null?void 0:document.body,c.value),u&&document&&(document.body.style.width=i)},200)};W(e,v=>{if(!v){l();return}u=!J(document.body,c.value),u&&(i=document.body.style.width),n=je(a.namespace.value);const d=document.documentElement.clientHeight<document.body.scrollHeight,y=ge(document.body,"overflowY");n>0&&(d||y==="scroll")&&u&&(document.body.style.width=`calc(100% - ${n}px)`),be(document.body,c.value)}),Ce(()=>l())},ae=e=>{if(!e)return{onClick:K,onMousedown:K,onMouseup:K};let t=!1,a=!1;return{onClick:i=>{t&&a&&e(i),t=a=!1},onMousedown:i=>{t=i.target===i.currentTarget},onMouseup:i=>{a=i.target===i.currentTarget}}},Je=G({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:V([String,Array,Object])},zIndex:{type:V([String,Number])}}),Ze={click:e=>e instanceof MouseEvent},Qe="overlay";var eo=Y({name:"ElOverlay",props:Je,emits:Ze,setup(e,{slots:t,emit:a}){const c=x(Qe),n=v=>{a("click",v)},{onClick:u,onMousedown:i,onMouseup:l}=ae(e.customMaskEvent?void 0:n);return()=>e.mask?R("div",{class:[c.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:u,onMousedown:i,onMouseup:l},[E(t,"default")],j.STYLE|j.CLASS|j.PROPS,["onClick","onMouseup","onMousedown"]):we("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[E(t,"default")])}});const oo=eo,ie=Symbol("dialogInjectionKey"),re=G({center:Boolean,alignCenter:Boolean,closeIcon:{type:Ee},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),to={close:()=>!0},so=["aria-level"],no=["aria-label"],lo=["id"],ao=Y({name:"ElDialogContent"}),io=Y({...ao,props:re,emits:to,setup(e){const t=e,{t:a}=ke(),{Close:c}=Ie,{dialogRef:n,headerRef:u,bodyId:i,ns:l,style:v}=Z(ie),{focusTrapRef:d}=Z(Ue),y=S(()=>[l.b(),l.is("fullscreen",t.fullscreen),l.is("draggable",t.draggable),l.is("align-center",t.alignCenter),{[l.m("center")]:t.center}]),p=_e(d,n),C=S(()=>t.draggable),f=S(()=>t.overflow);return xe(n,u,C,f),(r,w)=>(O(),X("div",{ref:o(p),class:k(o(y)),style:se(o(v)),tabindex:"-1"},[H("header",{ref_key:"headerRef",ref:u,class:k([o(l).e("header"),{"show-close":r.showClose}])},[E(r.$slots,"header",{},()=>[H("span",{role:"heading","aria-level":r.ariaLevel,class:k(o(l).e("title"))},Me(r.title),11,so)]),r.showClose?(O(),X("button",{key:0,"aria-label":o(a)("el.dialog.close"),class:k(o(l).e("headerbtn")),type:"button",onClick:w[0]||(w[0]=F=>r.$emit("close"))},[R(o(Be),{class:k(o(l).e("close"))},{default:L(()=>[(O(),q(Te(r.closeIcon||o(c))))]),_:1},8,["class"])],10,no)):_("v-if",!0)],2),H("div",{id:o(i),class:k(o(l).e("body"))},[E(r.$slots,"default")],10,lo),r.$slots.footer?(O(),X("footer",{key:0,class:k(o(l).e("footer"))},[E(r.$slots,"footer")],2)):_("v-if",!0)],6))}});var ro=ne(io,[["__file","dialog-content.vue"]]);const uo=G({...re,appendToBody:Boolean,appendTo:{type:V(String),default:"body"},beforeClose:{type:V(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),co={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[le]:e=>Le(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},fo=(e,t)=>{var a;const n=$e().emit,{nextZIndex:u}=De();let i="";const l=Q(),v=Q(),d=D(!1),y=D(!1),p=D(!1),C=D((a=e.zIndex)!=null?a:u());let f,r;const w=Se("namespace",Ae),F=S(()=>{const b={},I=`--${w.value}-dialog`;return e.fullscreen||(e.top&&(b[`${I}-margin-top`]=e.top),e.width&&(b[`${I}-width`]=U(e.width))),b}),P=S(()=>e.alignCenter?{display:"flex"}:{});function $(){n("opened")}function N(){n("closed"),n(le,!1),e.destroyOnClose&&(p.value=!1)}function z(){n("close")}function A(){r==null||r(),f==null||f(),e.openDelay&&e.openDelay>0?{stop:f}=ee(()=>B(),e.openDelay):B()}function M(){f==null||f(),r==null||r(),e.closeDelay&&e.closeDelay>0?{stop:r}=ee(()=>s(),e.closeDelay):s()}function T(){function b(I){I||(y.value=!0,d.value=!1)}e.beforeClose?e.beforeClose(b):M()}function h(){e.closeOnClickModal&&T()}function B(){te&&(d.value=!0)}function s(){d.value=!1}function m(){n("openAutoFocus")}function g(){n("closeAutoFocus")}function ue(b){var I;((I=b.detail)==null?void 0:I.focusReason)==="pointer"&&b.preventDefault()}e.lockScroll&&Ge(d);function de(){e.closeOnPressEscape&&T()}return W(()=>e.modelValue,b=>{b?(y.value=!1,A(),p.value=!0,C.value=We(e.zIndex)?u():C.value++,Fe(()=>{n("open"),t.value&&(t.value.scrollTop=0)})):d.value&&M()}),W(()=>e.fullscreen,b=>{t.value&&(b?(i=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=i)}),oe(()=>{e.modelValue&&(d.value=!0,p.value=!0,A())}),{afterEnter:$,afterLeave:N,beforeLeave:z,handleClose:T,onModalClick:h,close:M,doClose:s,onOpenAutoFocus:m,onCloseAutoFocus:g,onCloseRequested:de,onFocusoutPrevented:ue,titleId:l,bodyId:v,closed:y,style:F,overlayDialogStyle:P,rendered:p,visible:d,zIndex:C}},vo=["aria-label","aria-labelledby","aria-describedby"],mo=Y({name:"ElDialog",inheritAttrs:!1}),yo=Y({...mo,props:uo,emits:co,setup(e,{expose:t}){const a=e,c=Oe();Pe({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},S(()=>!!c.title));const n=x("dialog"),u=D(),i=D(),l=D(),{visible:v,titleId:d,bodyId:y,style:p,overlayDialogStyle:C,rendered:f,zIndex:r,afterEnter:w,afterLeave:F,beforeLeave:P,handleClose:$,onModalClick:N,onOpenAutoFocus:z,onCloseAutoFocus:A,onCloseRequested:M,onFocusoutPrevented:T}=fo(a,u);Ne(ie,{dialogRef:u,headerRef:i,bodyId:y,ns:n,rendered:f,style:p});const h=ae(N),B=S(()=>a.draggable&&!a.fullscreen);return t({visible:v,dialogContentRef:l}),(s,m)=>(O(),q(Ke,{to:s.appendTo,disabled:s.appendTo!=="body"?!1:!s.appendToBody},[R(Ve,{name:"dialog-fade",onAfterEnter:o(w),onAfterLeave:o(F),onBeforeLeave:o(P),persisted:""},{default:L(()=>[ze(R(o(oo),{"custom-mask-event":"",mask:s.modal,"overlay-class":s.modalClass,"z-index":o(r)},{default:L(()=>[H("div",{role:"dialog","aria-modal":"true","aria-label":s.title||void 0,"aria-labelledby":s.title?void 0:o(d),"aria-describedby":o(y),class:k(`${o(n).namespace.value}-overlay-dialog`),style:se(o(C)),onClick:m[0]||(m[0]=(...g)=>o(h).onClick&&o(h).onClick(...g)),onMousedown:m[1]||(m[1]=(...g)=>o(h).onMousedown&&o(h).onMousedown(...g)),onMouseup:m[2]||(m[2]=(...g)=>o(h).onMouseup&&o(h).onMouseup(...g))},[R(o(qe),{loop:"",trapped:o(v),"focus-start-el":"container",onFocusAfterTrapped:o(z),onFocusAfterReleased:o(A),onFocusoutPrevented:o(T),onReleaseRequested:o(M)},{default:L(()=>[o(f)?(O(),q(ro,Re({key:0,ref_key:"dialogContentRef",ref:l},s.$attrs,{center:s.center,"align-center":s.alignCenter,"close-icon":s.closeIcon,draggable:o(B),overflow:s.overflow,fullscreen:s.fullscreen,"show-close":s.showClose,title:s.title,"aria-level":s.headerAriaLevel,onClose:o($)}),Ye({header:L(()=>[s.$slots.title?E(s.$slots,"title",{key:1}):E(s.$slots,"header",{key:0,close:o($),titleId:o(d),titleClass:o(n).e("title")})]),default:L(()=>[E(s.$slots,"default")]),_:2},[s.$slots.footer?{name:"footer",fn:L(()=>[E(s.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):_("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,vo)]),_:3},8,["mask","overlay-class","z-index"]),[[He,o(v)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var po=ne(yo,[["__file","dialog.vue"]]);const Co=Xe(po);export{Co as E};
