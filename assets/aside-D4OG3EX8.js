import{aZ as Fe,q as G,d as b,A,C as W,e as O,a_ as Te,a$ as he,am as Ue,b0 as ge,b1 as ye,f as be,aF as ne,G as m,O as _,L as y,u as e,K as $,M as K,Y as N,aj as J,$ as w,H as q,I as P,Z as De,av as V,_ as Y,a1 as ke,D as oe,ad as $e,a8 as we,b2 as te,a2 as B,ap as Oe,b3 as Z,r as j,Q as _e,az as Ce,aK as Ee,au as X,P as L,b4 as Be,b5 as Me,b6 as Ne,b7 as Ie,B as je,s as se,b8 as re,b9 as qe,ba as Ae,w as le,ar as xe,k as ze,x as Ke,F as Ve,bb as ie,a9 as ue,bc as He,o as We,J as Xe,N as Ge,aA as ee,bd as Ye,be as Je,aV as Ze,aO as Qe}from"./index-DPf8HTXv.js";import et from"./index-DeWYNbZ4.js";import{i as tt,E as st}from"./index-AIOKDQGm.js";import{E as at}from"./index-Bk7oNjuX.js";import"./focus-trap-BRJrcfWO.js";var ot=1,nt=4;function de(o){return Fe(o,ot|nt)}const rt=G({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:o=>o>=0&&o<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:b(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:b([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:b(Function),default:o=>`${o}%`}}),lt=["aria-valuenow"],it={viewBox:"0 0 100 100"},ut=["d","stroke","stroke-linecap","stroke-width"],dt=["d","stroke","opacity","stroke-linecap","stroke-width"],ct={key:0},pt=A({name:"ElProgress"}),ft=A({...pt,props:rt,setup(o){const t=o,s={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},i=W("progress"),p=O(()=>({width:`${t.percentage}%`,animationDuration:`${t.duration}s`,backgroundColor:F(t.percentage)})),c=O(()=>(t.strokeWidth/t.width*100).toFixed(1)),h=O(()=>["circle","dashboard"].includes(t.type)?Number.parseInt(`${50-Number.parseFloat(c.value)/2}`,10):0),C=O(()=>{const r=h.value,T=t.type==="dashboard";return`
          M 50 50
          m 0 ${T?"":"-"}${r}
          a ${r} ${r} 0 1 1 0 ${T?"-":""}${r*2}
          a ${r} ${r} 0 1 1 0 ${T?"":"-"}${r*2}
          `}),g=O(()=>2*Math.PI*h.value),E=O(()=>t.type==="dashboard"?.75:1),S=O(()=>`${-1*g.value*(1-E.value)/2}px`),v=O(()=>({strokeDasharray:`${g.value*E.value}px, ${g.value}px`,strokeDashoffset:S.value})),l=O(()=>({strokeDasharray:`${g.value*E.value*(t.percentage/100)}px, ${g.value}px`,strokeDashoffset:S.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),a=O(()=>{let r;return t.color?r=F(t.percentage):r=s[t.status]||s.default,r}),u=O(()=>t.status==="warning"?Te:t.type==="line"?t.status==="success"?he:Ue:t.status==="success"?ge:ye),n=O(()=>t.type==="line"?12+t.strokeWidth*.4:t.width*.111111+2),f=O(()=>t.format(t.percentage));function d(r){const T=100/r.length;return r.map((M,D)=>ne(M)?{color:M,percentage:(D+1)*T}:M).sort((M,D)=>M.percentage-D.percentage)}const F=r=>{var T;const{color:I}=t;if(be(I))return I(r);if(ne(I))return I;{const M=d(I);for(const D of M)if(D.percentage>r)return D.color;return(T=M[M.length-1])==null?void 0:T.color}};return(r,T)=>(m(),_("div",{class:y([e(i).b(),e(i).m(r.type),e(i).is(r.status),{[e(i).m("without-text")]:!r.showText,[e(i).m("text-inside")]:r.textInside}]),role:"progressbar","aria-valuenow":r.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[r.type==="line"?(m(),_("div",{key:0,class:y(e(i).b("bar"))},[$("div",{class:y(e(i).be("bar","outer")),style:K({height:`${r.strokeWidth}px`})},[$("div",{class:y([e(i).be("bar","inner"),{[e(i).bem("bar","inner","indeterminate")]:r.indeterminate},{[e(i).bem("bar","inner","striped")]:r.striped},{[e(i).bem("bar","inner","striped-flow")]:r.stripedFlow}]),style:K(e(p))},[(r.showText||r.$slots.default)&&r.textInside?(m(),_("div",{key:0,class:y(e(i).be("bar","innerText"))},[N(r.$slots,"default",{percentage:r.percentage},()=>[$("span",null,J(e(f)),1)])],2)):w("v-if",!0)],6)],6)],2)):(m(),_("div",{key:1,class:y(e(i).b("circle")),style:K({height:`${r.width}px`,width:`${r.width}px`})},[(m(),_("svg",it,[$("path",{class:y(e(i).be("circle","track")),d:e(C),stroke:`var(${e(i).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":r.strokeLinecap,"stroke-width":e(c),fill:"none",style:K(e(v))},null,14,ut),$("path",{class:y(e(i).be("circle","path")),d:e(C),stroke:e(a),fill:"none",opacity:r.percentage?1:0,"stroke-linecap":r.strokeLinecap,"stroke-width":e(c),style:K(e(l))},null,14,dt)]))],6)),(r.showText||r.$slots.default)&&!r.textInside?(m(),_("div",{key:2,class:y(e(i).e("text")),style:K({fontSize:`${e(n)}px`})},[N(r.$slots,"default",{percentage:r.percentage},()=>[r.status?(m(),q(e(V),{key:1},{default:P(()=>[(m(),q(De(e(u))))]),_:1})):(m(),_("span",ct,J(e(f)),1))])],6)):w("v-if",!0)],10,lt))}});var vt=Y(ft,[["__file","progress.vue"]]);const mt=ke(vt),Se=Symbol("uploadContextKey"),ht="ElUpload";class gt extends Error{constructor(t,s,i,p){super(t),this.name="UploadAjaxError",this.status=s,this.method=i,this.url=p}}function ce(o,t,s){let i;return s.response?i=`${s.response.error||s.response}`:s.responseText?i=`${s.responseText}`:i=`fail to ${t.method} ${o} ${s.status}`,new gt(i,s.status,t.method,o)}function yt(o){const t=o.responseText||o.response;if(!t)return t;try{return JSON.parse(t)}catch{return t}}const bt=o=>{typeof XMLHttpRequest>"u"&&oe(ht,"XMLHttpRequest is undefined");const t=new XMLHttpRequest,s=o.action;t.upload&&t.upload.addEventListener("progress",c=>{const h=c;h.percent=c.total>0?c.loaded/c.total*100:0,o.onProgress(h)});const i=new FormData;if(o.data)for(const[c,h]of Object.entries(o.data))$e(h)&&h.length?i.append(c,...h):i.append(c,h);i.append(o.filename,o.file,o.file.name),t.addEventListener("error",()=>{o.onError(ce(s,o,t))}),t.addEventListener("load",()=>{if(t.status<200||t.status>=300)return o.onError(ce(s,o,t));o.onSuccess(yt(t))}),t.open(o.method,s,!0),o.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const p=o.headers||{};if(p instanceof Headers)p.forEach((c,h)=>t.setRequestHeader(h,c));else for(const[c,h]of Object.entries(p))we(h)||t.setRequestHeader(c,String(h));return t.send(i),t},Pe=["text","picture","picture-card"];let kt=1;const ae=()=>Date.now()+kt++,Re=G({action:{type:String,default:"#"},headers:{type:b(Object)},method:{type:String,default:"post"},data:{type:b([Object,Function,Promise]),default:()=>te({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},fileList:{type:b(Array),default:()=>te([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:Pe,default:"text"},httpRequest:{type:b(Function),default:bt},disabled:Boolean,limit:Number}),$t=G({...Re,beforeUpload:{type:b(Function),default:B},beforeRemove:{type:b(Function)},onRemove:{type:b(Function),default:B},onChange:{type:b(Function),default:B},onPreview:{type:b(Function),default:B},onSuccess:{type:b(Function),default:B},onProgress:{type:b(Function),default:B},onError:{type:b(Function),default:B},onExceed:{type:b(Function),default:B},crossorigin:{type:b(String)}}),wt=G({files:{type:b(Array),default:()=>te([])},disabled:{type:Boolean,default:!1},handlePreview:{type:b(Function),default:B},listType:{type:String,values:Pe,default:"text"},crossorigin:{type:b(String)}}),_t={remove:o=>!!o},Ct=["onKeydown"],Et=["src","crossorigin"],St=["onClick"],Pt=["title"],Rt=["onClick"],Lt=["onClick"],Ft=A({name:"ElUploadList"}),Tt=A({...Ft,props:wt,emits:_t,setup(o,{emit:t}){const s=o,{t:i}=Oe(),p=W("upload"),c=W("icon"),h=W("list"),C=Z(),g=j(!1),E=O(()=>[p.b("list"),p.bm("list",s.listType),p.is("disabled",s.disabled)]),S=v=>{t("remove",v)};return(v,l)=>(m(),q(Ie,{tag:"ul",class:y(e(E)),name:e(h).b()},{default:P(()=>[(m(!0),_(_e,null,Ce(v.files,a=>(m(),_("li",{key:a.uid||a.name,class:y([e(p).be("list","item"),e(p).is(a.status),{focusing:g.value}]),tabindex:"0",onKeydown:Ee(u=>!e(C)&&S(a),["delete"]),onFocus:l[0]||(l[0]=u=>g.value=!0),onBlur:l[1]||(l[1]=u=>g.value=!1),onClick:l[2]||(l[2]=u=>g.value=!1)},[N(v.$slots,"default",{file:a},()=>[v.listType==="picture"||a.status!=="uploading"&&v.listType==="picture-card"?(m(),_("img",{key:0,class:y(e(p).be("list","item-thumbnail")),src:a.url,crossorigin:v.crossorigin,alt:""},null,10,Et)):w("v-if",!0),a.status==="uploading"||v.listType!=="picture-card"?(m(),_("div",{key:1,class:y(e(p).be("list","item-info"))},[$("a",{class:y(e(p).be("list","item-name")),onClick:X(u=>v.handlePreview(a),["prevent"])},[L(e(V),{class:y(e(c).m("document"))},{default:P(()=>[L(e(Be))]),_:1},8,["class"]),$("span",{class:y(e(p).be("list","item-file-name")),title:a.name},J(a.name),11,Pt)],10,St),a.status==="uploading"?(m(),q(e(mt),{key:0,type:v.listType==="picture-card"?"circle":"line","stroke-width":v.listType==="picture-card"?6:2,percentage:Number(a.percentage),style:K(v.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):w("v-if",!0)],2)):w("v-if",!0),$("label",{class:y(e(p).be("list","item-status-label"))},[v.listType==="text"?(m(),q(e(V),{key:0,class:y([e(c).m("upload-success"),e(c).m("circle-check")])},{default:P(()=>[L(e(he))]),_:1},8,["class"])):["picture-card","picture"].includes(v.listType)?(m(),q(e(V),{key:1,class:y([e(c).m("upload-success"),e(c).m("check")])},{default:P(()=>[L(e(ge))]),_:1},8,["class"])):w("v-if",!0)],2),e(C)?w("v-if",!0):(m(),q(e(V),{key:2,class:y(e(c).m("close")),onClick:u=>S(a)},{default:P(()=>[L(e(ye))]),_:2},1032,["class","onClick"])),w(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),w(" This is a bug which needs to be fixed "),w(" TODO: Fix the incorrect navigation interaction "),e(C)?w("v-if",!0):(m(),_("i",{key:3,class:y(e(c).m("close-tip"))},J(e(i)("el.upload.deleteTip")),3)),v.listType==="picture-card"?(m(),_("span",{key:4,class:y(e(p).be("list","item-actions"))},[$("span",{class:y(e(p).be("list","item-preview")),onClick:u=>v.handlePreview(a)},[L(e(V),{class:y(e(c).m("zoom-in"))},{default:P(()=>[L(e(Me))]),_:1},8,["class"])],10,Rt),e(C)?w("v-if",!0):(m(),_("span",{key:0,class:y(e(p).be("list","item-delete")),onClick:u=>S(a)},[L(e(V),{class:y(e(c).m("delete"))},{default:P(()=>[L(e(Ne))]),_:1},8,["class"])],10,Lt))],2)):w("v-if",!0)])],42,Ct))),128)),N(v.$slots,"append")]),_:3},8,["class","name"]))}});var pe=Y(Tt,[["__file","upload-list.vue"]]);const Ut=G({disabled:{type:Boolean,default:!1}}),Dt={file:o=>$e(o)},Ot=["onDrop","onDragover"],Le="ElUploadDrag",Bt=A({name:Le}),Mt=A({...Bt,props:Ut,emits:Dt,setup(o,{emit:t}){je(Se)||oe(Le,"usage: <el-upload><el-upload-dragger /></el-upload>");const i=W("upload"),p=j(!1),c=Z(),h=g=>{if(c.value)return;p.value=!1,g.stopPropagation();const E=Array.from(g.dataTransfer.files);t("file",E)},C=()=>{c.value||(p.value=!0)};return(g,E)=>(m(),_("div",{class:y([e(i).b("dragger"),e(i).is("dragover",p.value)]),onDrop:X(h,["prevent"]),onDragover:X(C,["prevent"]),onDragleave:E[0]||(E[0]=X(S=>p.value=!1,["prevent"]))},[N(g.$slots,"default")],42,Ot))}});var Nt=Y(Mt,[["__file","upload-dragger.vue"]]);const It=G({...Re,beforeUpload:{type:b(Function),default:B},onRemove:{type:b(Function),default:B},onStart:{type:b(Function),default:B},onSuccess:{type:b(Function),default:B},onProgress:{type:b(Function),default:B},onError:{type:b(Function),default:B},onExceed:{type:b(Function),default:B}}),jt=["onKeydown"],qt=["name","multiple","accept"],At=A({name:"ElUploadContent",inheritAttrs:!1}),xt=A({...At,props:It,setup(o,{expose:t}){const s=o,i=W("upload"),p=Z(),c=se({}),h=se(),C=n=>{if(n.length===0)return;const{autoUpload:f,limit:d,fileList:F,multiple:r,onStart:T,onExceed:I}=s;if(d&&F.length+n.length>d){I(n,F);return}r||(n=n.slice(0,1));for(const M of n){const D=M;D.uid=ae(),T(D),f&&g(D)}},g=async n=>{if(h.value.value="",!s.beforeUpload)return S(n);let f,d={};try{const r=s.data,T=s.beforeUpload(n);d=re(s.data)?de(s.data):s.data,f=await T,re(s.data)&&tt(r,d)&&(d=de(s.data))}catch{f=!1}if(f===!1){s.onRemove(n);return}let F=n;f instanceof Blob&&(f instanceof File?F=f:F=new File([f],n.name,{type:n.type})),S(Object.assign(F,{uid:n.uid}),d)},E=async(n,f)=>be(n)?n(f):n,S=async(n,f)=>{const{headers:d,data:F,method:r,withCredentials:T,name:I,action:M,onProgress:D,onSuccess:Q,onError:k,httpRequest:U}=s;try{f=await E(f??F,n)}catch{s.onRemove(n);return}const{uid:R}=n,x={headers:d||{},withCredentials:T,file:n,data:f,method:r,filename:I,action:M,onProgress:H=>{D(H,n)},onSuccess:H=>{Q(H,n),delete c.value[R]},onError:H=>{k(H,n),delete c.value[R]}},z=U(x);c.value[R]=z,z instanceof Promise&&z.then(x.onSuccess,x.onError)},v=n=>{const f=n.target.files;f&&C(Array.from(f))},l=()=>{p.value||(h.value.value="",h.value.click())},a=()=>{l()};return t({abort:n=>{qe(c.value).filter(n?([d])=>String(n.uid)===d:()=>!0).forEach(([d,F])=>{F instanceof XMLHttpRequest&&F.abort(),delete c.value[d]})},upload:g}),(n,f)=>(m(),_("div",{class:y([e(i).b(),e(i).m(n.listType),e(i).is("drag",n.drag)]),tabindex:"0",onClick:l,onKeydown:Ee(X(a,["self"]),["enter","space"])},[n.drag?(m(),q(Nt,{key:0,disabled:e(p),onFile:C},{default:P(()=>[N(n.$slots,"default")]),_:3},8,["disabled"])):N(n.$slots,"default",{key:1}),$("input",{ref_key:"inputRef",ref:h,class:y(e(i).e("input")),name:n.name,multiple:n.multiple,accept:n.accept,type:"file",onChange:v,onClick:f[0]||(f[0]=X(()=>{},["stop"]))},null,42,qt)],42,jt))}});var fe=Y(xt,[["__file","upload-content.vue"]]);const ve="ElUpload",me=o=>{var t;(t=o.url)!=null&&t.startsWith("blob:")&&URL.revokeObjectURL(o.url)},zt=(o,t)=>{const s=Ae(o,"fileList",void 0,{passive:!0}),i=l=>s.value.find(a=>a.uid===l.uid);function p(l){var a;(a=t.value)==null||a.abort(l)}function c(l=["ready","uploading","success","fail"]){s.value=s.value.filter(a=>!l.includes(a.status))}const h=(l,a)=>{const u=i(a);u&&(console.error(l),u.status="fail",s.value.splice(s.value.indexOf(u),1),o.onError(l,u,s.value),o.onChange(u,s.value))},C=(l,a)=>{const u=i(a);u&&(o.onProgress(l,u,s.value),u.status="uploading",u.percentage=Math.round(l.percent))},g=(l,a)=>{const u=i(a);u&&(u.status="success",u.response=l,o.onSuccess(l,u,s.value),o.onChange(u,s.value))},E=l=>{we(l.uid)&&(l.uid=ae());const a={name:l.name,percentage:0,status:"ready",size:l.size,raw:l,uid:l.uid};if(o.listType==="picture-card"||o.listType==="picture")try{a.url=URL.createObjectURL(l)}catch(u){xe(ve,u.message),o.onError(u,a,s.value)}s.value=[...s.value,a],o.onChange(a,s.value)},S=async l=>{const a=l instanceof File?i(l):l;a||oe(ve,"file to be removed not found");const u=n=>{p(n);const f=s.value;f.splice(f.indexOf(n),1),o.onRemove(n,f),me(n)};o.beforeRemove?await o.beforeRemove(a,s.value)!==!1&&u(a):u(a)};function v(){s.value.filter(({status:l})=>l==="ready").forEach(({raw:l})=>{var a;return l&&((a=t.value)==null?void 0:a.upload(l))})}return le(()=>o.listType,l=>{l!=="picture-card"&&l!=="picture"||(s.value=s.value.map(a=>{const{raw:u,url:n}=a;if(!n&&u)try{a.url=URL.createObjectURL(u)}catch(f){o.onError(f,a,s.value)}return a}))}),le(s,l=>{for(const a of l)a.uid||(a.uid=ae()),a.status||(a.status="success")},{immediate:!0,deep:!0}),{uploadFiles:s,abort:p,clearFiles:c,handleError:h,handleProgress:C,handleStart:E,handleSuccess:g,handleRemove:S,submit:v,revokeFileObjectURL:me}},Kt=A({name:"ElUpload"}),Vt=A({...Kt,props:$t,setup(o,{expose:t}){const s=o,i=Z(),p=se(),{abort:c,submit:h,clearFiles:C,uploadFiles:g,handleStart:E,handleError:S,handleRemove:v,handleSuccess:l,handleProgress:a,revokeFileObjectURL:u}=zt(s,p),n=O(()=>s.listType==="picture-card"),f=O(()=>({...s,fileList:g.value,onStart:E,onProgress:a,onSuccess:l,onError:S,onRemove:v}));return ze(()=>{g.value.forEach(u)}),Ke(Se,{accept:Ve(s,"accept")}),t({abort:c,submit:h,clearFiles:C,handleStart:E,handleRemove:v}),(d,F)=>(m(),_("div",null,[e(n)&&d.showFileList?(m(),q(pe,{key:0,disabled:e(i),"list-type":d.listType,files:e(g),crossorigin:d.crossorigin,"handle-preview":d.onPreview,onRemove:e(v)},ie({append:P(()=>[L(fe,ue({ref_key:"uploadRef",ref:p},e(f)),{default:P(()=>[d.$slots.trigger?N(d.$slots,"trigger",{key:0}):w("v-if",!0),!d.$slots.trigger&&d.$slots.default?N(d.$slots,"default",{key:1}):w("v-if",!0)]),_:3},16)]),_:2},[d.$slots.file?{name:"default",fn:P(({file:r})=>[N(d.$slots,"file",{file:r})])}:void 0]),1032,["disabled","list-type","files","crossorigin","handle-preview","onRemove"])):w("v-if",!0),!e(n)||e(n)&&!d.showFileList?(m(),q(fe,ue({key:1,ref_key:"uploadRef",ref:p},e(f)),{default:P(()=>[d.$slots.trigger?N(d.$slots,"trigger",{key:0}):w("v-if",!0),!d.$slots.trigger&&d.$slots.default?N(d.$slots,"default",{key:1}):w("v-if",!0)]),_:3},16)):w("v-if",!0),d.$slots.trigger?N(d.$slots,"default",{key:2}):w("v-if",!0),N(d.$slots,"tip"),!e(n)&&d.showFileList?(m(),q(pe,{key:3,disabled:e(i),"list-type":d.listType,files:e(g),crossorigin:d.crossorigin,"handle-preview":d.onPreview,onRemove:e(v)},ie({_:2},[d.$slots.file?{name:"default",fn:P(({file:r})=>[N(d.$slots,"file",{file:r})])}:void 0]),1032,["disabled","list-type","files","crossorigin","handle-preview","onRemove"])):w("v-if",!0)]))}});var Ht=Y(Vt,[["__file","upload.vue"]]);const Wt=ke(Ht),Xt={class:"container min-w-[333px] max-w-[334px]"},Gt=["src"],Yt={class:"mb-2 font-bold text-center"},Jt=$("h1",{class:"text-center border-2 border-inherit border-solid rounded",style:{color:"white"}},"请上传要分析的图片",-1),Zt=[Jt],Qt={class:"imgs mt-2 max-w-[334px] max-h-[200px]"},es={class:"inline-flex flex-col flex-wrap p-1"},ts={style:{border:"2px solid #3f3f3f3f"}},ss=["src"],is={__name:"aside",props:{tarUrl:{type:String,required:!0}},setup(o){const t=j(),s=j(!0),i=j(),p=j(),c=j(!1),h=j(),C=j(),g={},E=j(""),S=He();let v=0,[l,a,u,n]=[0,0,0,0];const f=(k,U)=>{console.log(k,U)},d=k=>{p.value=k.url,c.value=!0,g[k.uid]=`${l},${a},${u},${n}`,v=k.uid},F=()=>{i.value.submit()};We(()=>{const k=t.value.querySelector("div");k.style.maxHeight="450px",k.style.overflow="auto"});const r=k=>{const U=new FormData;U.append("image",k.file),U.append("box_coords",g[k.file.uid]),Je(U).then(x=>{S.updataUrl(["data:image/png;base64,"+x.data.image,"data:image/png;base64,"+x.data.mask]),S.addChat({text:x.data.response.choices[0].message.content,inversion:!1,isImage:!1,url:""})})},T=k=>{l=k.offsetX,a=k.offsetY},I=k=>{u=k.offsetX,n=k.offsetY;let U=k.target.naturalWidth/k.target.width;g[v]=`${Math.floor(l*U)},${Math.floor(a*U)},${Math.floor(u*U)},${Math.floor(n*U)}`;const R=document.createElement("div");R.style.width=Math.floor(u-l)+"px",R.style.height=Math.floor(n-a)+"px",console.log(Math.floor(u-l)),R.classList.add("absolute"),R.style.left=l+"px",R.style.top=a+"px",R.style.border="2px solid blue",R.style.zIndex=999,C.value.appendChild(R),setTimeout(()=>{R.remove()},1e3)},M=k=>{Ze.push({name:"history"})},D=j(!1),Q=()=>{D.value=!1};return(k,U)=>{const R=Qe,x=st;return m(),_("div",Xt,[$("img",{src:E.value,alt:"",height:"100%"},null,8,Gt),Xe($("div",Yt,Zt,512),[[Ge,s.value]]),$("div",null,[L(R,{type:"success",onClick:U[0]||(U[0]=z=>D.value=!0),class:"mb-2 w-full"},{default:P(()=>[ee("生成报告")]),_:1})]),$("div",null,[L(R,{type:"success",onClick:M,class:"mb-2 w-full"},{default:P(()=>[ee("历史数据管理")]),_:1})]),$("div",null,[L(R,{type:"success",onClick:F,class:"mb-2 w-full"},{default:P(()=>[ee("点击上传")]),_:1})]),$("div",{ref_key:"getDiv",ref:t,class:"imageConent min-w-[333px] max-w-[333px] border-inherit border-2 border-solid rounded-md box-border max-h-[450px]"},[L(e(Wt),{headers:{"Content-Type":"multipart/form-data"},ref_key:"uploadRef",ref:i,action:o.tarUrl,"list-type":"picture-card","on-preview":d,"on-remove":f,"auto-upload":!1,multiple:!0,"http-request":r},{default:P(()=>[L(e(Ye),{icon:"ic:round-plus",width:"2rem",height:"2rem"})]),_:1},8,["action"])],512),$("div",Qt,[$("ul",es,[(m(!0),_(_e,null,Ce(e(S).imgUrls,z=>(m(),_("li",{key:z,class:"flex-[0_0_47%] mb-2 mr-2"},[L(x,{src:z,alt:"","preview-src-list":e(S).imgUrls},null,8,["src","preview-src-list"])]))),128))])]),L(e(at),{modelValue:c.value,"onUpdate:modelValue":U[1]||(U[1]=z=>c.value=z),"append-to-body":!0,width:"50%"},{default:P(()=>[$("div",ts,[$("div",{ref_key:"imgWraper",ref:C,class:"relative"},[$("img",{onMousedown:T,onMouseup:I,ref_key:"getImg",ref:h,width:"100%",src:p.value,alt:"",style:{"user-select":"none","z-index":"1"},draggable:"false"},null,40,ss)],512)])]),_:1},8,["modelValue"]),L(et,{isShow:D.value,onClose:Q},null,8,["isShow"])])}}};export{is as default};