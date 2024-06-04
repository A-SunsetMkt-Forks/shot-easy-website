import{j as l}from"./jsx-runtime.l6YZH1ic.js";import{b as X,c as Q,r as N}from"./index.OjgoNOWw.js";import{Icon as K}from"./Icons.tgBymh6s.js";import{DownBtn as Z}from"./DownBtn.349ZLWXT.js";import{UploadDragger as tt}from"./UploadDragger.ONu3kUQc.js";import{n as V,t as et,o as q,j as rt,c as G,e as st}from"./utils.laoKADR4.js";import{u as it}from"./useKeyboardShortcuts.7wPXgwmH.js";import{u as at}from"./usePaste.lqKQ1tp5.js";import{m as ot}from"./index.HtDAqBSS.js";import{C as ht}from"./ColorPicker.OD3HGCka.js";import{B as $}from"./button.ncRKj3GL.js";import{S as nt}from"./index.1nf2E5ZO.js";import"./toArray.nS7GZgeY.js";import"./index.rPfIouvQ.js";import"./reactNode.B2HQCb_2.js";import"./index.p7hr_Xrf.js";import"./Portal.Pe3gDrPT.js";import"./useSize.RVMIuZji.js";import"./index.9yN8RVW1.js";import"./index.AGIWuGJs.js";import"./pickAttrs.PdgW-4Wc.js";import"./collapse.aS6vX33V.js";import"./EyeOutlined.kiebVQeb.js";import"./progress.KQvPVk93.js";import"./CheckOutlined.P7VL5mZ2.js";import"./CloseOutlined.0lRK38iS.js";import"./KeyCode.at7loAuH.js";import"./useCSSVarCls.MDYFJu2S.js";import"./RightOutlined.ahybTxGS.js";import"./index.RQZhvM3G.js";import"./context.RmN6aBgd.js";import"./index._stZYUJe.js";var Y={exports:{}};const ft={},ct=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"})),L=X(ct);/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.10.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */(function(F){(function(){var w="input is invalid type",S=typeof window=="object",u=S?window:{};u.JS_SHA256_NO_WINDOW&&(S=!1);var A=!S&&typeof self=="object",E=!u.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;E?u=Q:A&&(u=self);var k=!u.JS_SHA256_NO_COMMON_JS&&!0&&F.exports,v=!u.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",a="0123456789abcdef".split(""),O=[-2147483648,8388608,32768,128],y=[24,16,8,0],g=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],R=["hex","array","digest","arrayBuffer"],p=[];(u.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(t){return Object.prototype.toString.call(t)==="[object Array]"}),v&&(u.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(t){return typeof t=="object"&&t.buffer&&t.buffer.constructor===ArrayBuffer});var P=function(t,i){return function(h){return new d(i,!0).update(h)[t]()}},W=function(t){var i=P("hex",t);E&&(i=D(i,t)),i.create=function(){return new d(t)},i.update=function(o){return i.create().update(o)};for(var h=0;h<R.length;++h){var s=R[h];i[s]=P(s,t)}return i},D=function(t,i){var h=L,s=L.Buffer,o=i?"sha224":"sha256",r;s.from&&!u.JS_SHA256_NO_BUFFER_FROM?r=s.from:r=function(e){return new s(e)};var n=function(e){if(typeof e=="string")return h.createHash(o).update(e,"utf8").digest("hex");if(e==null)throw new Error(w);return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===s?h.createHash(o).update(r(e)).digest("hex"):t(e)};return n},z=function(t,i){return function(h,s){return new j(h,i,!0).update(s)[t]()}},H=function(t){var i=z("hex",t);i.create=function(o){return new j(o,t)},i.update=function(o,r){return i.create(o).update(r)};for(var h=0;h<R.length;++h){var s=R[h];i[s]=z(s,t)}return i};function d(t,i){i?(p[0]=p[16]=p[1]=p[2]=p[3]=p[4]=p[5]=p[6]=p[7]=p[8]=p[9]=p[10]=p[11]=p[12]=p[13]=p[14]=p[15]=0,this.blocks=p):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}d.prototype.update=function(t){if(!this.finalized){var i,h=typeof t;if(h!=="string"){if(h==="object"){if(t===null)throw new Error(w);if(v&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!v||!ArrayBuffer.isView(t)))throw new Error(w)}else throw new Error(w);i=!0}for(var s,o=0,r,n=t.length,e=this.blocks;o<n;){if(this.hashed&&(this.hashed=!1,e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),i)for(r=this.start;o<n&&r<64;++o)e[r>>2]|=t[o]<<y[r++&3];else for(r=this.start;o<n&&r<64;++o)s=t.charCodeAt(o),s<128?e[r>>2]|=s<<y[r++&3]:s<2048?(e[r>>2]|=(192|s>>6)<<y[r++&3],e[r>>2]|=(128|s&63)<<y[r++&3]):s<55296||s>=57344?(e[r>>2]|=(224|s>>12)<<y[r++&3],e[r>>2]|=(128|s>>6&63)<<y[r++&3],e[r>>2]|=(128|s&63)<<y[r++&3]):(s=65536+((s&1023)<<10|t.charCodeAt(++o)&1023),e[r>>2]|=(240|s>>18)<<y[r++&3],e[r>>2]|=(128|s>>12&63)<<y[r++&3],e[r>>2]|=(128|s>>6&63)<<y[r++&3],e[r>>2]|=(128|s&63)<<y[r++&3]);this.lastByteIndex=r,this.bytes+=r-this.start,r>=64?(this.block=e[16],this.start=r-64,this.hash(),this.hashed=!0):this.start=r}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},d.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,i=this.lastByteIndex;t[16]=this.block,t[i>>2]|=O[i&3],this.block=t[16],i>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},d.prototype.hash=function(){var t=this.h0,i=this.h1,h=this.h2,s=this.h3,o=this.h4,r=this.h5,n=this.h6,e=this.h7,f=this.blocks,c,b,m,B,x,U,C,M,T,I,J;for(c=16;c<64;++c)x=f[c-15],b=(x>>>7|x<<25)^(x>>>18|x<<14)^x>>>3,x=f[c-2],m=(x>>>17|x<<15)^(x>>>19|x<<13)^x>>>10,f[c]=f[c-16]+b+f[c-7]+m<<0;for(J=i&h,c=0;c<64;c+=4)this.first?(this.is224?(M=300032,x=f[0]-1413257819,e=x-150054599<<0,s=x+24177077<<0):(M=704751109,x=f[0]-210244248,e=x-1521486534<<0,s=x+143694565<<0),this.first=!1):(b=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),m=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),M=t&i,B=M^t&h^J,C=o&r^~o&n,x=e+m+C+g[c]+f[c],U=b+B,e=s+x<<0,s=x+U<<0),b=(s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10),m=(e>>>6|e<<26)^(e>>>11|e<<21)^(e>>>25|e<<7),T=s&t,B=T^s&i^M,C=e&o^~e&r,x=n+m+C+g[c+1]+f[c+1],U=b+B,n=h+x<<0,h=x+U<<0,b=(h>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10),m=(n>>>6|n<<26)^(n>>>11|n<<21)^(n>>>25|n<<7),I=h&s,B=I^h&t^T,C=n&e^~n&o,x=r+m+C+g[c+2]+f[c+2],U=b+B,r=i+x<<0,i=x+U<<0,b=(i>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10),m=(r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7),J=i&h,B=J^i&s^I,C=r&n^~r&e,x=o+m+C+g[c+3]+f[c+3],U=b+B,o=t+x<<0,t=x+U<<0,this.chromeBugWorkAround=!0;this.h0=this.h0+t<<0,this.h1=this.h1+i<<0,this.h2=this.h2+h<<0,this.h3=this.h3+s<<0,this.h4=this.h4+o<<0,this.h5=this.h5+r<<0,this.h6=this.h6+n<<0,this.h7=this.h7+e<<0},d.prototype.hex=function(){this.finalize();var t=this.h0,i=this.h1,h=this.h2,s=this.h3,o=this.h4,r=this.h5,n=this.h6,e=this.h7,f=a[t>>28&15]+a[t>>24&15]+a[t>>20&15]+a[t>>16&15]+a[t>>12&15]+a[t>>8&15]+a[t>>4&15]+a[t&15]+a[i>>28&15]+a[i>>24&15]+a[i>>20&15]+a[i>>16&15]+a[i>>12&15]+a[i>>8&15]+a[i>>4&15]+a[i&15]+a[h>>28&15]+a[h>>24&15]+a[h>>20&15]+a[h>>16&15]+a[h>>12&15]+a[h>>8&15]+a[h>>4&15]+a[h&15]+a[s>>28&15]+a[s>>24&15]+a[s>>20&15]+a[s>>16&15]+a[s>>12&15]+a[s>>8&15]+a[s>>4&15]+a[s&15]+a[o>>28&15]+a[o>>24&15]+a[o>>20&15]+a[o>>16&15]+a[o>>12&15]+a[o>>8&15]+a[o>>4&15]+a[o&15]+a[r>>28&15]+a[r>>24&15]+a[r>>20&15]+a[r>>16&15]+a[r>>12&15]+a[r>>8&15]+a[r>>4&15]+a[r&15]+a[n>>28&15]+a[n>>24&15]+a[n>>20&15]+a[n>>16&15]+a[n>>12&15]+a[n>>8&15]+a[n>>4&15]+a[n&15];return this.is224||(f+=a[e>>28&15]+a[e>>24&15]+a[e>>20&15]+a[e>>16&15]+a[e>>12&15]+a[e>>8&15]+a[e>>4&15]+a[e&15]),f},d.prototype.toString=d.prototype.hex,d.prototype.digest=function(){this.finalize();var t=this.h0,i=this.h1,h=this.h2,s=this.h3,o=this.h4,r=this.h5,n=this.h6,e=this.h7,f=[t>>24&255,t>>16&255,t>>8&255,t&255,i>>24&255,i>>16&255,i>>8&255,i&255,h>>24&255,h>>16&255,h>>8&255,h&255,s>>24&255,s>>16&255,s>>8&255,s&255,o>>24&255,o>>16&255,o>>8&255,o&255,r>>24&255,r>>16&255,r>>8&255,r&255,n>>24&255,n>>16&255,n>>8&255,n&255];return this.is224||f.push(e>>24&255,e>>16&255,e>>8&255,e&255),f},d.prototype.array=d.prototype.digest,d.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),i=new DataView(t);return i.setUint32(0,this.h0),i.setUint32(4,this.h1),i.setUint32(8,this.h2),i.setUint32(12,this.h3),i.setUint32(16,this.h4),i.setUint32(20,this.h5),i.setUint32(24,this.h6),this.is224||i.setUint32(28,this.h7),t};function j(t,i,h){var s,o=typeof t;if(o==="string"){var r=[],n=t.length,e=0,f;for(s=0;s<n;++s)f=t.charCodeAt(s),f<128?r[e++]=f:f<2048?(r[e++]=192|f>>6,r[e++]=128|f&63):f<55296||f>=57344?(r[e++]=224|f>>12,r[e++]=128|f>>6&63,r[e++]=128|f&63):(f=65536+((f&1023)<<10|t.charCodeAt(++s)&1023),r[e++]=240|f>>18,r[e++]=128|f>>12&63,r[e++]=128|f>>6&63,r[e++]=128|f&63);t=r}else if(o==="object"){if(t===null)throw new Error(w);if(v&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!v||!ArrayBuffer.isView(t)))throw new Error(w)}else throw new Error(w);t.length>64&&(t=new d(i,!0).update(t).array());var c=[],b=[];for(s=0;s<64;++s){var m=t[s]||0;c[s]=92^m,b[s]=54^m}d.call(this,i,h),this.update(b),this.oKeyPad=c,this.inner=!0,this.sharedMemory=h}j.prototype=new d,j.prototype.finalize=function(){if(d.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();d.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(t),d.prototype.finalize.call(this)}};var _=W();_.sha256=_,_.sha224=W(!0),_.sha256.hmac=H(),_.sha224.hmac=H(!0),k?F.exports=_:(u.sha256=_.sha256,u.sha224=_.sha224)})()})(Y);var xt=Y.exports;async function lt(F){if(typeof crypto<"u"&&crypto?.subtle?.digest){const w=new TextEncoder().encode(F),S=await crypto.subtle.digest("SHA-256",w);return Array.from(new Uint8Array(S)).map(A=>A.toString(16).padStart(2,"0")).join("")}else return xt.sha256(F).toString()}const ut=async F=>{const{t:w,m:S}=F,A=`${w}:${S}:S33uAs3wqm`;return await lt(A)};function $t(){const[F,w]=ot.useMessage(),S=N.useRef(null),[u,A]=N.useState(!1),[E,k]=N.useState("rgba(255,255,255, 0)"),[v,a]=N.useState(""),[O,y]=N.useState(""),[g,R]=N.useState(""),[p,P]=N.useState(!1),[W,D]=N.useState(!1),[z,H]=N.useState(null);at(async s=>{if(u)return F.info("Working hard, please wait!");V(s).then(o=>{const r=j(o);a(r),R(o)}).catch(o=>console.error(o))},[u]),it(()=>t(),()=>i(),[g,E,u]),N.useEffect(()=>((async()=>{if(v){const o=new AbortController;H(o),A(!0);const r=Date.now(),n=new FormData,e=await q(v),f=await ut({t:r,m:e.size});n.append("image",e),n.append("time",r),n.append("sign",f);try{const b=await(await fetch("/api/remove-bg",{method:"POST",body:n,signal:o.signal})).blob(),m=await V(b);R(m);const B=j(m,E);y(B)}catch{F.error("Remove error!")}A(!1),H(null)}})(),()=>{z&&z.abort&&z.abort()}),[v]);const d=async s=>{const o=await V(s);R(o);const r=j(o);return a(r),Promise.reject()},j=(s,o)=>{const r=S.current,n=r.getContext("2d"),{width:e,height:f}=s,c=st(e,f);return r.width=c.width,r.height=c.height,o&&(n.fillStyle=o,n.fillRect(0,0,c.width,c.height)),n.drawImage(s,0,0,c.width,c.height),r.toDataURL("image/png")},_=s=>{const o=s.toRgbString();k(o)},t=()=>{if(u)return F.info("Working hard, please wait!");const s=j(g,E);et(s,"shotEasy.png"),F.success("Download Success!")},i=()=>{if(u)return F.info("Working hard, please wait!");A(!0);const s=j(g,E);q(s).then(o=>{rt(o).then(()=>{F.success("Copied Success!")}).catch(()=>{F.error("Copy Failed!")})}).catch(o=>{F.error("Copy Failed!")}).finally(()=>{A(!1)})},h=()=>{if(u)return F.info("Working hard, please wait!");a(""),R(""),y("")};return l.jsxs(l.Fragment,{children:[w,l.jsxs("div",{className:G("rounded-md shadow-lg border-t overflow-hidden border-t-gray-600 antialiased",p?"tr":"polka"),children:[l.jsxs("div",{className:"flex gap-4 justify-center flex-col-reverse bg-white p-2 border-b shadow-md md:flex-row md:justify-between",children:[l.jsxs("div",{className:"flex items-center justify-center gap-3",children:[l.jsx(ht,{allowClear:!0,size:"small",value:E,onChange:_}),l.jsx($,{type:"text",shape:"circle",className:p&&"text-[#1677ff]",icon:l.jsx(K,{name:"Grip"}),onClick:()=>P(!p)}),l.jsx("div",{className:"active:[&_.ant-btn:not(:disabled)]:bg-[#1677ff]/20",children:l.jsx($,{type:"text",shape:"circle",className:"[&_span]:active:text-[#1677ff]",icon:l.jsx(K,{name:"SplitSquareHorizontal"}),onMouseDown:()=>D(!0),onMouseLeave:()=>D(!1),onMouseUp:()=>D(!1)})})]}),l.jsxs("div",{className:"flex gap-3 items-center justify-center",children:[g&&l.jsxs("div",{className:"text-xs opacity-60",children:[g.width," x ",g.height," px"]}),l.jsx(Z,{disabled:!O,loading:u,toDownload:t,toCopy:i}),l.jsx($,{type:"text",disabled:!O,loading:u,icon:l.jsx(K,{name:"Eraser"}),onClick:h})]})]}),l.jsx("div",{className:"relative min-h-[200px] p-10",children:l.jsxs("div",{className:"flex w-full items-center justify-center relative z-10",children:[!v&&l.jsx(tt,{beforeUpload:d}),l.jsxs(nt,{spinning:u,delay:500,children:[v&&l.jsx("div",{className:G("overflow-hidden w-auto",O&&"opacity-0 absolute top-0 left-0 transition-all z-10",W&&"opacity-100"),children:l.jsx("img",{src:v,className:"w-full object-cover"})}),O&&l.jsx("div",{className:"overflow-hidden w-auto relative z-[9]",children:l.jsx("img",{src:O,className:"w-full"})}),O&&l.jsx("div",{className:"absolute z-0 w-full h-full top-0 left-0",style:{background:E}})]})]})})]}),l.jsx("canvas",{ref:S,className:"hidden"})]})}export{$t as default};
