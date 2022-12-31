import{S as Xr,i as Yr,s as Jr,k as it,a as Z,q as Nt,l as rt,m as ot,h as O,c as tt,r as $t,n as nt,b as ft,E as $,u as _u,B as xs,o as Zr,e as xn,t as R,d as Xt,f as b,N as In,g as Yt,$ as _s,U as Yi,w as z,x as H,y as W,z as X,a0 as qt,a1 as Bt,a2 as jt,I as to,W as Vn,Y as eo}from"../../../chunks/index-bdfca9c1.js";import{_ as Iu,C as Su,r as Ji,F as Cu,c as ku,d as bu,e as Au,f as Ge,h as Du,S as Nu,i as $u,j as On,a as Is}from"../../../chunks/auth-a39df89b.js";import{L as Ru}from"../../../chunks/LoadingScreenDefault-ed7dd77f.js";import{N as Lu,C as no}from"../../../chunks/navbar-ab79235a.js";import{C as xu}from"../../../chunks/Container-997c4559.js";import{B as te}from"../../../chunks/Button-972368e9.js";import{R as Vu,G as Ou,S as so,A as si}from"../../../chunks/ArrowRight-cc65348c.js";import{T as Jt}from"../../../chunks/TextInput-5625fa0c.js";import{i as Sn,u as Mu,p as Fu}from"../../../chunks/stores-54e9aad5.js";import{w as Pu}from"../../../chunks/singletons-b819b431.js";function Uu(e){let t,n,s,i,r,o;return{c(){t=it("diFv"),n=it("div"),s=Z(),i=it("div"),r=Nt("https://m.saklani.dev/"),o=Nt(e[0]),this.h()},l(a){t=rt(a,"DIFV",{class:!0});var u=ot(t);n=rt(u,"DIV",{id:!0,class:!0}),ot(n).forEach(O),s=tt(u),i=rt(u,"DIV",{class:!0});var l=ot(i);r=$t(l,"https://m.saklani.dev/"),o=$t(l,e[0]),l.forEach(O),u.forEach(O),this.h()},h(){nt(n,"id","qrcode"),nt(n,"class","svelte-1cvfj2o"),nt(i,"class","text-sm text-black text-center font-medium"),nt(t,"class","flex items-center justify-center flex-col gap-2 -mb-2")},m(a,u){ft(a,t,u),$(t,n),$(t,s),$(t,i),$(i,r),$(i,o)},p(a,[u]){u&1&&_u(o,a[0])},i:xs,o:xs,d(a){a&&O(t)}}}function qu(e,t,n){let{codeValue:s}=t,{squareSize:i}=t,r;return Zr(()=>{let o=document.createElement("script");o.src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js",document.head.append(o),o.onload=function(){n(2,r=new QRCode("qrcode",{text:s,width:i,height:i,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H}))}}),e.$$set=o=>{"codeValue"in o&&n(0,s=o.codeValue),"squareSize"in o&&n(1,i=o.squareSize)},e.$$.update=()=>{e.$$.dirty&5&&window&&window.QRCode&&r&&(r.clear(),r.makeCode(s))},[s,i,r]}class Bu extends Xr{constructor(t){super(),Yr(this,t,qu,Uu,Jr,{codeValue:0,squareSize:1})}}var ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,ii=ii||{},L=ju||self;function Mn(){}function Jn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function on(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Ku(e){return Object.prototype.hasOwnProperty.call(e,Ss)&&e[Ss]||(e[Ss]=++Gu)}var Ss="closure_uid_"+(1e9*Math.random()>>>0),Gu=0;function Qu(e,t,n){return e.call.apply(e.bind,arguments)}function zu(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function kt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?kt=Qu:kt=zu,kt.apply(null,arguments)}function Cn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function _t(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function ie(){this.s=this.s,this.o=this.o}var Hu=0;ie.prototype.s=!1;ie.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Hu!=0)&&Ku(this)};ie.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const io=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ri(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Zi(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Jn(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function bt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}bt.prototype.h=function(){this.defaultPrevented=!0};var Wu=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{L.addEventListener("test",Mn,t),L.removeEventListener("test",Mn,t)}catch{}return e}();function Fn(e){return/^[\s\xa0]*$/.test(e)}var tr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Cs(e,t){return e<t?-1:e>t?1:0}function Zn(){var e=L.navigator;return e&&(e=e.userAgent)?e:""}function Vt(e){return Zn().indexOf(e)!=-1}function oi(e){return oi[" "](e),e}oi[" "]=Mn;function Xu(e){var t=Zu;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Yu=Vt("Opera"),_e=Vt("Trident")||Vt("MSIE"),ro=Vt("Edge"),Vs=ro||_e,oo=Vt("Gecko")&&!(Zn().toLowerCase().indexOf("webkit")!=-1&&!Vt("Edge"))&&!(Vt("Trident")||Vt("MSIE"))&&!Vt("Edge"),Ju=Zn().toLowerCase().indexOf("webkit")!=-1&&!Vt("Edge");function ao(){var e=L.document;return e?e.documentMode:void 0}var Pn;t:{var ks="",bs=function(){var e=Zn();if(oo)return/rv:([^\);]+)(\)|;)/.exec(e);if(ro)return/Edge\/([\d\.]+)/.exec(e);if(_e)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Ju)return/WebKit\/(\S+)/.exec(e);if(Yu)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(bs&&(ks=bs?bs[1]:""),_e){var As=ao();if(As!=null&&As>parseFloat(ks)){Pn=String(As);break t}}Pn=ks}var Zu={};function tl(){return Xu(function(){let e=0;const t=tr(String(Pn)).split("."),n=tr("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Cs(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Cs(i[2].length==0,r[2].length==0)||Cs(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Os;if(L.document&&_e){var er=ao();Os=er||parseInt(Pn,10)||void 0}else Os=void 0;var el=Os;function Qe(e,t){if(bt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(oo){t:{try{oi(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:nl[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Qe.X.h.call(this)}}_t(Qe,bt);var nl={2:"touch",3:"pen",4:"mouse"};Qe.prototype.h=function(){Qe.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var an="closure_listenable_"+(1e6*Math.random()|0),sl=0;function il(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++sl,this.ba=this.ea=!1}function ts(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ai(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function uo(e){const t={};for(const n in e)t[n]=e[n];return t}const nr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lo(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<nr.length;r++)n=nr[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function es(e){this.src=e,this.g={},this.h=0}es.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Fs(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new il(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function Ms(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=io(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ts(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Fs(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var ui="closure_lm_"+(1e6*Math.random()|0),Ds={};function co(e,t,n,s,i){if(s&&s.once)return fo(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)co(e,t[r],n,s,i);return null}return n=hi(n),e&&e[an]?e.N(t,n,on(s)?!!s.capture:!!s,i):ho(e,t,n,!1,s,i)}function ho(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=on(i)?!!i.capture:!!i,a=ci(e);if(a||(e[ui]=a=new es(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=rl(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Wu||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(mo(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rl(){function e(n){return t.call(e.src,e.listener,n)}const t=ol;return e}function fo(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)fo(e,t[r],n,s,i);return null}return n=hi(n),e&&e[an]?e.O(t,n,on(s)?!!s.capture:!!s,i):ho(e,t,n,!0,s,i)}function go(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)go(e,t[r],n,s,i);else s=on(s)?!!s.capture:!!s,n=hi(n),e&&e[an]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Fs(r,n,s,i),-1<n&&(ts(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=ci(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Fs(t,n,s,i)),(n=-1<e?t[e]:null)&&li(n))}function li(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[an])Ms(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(mo(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ci(t))?(Ms(n,e),n.h==0&&(n.src=null,t[ui]=null)):ts(e)}}}function mo(e){return e in Ds?Ds[e]:Ds[e]="on"+e}function ol(e,t){if(e.ba)e=!0;else{t=new Qe(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&li(e),e=n.call(s,t)}return e}function ci(e){return e=e[ui],e instanceof es?e:null}var Ns="__closure_events_fn_"+(1e9*Math.random()>>>0);function hi(e){return typeof e=="function"?e:(e[Ns]||(e[Ns]=function(t){return e.handleEvent(t)}),e[Ns])}function wt(){ie.call(this),this.i=new es(this),this.P=this,this.I=null}_t(wt,ie);wt.prototype[an]=!0;wt.prototype.removeEventListener=function(e,t,n,s){go(this,e,t,n,s)};function Tt(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new bt(t,e);else if(t instanceof bt)t.target=t.target||e;else{var i=t;t=new bt(s,e),lo(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=kn(o,s,!0,t)&&i}if(o=t.g=e,i=kn(o,s,!0,t)&&i,i=kn(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=kn(o,s,!1,t)&&i}wt.prototype.M=function(){if(wt.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ts(n[s]);delete e.g[t],e.h--}}this.I=null};wt.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};wt.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function kn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&Ms(e.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var fi=L.JSON.stringify;function al(){var e=vo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ul{constructor(){this.h=this.g=null}add(t,n){const s=po.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var po=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new ll,e=>e.reset());class ll{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function cl(e){L.setTimeout(()=>{throw e},0)}function yo(e,t){Ps||hl(),Us||(Ps(),Us=!0),vo.add(e,t)}var Ps;function hl(){var e=L.Promise.resolve(void 0);Ps=function(){e.then(fl)}}var Us=!1,vo=new ul;function fl(){for(var e;e=al();){try{e.h.call(e.g)}catch(n){cl(n)}var t=po;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Us=!1}function ns(e,t){wt.call(this),this.h=e||1,this.g=t||L,this.j=kt(this.lb,this),this.l=Date.now()}_t(ns,wt);_=ns.prototype;_.ca=!1;_.R=null;_.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Tt(this,"tick"),this.ca&&(di(this),this.start()))}};_.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function di(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}_.M=function(){ns.X.M.call(this),di(this),delete this.g};function gi(e,t,n){if(typeof e=="function")n&&(e=kt(e,n));else if(e&&typeof e.handleEvent=="function")e=kt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:L.setTimeout(e,t||0)}function wo(e){e.g=gi(()=>{e.g=null,e.i&&(e.i=!1,wo(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class dl extends ie{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:wo(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(e){ie.call(this),this.h=e,this.g={}}_t(ze,ie);var sr=[];function Eo(e,t,n,s){Array.isArray(n)||(n&&(sr[0]=n.toString()),n=sr);for(var i=0;i<n.length;i++){var r=co(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function To(e){ai(e.g,function(t,n){this.g.hasOwnProperty(n)&&li(t)},e),e.g={}}ze.prototype.M=function(){ze.X.M.call(this),To(this)};ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ss(){this.g=!0}ss.prototype.Aa=function(){this.g=!1};function gl(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function ml(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function we(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+yl(e,n)+(s?" "+s:"")})}function pl(e,t){e.info(function(){return"TIMEOUT: "+t})}ss.prototype.info=function(){};function yl(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return fi(n)}catch{return t}}var ge={},ir=null;function is(){return ir=ir||new wt}ge.Pa="serverreachability";function _o(e){bt.call(this,ge.Pa,e)}_t(_o,bt);function He(e){const t=is();Tt(t,new _o(t))}ge.STAT_EVENT="statevent";function Io(e,t){bt.call(this,ge.STAT_EVENT,e),this.stat=t}_t(Io,bt);function Dt(e){const t=is();Tt(t,new Io(t,e))}ge.Qa="timingevent";function So(e,t){bt.call(this,ge.Qa,e),this.size=t}_t(So,bt);function un(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){e()},t)}var rs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Co={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function mi(){}mi.prototype.h=null;function rr(e){return e.h||(e.h=e.i())}function ko(){}var ln={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function pi(){bt.call(this,"d")}_t(pi,bt);function yi(){bt.call(this,"c")}_t(yi,bt);var qs;function os(){}_t(os,mi);os.prototype.g=function(){return new XMLHttpRequest};os.prototype.i=function(){return{}};qs=new os;function cn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new ze(this),this.O=vl,e=Vs?125:void 0,this.T=new ns(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new bo}function bo(){this.i=null,this.g="",this.h=!1}var vl=45e3,Bs={},Un={};_=cn.prototype;_.setTimeout=function(e){this.O=e};function js(e,t,n){e.K=1,e.v=us(Gt(t)),e.s=n,e.P=!0,Ao(e,null)}function Ao(e,t){e.F=Date.now(),hn(e),e.A=Gt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Oo(n.i,"t",s),e.C=0,n=e.l.H,e.h=new bo,e.g=sa(e.l,n?t:null,!e.s),0<e.N&&(e.L=new dl(kt(e.La,e,e.g),e.N)),Eo(e.S,e.g,"readystatechange",e.ib),t=e.H?uo(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),He(),gl(e.j,e.u,e.A,e.m,e.U,e.s)}_.ib=function(e){e=e.target;const t=this.L;t&&Ut(e)==3?t.l():this.La(e)};_.La=function(e){try{if(e==this.g)t:{const c=Ut(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Vs||this.g&&(this.h.h||this.g.fa()||lr(this.g)))){this.I||c!=4||t==7||(t==8||0>=h?He(3):He(2)),as(this);var n=this.g.aa();this.Y=n;e:if(Do(this)){var s=lr(this.g);e="";var i=s.length,r=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ae(this),Ue(this);var o="";break e}this.h.i=new L.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,ml(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fn(a)){var l=a;break e}}l=null}if(n=l)we(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ks(this,n);else{this.i=!1,this.o=3,Dt(12),ae(this),Ue(this);break t}}this.P?(No(this,c,o),Vs&&this.i&&c==3&&(Eo(this.S,this.T,"tick",this.hb),this.T.start())):(we(this.j,this.m,o,null),Ks(this,o)),c==4&&ae(this),this.i&&!this.I&&(c==4?Zo(this.l,this):(this.i=!1,hn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Dt(12)):(this.o=0,Dt(13)),ae(this),Ue(this)}}}catch{}finally{}};function Do(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function No(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=wl(e,n),i==Un){t==4&&(e.o=4,Dt(14),s=!1),we(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Bs){e.o=4,Dt(15),we(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else we(e.j,e.m,i,null),Ks(e,i);Do(e)&&i!=Un&&i!=Bs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Dt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Si(t),t.K=!0,Dt(11))):(we(e.j,e.m,n,"[Invalid Chunked Response]"),ae(e),Ue(e))}_.hb=function(){if(this.g){var e=Ut(this.g),t=this.g.fa();this.C<t.length&&(as(this),No(this,e,t),this.i&&e!=4&&hn(this))}};function wl(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Un:(n=Number(t.substring(n,s)),isNaN(n)?Bs:(s+=1,s+n>t.length?Un:(t=t.substr(s,n),e.C=s+n,t)))}_.cancel=function(){this.I=!0,ae(this)};function hn(e){e.V=Date.now()+e.O,$o(e,e.O)}function $o(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=un(kt(e.gb,e),t)}function as(e){e.B&&(L.clearTimeout(e.B),e.B=null)}_.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(pl(this.j,this.A),this.K!=2&&(He(),Dt(17)),ae(this),this.o=2,Ue(this)):$o(this,this.V-e)};function Ue(e){e.l.G==0||e.I||Zo(e.l,e)}function ae(e){as(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,di(e.T),To(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ks(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Gs(n.h,e))){if(!e.J&&Gs(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)jn(n),hs(n);else break t;Ii(n),Dt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=un(kt(n.cb,n),6e3));if(1>=Po(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ue(n,11)}else if((e.J||n.g==e)&&jn(n),!Fn(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const c=l[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=e.g;if(g){const d=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(d){var r=s.h;r.g||d.indexOf("spdy")==-1&&d.indexOf("quic")==-1&&d.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(vi(r,r.h),r.h=null))}if(s.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,st(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=na(s,s.H?s.ka:null,s.V),o.J){Uo(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(as(a),hn(a)),s.g=o}else Yo(s);0<n.i.length&&fs(n)}else l[0]!="stop"&&l[0]!="close"||ue(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ue(n,7):_i(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}He(4)}catch{}}function El(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Jn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Tl(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Jn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Ro(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Jn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Tl(e),s=El(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var Lo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _l(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ce(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ce){this.h=t!==void 0?t:e.h,qn(this,e.j),this.s=e.s,this.g=e.g,Bn(this,e.m),this.l=e.l,t=e.i;var n=new We;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),or(this,n),this.o=e.o}else e&&(n=String(e).match(Lo))?(this.h=!!t,qn(this,n[1]||"",!0),this.s=Me(n[2]||""),this.g=Me(n[3]||"",!0),Bn(this,n[4]),this.l=Me(n[5]||"",!0),or(this,n[6]||"",!0),this.o=Me(n[7]||"")):(this.h=!!t,this.i=new We(null,this.h))}ce.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Fe(t,ar,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Fe(t,ar,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Fe(n,n.charAt(0)=="/"?Cl:Sl,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Fe(n,bl)),e.join("")};function Gt(e){return new ce(e)}function qn(e,t,n){e.j=n?Me(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Bn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function or(e,t,n){t instanceof We?(e.i=t,Al(e.i,e.h)):(n||(t=Fe(t,kl)),e.i=new We(t,e.h))}function st(e,t,n){e.i.set(t,n)}function us(e){return st(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Me(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Fe(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Il),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Il(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ar=/[#\/\?@]/g,Sl=/[#\?:]/g,Cl=/[#\?]/g,kl=/[#\?@]/g,bl=/#/g;function We(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function re(e){e.g||(e.g=new Map,e.h=0,e.i&&_l(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}_=We.prototype;_.add=function(e,t){re(this),this.i=null,e=Ne(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function xo(e,t){re(e),t=Ne(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Vo(e,t){return re(e),t=Ne(e,t),e.g.has(t)}_.forEach=function(e,t){re(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};_.oa=function(){re(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};_.W=function(e){re(this);let t=[];if(typeof e=="string")Vo(this,e)&&(t=t.concat(this.g.get(Ne(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};_.set=function(e,t){return re(this),this.i=null,e=Ne(this,e),Vo(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};_.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Oo(e,t,n){xo(e,t),0<n.length&&(e.i=null,e.g.set(Ne(e,t),ri(n)),e.h+=n.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Ne(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Al(e,t){t&&!e.j&&(re(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(xo(this,s),Oo(this,i,n))},e)),e.j=t}var Dl=class{constructor(e,t){this.h=e,this.g=t}};function Mo(e){this.l=e||Nl,L.PerformanceNavigationTiming?(e=L.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(L.g&&L.g.Ga&&L.g.Ga()&&L.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Nl=10;function Fo(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Po(e){return e.h?1:e.g?e.g.size:0}function Gs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function vi(e,t){e.g?e.g.add(t):e.h=t}function Uo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Mo.prototype.cancel=function(){if(this.i=qo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function qo(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ri(e.i)}function wi(){}wi.prototype.stringify=function(e){return L.JSON.stringify(e,void 0)};wi.prototype.parse=function(e){return L.JSON.parse(e,void 0)};function $l(){this.g=new wi}function Rl(e,t,n){const s=n||"";try{Ro(e,function(i,r){let o=i;on(i)&&(o=fi(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Ll(e,t){const n=new ss;if(L.Image){const s=new Image;s.onload=Cn(bn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Cn(bn,n,s,"TestLoadImage: error",!1,t),s.onabort=Cn(bn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Cn(bn,n,s,"TestLoadImage: timeout",!1,t),L.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function bn(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function fn(e){this.l=e.ac||null,this.j=e.jb||!1}_t(fn,mi);fn.prototype.g=function(){return new ls(this.l,this.j)};fn.prototype.i=function(e){return function(){return e}}({});function ls(e,t){wt.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ei,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_t(ls,wt);var Ei=0;_=ls.prototype;_.open=function(e,t){if(this.readyState!=Ei)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Xe(this)};_.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||L).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,dn(this)),this.readyState=Ei};_.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Xe(this)),this.g&&(this.readyState=3,Xe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bo(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Bo(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}_.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?dn(this):Xe(this),this.readyState==3&&Bo(this)}};_.Va=function(e){this.g&&(this.response=this.responseText=e,dn(this))};_.Ua=function(e){this.g&&(this.response=e,dn(this))};_.ga=function(){this.g&&dn(this)};function dn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Xe(e)}_.setRequestHeader=function(e,t){this.v.append(e,t)};_.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Xe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var xl=L.JSON.parse;function lt(e){wt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jo,this.K=this.L=!1}_t(lt,wt);var jo="",Vl=/^https?$/i,Ol=["POST","PUT"];_=lt.prototype;_.Ka=function(e){this.L=e};_.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():qs.g(),this.C=this.u?rr(this.u):rr(qs),this.g.onreadystatechange=kt(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){ur(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=L.FormData&&e instanceof L.FormData,!(0<=io(Ol,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qo(this),0<this.B&&((this.K=Ml(this.g))?(this.g.timeout=this.B,this.g.ontimeout=kt(this.qa,this)):this.A=gi(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){ur(this,r)}};function Ml(e){return _e&&tl()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}_.qa=function(){typeof ii<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Tt(this,"timeout"),this.abort(8))};function ur(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ko(e),cs(e)}function Ko(e){e.D||(e.D=!0,Tt(e,"complete"),Tt(e,"error"))}_.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Tt(this,"complete"),Tt(this,"abort"),cs(this))};_.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),cs(this,!0)),lt.X.M.call(this)};_.Ha=function(){this.s||(this.F||this.v||this.l?Go(this):this.fb())};_.fb=function(){Go(this)};function Go(e){if(e.h&&typeof ii<"u"&&(!e.C[1]||Ut(e)!=4||e.aa()!=2)){if(e.v&&Ut(e)==4)gi(e.Ha,0,e);else if(Tt(e,"readystatechange"),Ut(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Lo)[1]||null;if(!i&&L.self&&L.self.location){var r=L.self.location.protocol;i=r.substr(0,r.length-1)}s=!Vl.test(i?i.toLowerCase():"")}n=s}if(n)Tt(e,"complete"),Tt(e,"success");else{e.m=6;try{var o=2<Ut(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Ko(e)}}finally{cs(e)}}}}function cs(e,t){if(e.g){Qo(e);const n=e.g,s=e.C[0]?Mn:null;e.g=null,e.C=null,t||Tt(e,"ready");try{n.onreadystatechange=s}catch{}}}function Qo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(L.clearTimeout(e.A),e.A=null)}function Ut(e){return e.g?e.g.readyState:0}_.aa=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}};_.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),xl(t)}};function lr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case jo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}_.Ea=function(){return this.m};_.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function zo(e){let t="";return ai(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ti(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=zo(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):st(e,t,n))}function Oe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ho(e){this.Ca=0,this.i=[],this.j=new ss,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Oe("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Oe("baseRetryDelayMs",5e3,e),this.bb=Oe("retryDelaySeedMs",1e4,e),this.$a=Oe("forwardChannelMaxRetries",2,e),this.ta=Oe("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Mo(e&&e.concurrentRequestLimit),this.Fa=new $l,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}_=Ho.prototype;_.ma=8;_.G=1;function _i(e){if(Wo(e),e.G==3){var t=e.U++,n=Gt(e.F);st(n,"SID",e.I),st(n,"RID",t),st(n,"TYPE","terminate"),gn(e,n),t=new cn(e,e.j,t,void 0),t.K=2,t.v=us(Gt(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(t.v.toString(),"")),!n&&L.Image&&(new Image().src=t.v,n=!0),n||(t.g=sa(t.l,null),t.g.da(t.v)),t.F=Date.now(),hn(t)}ea(e)}function hs(e){e.g&&(Si(e),e.g.cancel(),e.g=null)}function Wo(e){hs(e),e.u&&(L.clearTimeout(e.u),e.u=null),jn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&L.clearTimeout(e.m),e.m=null)}function fs(e){Fo(e.h)||e.m||(e.m=!0,yo(e.Ja,e),e.C=0)}function Fl(e,t){return Po(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=un(kt(e.Ja,e,t),ta(e,e.C)),e.C++,!0)}_.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new cn(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=uo(r),lo(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Xo(this,i,t),n=Gt(this.F),st(n,"RID",e),st(n,"CVER",22),this.D&&st(n,"X-HTTP-Session-Id",this.D),gn(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(zo(r)))+"&"+t:this.o&&Ti(n,this.o,r)),vi(this.h,i),this.Ya&&st(n,"TYPE","init"),this.O?(st(n,"$req",t),st(n,"SID","null"),i.Z=!0,js(i,n,null)):js(i,n,t),this.G=2}}else this.G==3&&(e?cr(this,e):this.i.length==0||Fo(this.h)||cr(this))};function cr(e,t){var n;t?n=t.m:n=e.U++;const s=Gt(e.F);st(s,"SID",e.I),st(s,"RID",n),st(s,"AID",e.T),gn(e,s),e.o&&e.s&&Ti(s,e.o,e.s),n=new cn(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Xo(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),vi(e.h,n),js(n,s,t)}function gn(e,t){e.ia&&ai(e.ia,function(n,s){st(t,s,n)}),e.l&&Ro({},function(n,s){st(t,s,n)})}function Xo(e,t,n){n=Math.min(e.i.length,n);var s=e.l?kt(e.l.Ra,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=r,0>l)r=Math.max(0,i[u].h-100),a=!1;else try{Rl(c,o,"req"+l+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Yo(e){e.g||e.u||(e.Z=1,yo(e.Ia,e),e.A=0)}function Ii(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=un(kt(e.Ia,e),ta(e,e.A)),e.A++,!0)}_.Ia=function(){if(this.u=null,Jo(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=un(kt(this.eb,this),e)}};_.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Dt(10),hs(this),Jo(this))};function Si(e){e.B!=null&&(L.clearTimeout(e.B),e.B=null)}function Jo(e){e.g=new cn(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Gt(e.sa);st(t,"RID","rpc"),st(t,"SID",e.I),st(t,"CI",e.L?"0":"1"),st(t,"AID",e.T),st(t,"TYPE","xmlhttp"),gn(e,t),e.o&&e.s&&Ti(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=us(Gt(t)),n.s=null,n.P=!0,Ao(n,e)}_.cb=function(){this.v!=null&&(this.v=null,hs(this),Ii(this),Dt(19))};function jn(e){e.v!=null&&(L.clearTimeout(e.v),e.v=null)}function Zo(e,t){var n=null;if(e.g==t){jn(e),Si(e),e.g=null;var s=2}else if(Gs(e.h,t))n=t.D,Uo(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=is(),Tt(s,new So(s,n)),fs(e)}else Yo(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&Fl(e,t)||s==2&&Ii(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:ue(e,5);break;case 4:ue(e,10);break;case 3:ue(e,6);break;default:ue(e,2)}}}function ta(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function ue(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=kt(e.kb,e);n||(n=new ce("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||qn(n,"https"),us(n)),Ll(n.toString(),s)}else Dt(2);e.G=0,e.l&&e.l.va(t),ea(e),Wo(e)}_.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function ea(e){if(e.G=0,e.la=[],e.l){const t=qo(e.h);(t.length!=0||e.i.length!=0)&&(Zi(e.la,t),Zi(e.la,e.i),e.h.i.length=0,ri(e.i),e.i.length=0),e.l.ua()}}function na(e,t,n){var s=n instanceof ce?Gt(n):new ce(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),Bn(s,s.m);else{var i=L.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new ce(null,void 0);s&&qn(r,s),t&&(r.g=t),i&&Bn(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&st(s,n,t),st(s,"VER",e.ma),gn(e,s),s}function sa(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new lt(new fn({jb:!0})):new lt(e.ra),t.Ka(e.H),t}function ia(){}_=ia.prototype;_.xa=function(){};_.wa=function(){};_.va=function(){};_.ua=function(){};_.Ra=function(){};function Kn(){if(_e&&!(10<=Number(el)))throw Error("Environmental error: no available transport.")}Kn.prototype.g=function(e,t){return new Rt(e,t)};function Rt(e,t){wt.call(this),this.g=new Ho(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Fn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Fn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new $e(this)}_t(Rt,wt);Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Dt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=na(e,null,e.V),fs(e)};Rt.prototype.close=function(){_i(this.g)};Rt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=fi(e),e=n);t.i.push(new Dl(t.ab++,e)),t.G==3&&fs(t)};Rt.prototype.M=function(){this.g.l=null,delete this.j,_i(this.g),delete this.g,Rt.X.M.call(this)};function ra(e){pi.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}_t(ra,pi);function oa(){yi.call(this),this.status=1}_t(oa,yi);function $e(e){this.g=e}_t($e,ia);$e.prototype.xa=function(){Tt(this.g,"a")};$e.prototype.wa=function(e){Tt(this.g,new ra(e))};$e.prototype.va=function(e){Tt(this.g,new oa)};$e.prototype.ua=function(){Tt(this.g,"b")};Kn.prototype.createWebChannel=Kn.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;rs.NO_ERROR=0;rs.TIMEOUT=8;rs.HTTP_ERROR=6;Co.COMPLETE="complete";ko.EventType=ln;ln.OPEN="a";ln.CLOSE="b";ln.ERROR="c";ln.MESSAGE="d";wt.prototype.listen=wt.prototype.N;lt.prototype.listenOnce=lt.prototype.O;lt.prototype.getLastError=lt.prototype.Oa;lt.prototype.getLastErrorCode=lt.prototype.Ea;lt.prototype.getStatus=lt.prototype.aa;lt.prototype.getResponseJson=lt.prototype.Sa;lt.prototype.getResponseText=lt.prototype.fa;lt.prototype.send=lt.prototype.da;lt.prototype.setWithCredentials=lt.prototype.Ka;var Pl=function(){return new Kn},Ul=function(){return is()},$s=rs,ql=Co,Bl=ge,hr={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},jl=fn,An=ko,Kl=lt;const fr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Re="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=new $u("@firebase/firestore");function dr(){return fe.logLevel}function C(e,...t){if(fe.logLevel<=Ge.DEBUG){const n=t.map(Ci);fe.debug(`Firestore (${Re}): ${e}`,...n)}}function Qt(e,...t){if(fe.logLevel<=Ge.ERROR){const n=t.map(Ci);fe.error(`Firestore (${Re}): ${e}`,...n)}}function Qs(e,...t){if(fe.logLevel<=Ge.WARN){const n=t.map(Ci);fe.warn(`Firestore (${Re}): ${e}`,...n)}}function Ci(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e="Unexpected state"){const t=`FIRESTORE (${Re}) INTERNAL ASSERTION FAILED: `+e;throw Qt(t),new Error(t)}function et(e,t){e||x()}function F(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Cu{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Gl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class Ql{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zl{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Zt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Zt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(et(typeof s.accessToken=="string"),new aa(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return et(t===null||typeof t=="string"),new It(t)}}class Hl{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=It.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(et(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Wl{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Hl(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yl{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(et(typeof n.token=="string"),this.A=n.token,new Xl(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Jl(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function Q(e,t){return e<t?-1:e>t?1:0}function Ie(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new N(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new N(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return gt.fromMillis(Date.now())}static fromDate(t){return gt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new gt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Q(this.nanoseconds,t.nanoseconds):Q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new gt(0,0))}static max(){return new M(new gt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,n,s){n===void 0?n=0:n>t.length&&x(),s===void 0?s=t.length-n:s>t.length-n&&x(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ye.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ye?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class ut extends Ye{construct(t,n,s){return new ut(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new N(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ut(n)}static emptyPath(){return new ut([])}}const Zl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Ye{construct(t,n,s){return new Ct(t,n,s)}static isValidIdentifier(t){return Zl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new N(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new N(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new N(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new N(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ct(n)}static emptyPath(){return new Ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.path=t}static fromPath(t){return new A(ut.fromString(t))}static fromName(t){return new A(ut.fromString(t).popFirst(5))}static empty(){return new A(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ut.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ut.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new A(new ut(t.slice()))}}function tc(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=M.fromTimestamp(s===1e9?new gt(n+1,0):new gt(n,s));return new ee(i,A.empty(),t)}function ec(e){return new ee(e.readTime,e.key,-1)}class ee{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new ee(M.min(),A.empty(),-1)}static max(){return new ee(M.max(),A.empty(),-1)}}function nc(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=A.comparator(e.documentKey,t.documentKey),n!==0?n:Q(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ic{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==sc)throw e;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new m((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):m.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):m.reject(n)}static resolve(t){return new m((n,s)=>{n(t)})}static reject(t){return new m((n,s)=>{s(t)})}static waitFor(t){return new m((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(t){let n=m.resolve(!1);for(const s of t)n=n.next(i=>i?m.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new m((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const l=u;n(t[l]).next(c=>{o[l]=c,++a,a===r&&s(o)},c=>i(c))}})}static doWhile(t,n){return new m((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function pn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}ki.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,n,s,i,r,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Je{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Je("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Je&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Le(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function la(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(e){return e==null}function Gn(e){return e===0&&1/e==-1/0}function oc(e){return typeof e=="number"&&Number.isInteger(e)&&!Gn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new At(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new At(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}At.EMPTY_BYTE_STRING=new At("");const ac=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(e){if(et(!!e),typeof e=="string"){let t=0;const n=ac.exec(e);if(et(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:ht(e.seconds),nanos:ht(e.nanos)}}function ht(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Se(e){return typeof e=="string"?At.fromBase64String(e):At.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ha(e){const t=e.mapValue.fields.__previous_value__;return ca(t)?ha(t):t}function Ze(e){const t=ne(e.mapValue.fields.__local_write_time__.timestampValue);return new gt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function de(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ca(e)?4:uc(e)?9007199254740991:10:x()}function Ft(e,t){if(e===t)return!0;const n=de(e);if(n!==de(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ze(e).isEqual(Ze(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=ne(s.timestampValue),o=ne(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Se(s.bytesValue).isEqual(Se(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return ht(s.geoPointValue.latitude)===ht(i.geoPointValue.latitude)&&ht(s.geoPointValue.longitude)===ht(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ht(s.integerValue)===ht(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ht(s.doubleValue),o=ht(i.doubleValue);return r===o?Gn(r)===Gn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Ie(e.arrayValue.values||[],t.arrayValue.values||[],Ft);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(gr(r)!==gr(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Ft(r[a],o[a])))return!1;return!0}(e,t);default:return x()}}function tn(e,t){return(e.values||[]).find(n=>Ft(n,t))!==void 0}function Ce(e,t){if(e===t)return 0;const n=de(e),s=de(t);if(n!==s)return Q(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=ht(i.integerValue||i.doubleValue),a=ht(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return mr(e.timestampValue,t.timestampValue);case 4:return mr(Ze(e),Ze(t));case 5:return Q(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Se(i),a=Se(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=Q(o[u],a[u]);if(l!==0)return l}return Q(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=Q(ht(i.latitude),ht(r.latitude));return o!==0?o:Q(ht(i.longitude),ht(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Ce(o[u],a[u]);if(l)return l}return Q(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===Dn.mapValue&&r===Dn.mapValue)return 0;if(i===Dn.mapValue)return 1;if(r===Dn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=Q(a[c],l[c]);if(h!==0)return h;const f=Ce(o[a[c]],u[l[c]]);if(f!==0)return f}return Q(a.length,l.length)}(e.mapValue,t.mapValue);default:throw x()}}function mr(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Q(e,t);const n=ne(e),s=ne(t),i=Q(n.seconds,s.seconds);return i!==0?i:Q(n.nanos,s.nanos)}function ke(e){return zs(e)}function zs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=ne(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Se(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,A.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=zs(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${zs(s.fields[a])}`;return r+"}"}(e.mapValue):x();var t,n}function Hs(e){return!!e&&"integerValue"in e}function bi(e){return!!e&&"arrayValue"in e}function pr(e){return!!e&&"nullValue"in e}function yr(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function $n(e){return!!e&&"mapValue"in e}function qe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Le(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=qe(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=qe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function uc(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,n){this.position=t,this.inclusive=n}}function vr(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=A.comparator(A.fromName(o.referenceValue),n.key):s=Ce(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function wr(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ft(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{}class dt extends fa{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new hc(t,n,s):n==="array-contains"?new gc(t,s):n==="in"?new mc(t,s):n==="not-in"?new pc(t,s):n==="array-contains-any"?new yc(t,s):new dt(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new fc(t,s):new dc(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ce(n,this.value)):n!==null&&de(this.value)===de(n)&&this.matchesComparison(Ce(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Pt extends fa{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new Pt(t,n)}matches(t){return da(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function da(e){return e.op==="and"}function lc(e){return cc(e)&&da(e)}function cc(e){for(const t of e.filters)if(t instanceof Pt)return!1;return!0}function ga(e){if(e instanceof dt)return e.field.canonicalString()+e.op.toString()+ke(e.value);{const t=e.filters.map(n=>ga(n)).join(",");return`${e.op}(${t})`}}function ma(e,t){return e instanceof dt?function(n,s){return s instanceof dt&&n.op===s.op&&n.field.isEqual(s.field)&&Ft(n.value,s.value)}(e,t):e instanceof Pt?function(n,s){return s instanceof Pt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&ma(r,s.filters[o]),!0):!1}(e,t):void x()}function pa(e){return e instanceof dt?function(t){return`${t.field.canonicalString()} ${t.op} ${ke(t.value)}`}(e):e instanceof Pt?function(t){return t.op.toString()+" {"+t.getFilters().map(pa).join(" ,")+"}"}(e):"Filter"}class hc extends dt{constructor(t,n,s){super(t,n,s),this.key=A.fromName(s.referenceValue)}matches(t){const n=A.comparator(t.key,this.key);return this.matchesComparison(n)}}class fc extends dt{constructor(t,n){super(t,"in",n),this.keys=ya("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class dc extends dt{constructor(t,n){super(t,"not-in",n),this.keys=ya("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function ya(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>A.fromName(s.referenceValue))}class gc extends dt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return bi(n)&&tn(n.arrayValue,this.value)}}class mc extends dt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&tn(this.value.arrayValue,n)}}class pc extends dt{constructor(t,n){super(t,"not-in",n)}matches(t){if(tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!tn(this.value.arrayValue,n)}}class yc extends dt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!bi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>tn(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,n="asc"){this.field=t,this.dir=n}}function vc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,n){this.comparator=t,this.root=n||Et.EMPTY}insert(t,n){return new pt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(t){return new pt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Et.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Nn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Nn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Nn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Nn(this.root,t,this.comparator,!0)}}class Nn{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Et{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:Et.RED,this.left=i!=null?i:Et.EMPTY,this.right=r!=null?r:Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new Et(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Et.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(e,t,n,s,i){return this}insert(e,t,n){return new Et(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.comparator=t,this.data=new pt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Er(this.data.getIterator())}getIteratorFrom(t){return new Er(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof mt)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new mt(this.comparator);return n.data=t,n}}class Er{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.fields=t,t.sort(Ct.comparator)}static empty(){return new Ot([])}unionWith(t){let n=new mt(Ct.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Ot(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ie(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.value=t}static empty(){return new Lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!$n(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=qe(n)}setAll(t){let n=Ct.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=qe(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());$n(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ft(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];$n(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Le(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new Lt(qe(this.value))}}function va(e){const t=[];return Le(e.fields,(n,s)=>{const i=new Ct([n]);if($n(s)){const r=va(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new Ot(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new St(t,0,M.min(),M.min(),M.min(),Lt.empty(),0)}static newFoundDocument(t,n,s,i){return new St(t,1,n,M.min(),s,i,0)}static newNoDocument(t,n){return new St(t,2,n,M.min(),M.min(),Lt.empty(),0)}static newUnknownDocument(t,n){return new St(t,3,n,M.min(),M.min(),Lt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof St&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Tr(e,t=null,n=[],s=[],i=null,r=null,o=null){return new wc(e,t,n,s,i,r,o)}function Ai(e){const t=F(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>ga(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ds(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ke(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ke(s)).join(",")),t.ft=n}return t.ft}function Di(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!vc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ma(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!wr(e.startAt,t.startAt)&&wr(e.endAt,t.endAt)}function Ws(e){return A.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function Ec(e,t,n,s,i,r,o,a){return new gs(e,t,n,s,i,r,o,a)}function Ni(e){return new gs(e)}function _r(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Tc(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function _c(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Ic(e){return e.collectionGroup!==null}function Ee(e){const t=F(e);if(t.dt===null){t.dt=[];const n=_c(t),s=Tc(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new Be(n)),t.dt.push(new Be(Ct.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Be(Ct.keyField(),r))}}}return t.dt}function zt(e){const t=F(e);if(!t._t)if(t.limitType==="F")t._t=Tr(t.path,t.collectionGroup,Ee(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Ee(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new Be(r.field,o))}const s=t.endAt?new Qn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Qn(t.startAt.position,t.startAt.inclusive):null;t._t=Tr(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t._t}function Xs(e,t,n){return new gs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ms(e,t){return Di(zt(e),zt(t))&&e.limitType===t.limitType}function wa(e){return`${Ai(zt(e))}|lt:${e.limitType}`}function Ys(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>pa(s)).join(", ")}]`),ds(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ke(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ke(s)).join(",")),`Target(${n})`}(zt(e))}; limitType=${e.limitType})`}function $i(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):A.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of Ee(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=vr(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ee(n),s)||n.endAt&&!function(i,r,o){const a=vr(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ee(n),s))}(e,t)}function Sc(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ea(e){return(t,n)=>{let s=!1;for(const i of Ee(e)){const r=Cc(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Cc(e,t,n){const s=e.field.isKeyField()?A.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Ce(a,u):x()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return x()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gn(t)?"-0":t}}function _a(e){return{integerValue:""+e}}function kc(e,t){return oc(t)?_a(t):Ta(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this._=void 0}}function bc(e,t,n){return e instanceof zn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof en?Sa(e,t):e instanceof nn?Ca(e,t):function(s,i){const r=Ia(s,i),o=Ir(r)+Ir(s.gt);return Hs(r)&&Hs(s.gt)?_a(o):Ta(s.yt,o)}(e,t)}function Ac(e,t,n){return e instanceof en?Sa(e,t):e instanceof nn?Ca(e,t):n}function Ia(e,t){return e instanceof Hn?Hs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class zn extends ps{}class en extends ps{constructor(t){super(),this.elements=t}}function Sa(e,t){const n=ka(t);for(const s of e.elements)n.some(i=>Ft(i,s))||n.push(s);return{arrayValue:{values:n}}}class nn extends ps{constructor(t){super(),this.elements=t}}function Ca(e,t){let n=ka(t);for(const s of e.elements)n=n.filter(i=>!Ft(i,s));return{arrayValue:{values:n}}}class Hn extends ps{constructor(t,n){super(),this.yt=t,this.gt=n}}function Ir(e){return ht(e.integerValue||e.doubleValue)}function ka(e){return bi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Dc(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof en&&s instanceof en||n instanceof nn&&s instanceof nn?Ie(n.elements,s.elements,Ft):n instanceof Hn&&s instanceof Hn?Ft(n.gt,s.gt):n instanceof zn&&s instanceof zn}(e.transform,t.transform)}class Nc{constructor(t,n){this.version=t,this.transformResults=n}}class Kt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Kt}static exists(t){return new Kt(void 0,t)}static updateTime(t){return new Kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Rn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ys{}function ba(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Da(e.key,Kt.none()):new yn(e.key,e.data,Kt.none());{const n=e.data,s=Lt.empty();let i=new mt(Ct.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new me(e.key,s,new Ot(i.toArray()),Kt.none())}}function $c(e,t,n){e instanceof yn?function(s,i,r){const o=s.value.clone(),a=Cr(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof me?function(s,i,r){if(!Rn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Cr(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Aa(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function je(e,t,n,s){return e instanceof yn?function(i,r,o,a){if(!Rn(i.precondition,r))return o;const u=i.value.clone(),l=kr(i.fieldTransforms,a,r);return u.setAll(l),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof me?function(i,r,o,a){if(!Rn(i.precondition,r))return o;const u=kr(i.fieldTransforms,a,r),l=r.data;return l.setAll(Aa(i)),l.setAll(u),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(e,t,n,s):function(i,r,o){return Rn(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function Rc(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Ia(s.transform,i||null);r!=null&&(n===null&&(n=Lt.empty()),n.set(s.field,r))}return n||null}function Sr(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ie(n,s,(i,r)=>Dc(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class yn extends ys{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class me extends ys{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Aa(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Cr(e,t,n){const s=new Map;et(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Ac(o,a,n[i]))}return s}function kr(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,bc(r,o,t))}return s}class Da extends ys{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lc extends ys{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,G;function Vc(e){switch(e){default:return x();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Na(e){if(e===void 0)return Qt("GRPC error has no .code"),p.UNKNOWN;switch(e){case ct.OK:return p.OK;case ct.CANCELLED:return p.CANCELLED;case ct.UNKNOWN:return p.UNKNOWN;case ct.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case ct.INTERNAL:return p.INTERNAL;case ct.UNAVAILABLE:return p.UNAVAILABLE;case ct.UNAUTHENTICATED:return p.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case ct.NOT_FOUND:return p.NOT_FOUND;case ct.ALREADY_EXISTS:return p.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return p.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case ct.ABORTED:return p.ABORTED;case ct.OUT_OF_RANGE:return p.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return p.UNIMPLEMENTED;case ct.DATA_LOSS:return p.DATA_LOSS;default:return x()}}(G=ct||(ct={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Le(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return la(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new pt(A.comparator);function Ht(){return Oc}const $a=new pt(A.comparator);function Pe(...e){let t=$a;for(const n of e)t=t.insert(n.key,n);return t}function Ra(e){let t=$a;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function le(){return Ke()}function La(){return Ke()}function Ke(){return new xe(e=>e.toString(),(e,t)=>e.isEqual(t))}const Mc=new pt(A.comparator),Fc=new mt(A.comparator);function q(...e){let t=Fc;for(const n of e)t=t.add(n);return t}const Pc=new mt(Q);function xa(){return Pc}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,vn.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new vs(M.min(),i,xa(),Ht(),q())}}class vn{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new vn(s,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,n,s,i){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=i}}class Va{constructor(t,n){this.targetId=t,this.Et=n}}class Oa{constructor(t,n,s=At.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class br{constructor(){this.At=0,this.Rt=Dr(),this.bt=At.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=q(),n=q(),s=q();return this.Rt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:x()}}),new vn(this.bt,this.Pt,t,n,s)}xt(){this.vt=!1,this.Rt=Dr()}Nt(t,n){this.vt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Uc{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=Ht(),this.qt=Ar(),this.Ut=new mt(Q)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}jt(t){this.forEachTarget(t,n=>{const s=this.Wt(n);switch(t.state){case 0:this.zt(n)&&s.Dt(t.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(t.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:x()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.zt(i)&&n(i)})}Jt(t){const n=t.targetId,s=t.Et.count,i=this.Yt(n);if(i){const r=i.target;if(Ws(r))if(s===0){const o=new A(r.path);this.Qt(n,o,St.newNoDocument(o,M.min()))}else et(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(t){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Ws(a.target)){const u=new A(a.target.path);this.Lt.get(u)!==null||this.te(o,u)||this.Qt(o,u,St.newNoDocument(u,t))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=q();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Yt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(t));const i=new vs(t,n,this.Ut,this.Lt,s);return this.Lt=Ht(),this.qt=Ar(),this.Ut=new mt(Q),i}Gt(t,n){if(!this.zt(t))return;const s=this.te(t,n.key)?2:0;this.Wt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.zt(t))return;const i=this.Wt(t);this.te(t,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Xt(t){const n=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let n=this.Bt.get(t);return n||(n=new br,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new mt(Q),this.qt=this.qt.insert(t,n)),n}zt(t){const n=this.Yt(t)!==null;return n||C("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new br),this.$t.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.$t.getRemoteKeysForTarget(t).has(n)}}function Ar(){return new pt(A.comparator)}function Dr(){return new pt(A.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Bc=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),jc=(()=>({and:"AND",or:"OR"}))();class Kc{constructor(t,n){this.databaseId=t,this.wt=n}}function Wn(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ma(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Gc(e,t){return Wn(e,t.toTimestamp())}function Mt(e){return et(!!e),M.fromTimestamp(function(t){const n=ne(t);return new gt(n.seconds,n.nanos)}(e))}function Ri(e,t){return function(n){return new ut(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Fa(e){const t=ut.fromString(e);return et(Ba(t)),t}function Js(e,t){return Ri(e.databaseId,t.path)}function Rs(e,t){const n=Fa(t);if(n.get(1)!==e.databaseId.projectId)throw new N(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new N(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new A(Pa(n))}function Zs(e,t){return Ri(e.databaseId,t)}function Qc(e){const t=Fa(e);return t.length===4?ut.emptyPath():Pa(t)}function ti(e){return new ut(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Pa(e){return et(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Nr(e,t,n){return{name:Js(e,t),fields:n.value.mapValue.fields}}function zc(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:x()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,l){return u.wt?(et(l===void 0||typeof l=="string"),At.fromBase64String(l||"")):(et(l===void 0||l instanceof Uint8Array),At.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?p.UNKNOWN:Na(u.code);return new N(l,u.message||"")}(o);n=new Oa(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Rs(e,s.document.name),r=Mt(s.document.updateTime),o=s.document.createTime?Mt(s.document.createTime):M.min(),a=new Lt({mapValue:{fields:s.document.fields}}),u=St.newFoundDocument(i,r,o,a),l=s.targetIds||[],c=s.removedTargetIds||[];n=new Ln(l,c,u.key,u)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Rs(e,s.document),r=s.readTime?Mt(s.readTime):M.min(),o=St.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ln([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Rs(e,s.document),r=s.removedTargetIds||[];n=new Ln([],r,i,null)}else{if(!("filter"in t))return x();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new xc(i),o=s.targetId;n=new Va(o,r)}}return n}function Hc(e,t){let n;if(t instanceof yn)n={update:Nr(e,t.key,t.value)};else if(t instanceof Da)n={delete:Js(e,t.key)};else if(t instanceof me)n={update:Nr(e,t.key,t.data),updateMask:sh(t.fieldMask)};else{if(!(t instanceof Lc))return x();n={verify:Js(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof zn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof en)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof nn)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Hn)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw x()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Gc(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:x()}(e,t.precondition)),n}function Wc(e,t){return e&&e.length>0?(et(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?Mt(s.updateTime):Mt(i);return r.isEqual(M.min())&&(r=Mt(i)),new Nc(r,s.transformResults||[])}(n,t))):[]}function Xc(e,t){return{documents:[Zs(e,t.path)]}}function Yc(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Zs(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Zs(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length!==0)return qa(Pt.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:ye(c.field),direction:th(c.dir)}}(l))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,l){return u.wt||ds(l)?l:{value:l}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Jc(e){let t=Qc(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){et(s===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let r=[];n.where&&(r=function(c){const h=Ua(c);return h instanceof Pt&&lc(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Be(ve(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,ds(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,f=c.values||[];return new Qn(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,f=c.values||[];return new Qn(f,h)}(n.endAt)),Ec(t,i,o,r,a,"F",u,l)}function Zc(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return x()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Ua(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=ve(t.unaryFilter.field);return dt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ve(t.unaryFilter.field);return dt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ve(t.unaryFilter.field);return dt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ve(t.unaryFilter.field);return dt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(e):e.fieldFilter!==void 0?function(t){return dt.create(ve(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Pt.create(t.compositeFilter.filters.map(n=>Ua(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return x()}}(t.compositeFilter.op))}(e):x()}function th(e){return qc[e]}function eh(e){return Bc[e]}function nh(e){return jc[e]}function ye(e){return{fieldPath:e.canonicalString()}}function ve(e){return Ct.fromServerFormat(e.fieldPath)}function qa(e){return e instanceof dt?function(t){if(t.op==="=="){if(yr(t.value))return{unaryFilter:{field:ye(t.field),op:"IS_NAN"}};if(pr(t.value))return{unaryFilter:{field:ye(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(yr(t.value))return{unaryFilter:{field:ye(t.field),op:"IS_NOT_NAN"}};if(pr(t.value))return{unaryFilter:{field:ye(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ye(t.field),op:eh(t.op),value:t.value}}}(e):e instanceof Pt?function(t){const n=t.getFilters().map(s=>qa(s));return n.length===1?n[0]:{compositeFilter:{op:nh(t.op),filters:n}}}(e):x()}function sh(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Ba(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&$c(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=je(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=je(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=La();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=ba(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(M.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),q())}isEqual(t){return this.batchId===t.batchId&&Ie(this.mutations,t.mutations,(n,s)=>Sr(n,s))&&Ie(this.baseMutations,t.baseMutations,(n,s)=>Sr(n,s))}}class Li{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){et(t.mutations.length===s.length);let i=Mc;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Li(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,n,s,i,r=M.min(),o=M.min(),a=At.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new he(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new he(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new he(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.ie=t}}function ah(e){const t=Jc({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Xs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.Je=new lh}addToCollectionParentIndex(t,n){return this.Je.add(n),m.resolve()}getCollectionParents(t,n){return m.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return m.resolve()}deleteFieldIndex(t,n){return m.resolve()}getDocumentsMatchingTarget(t,n){return m.resolve(null)}getIndexType(t,n){return m.resolve(0)}getFieldIndexes(t,n){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,n){return m.resolve(ee.min())}getMinOffsetFromCollectionGroup(t,n){return m.resolve(ee.min())}updateCollectionGroup(t,n,s){return m.resolve()}updateIndexEntries(t,n){return m.resolve()}}class lh{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new mt(ut.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new mt(ut.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new be(0)}static vn(){return new be(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(){this.changes=new xe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,St.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?m.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&je(s.mutation,i,Ot.empty(),gt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,q()).next(()=>s))}getLocalViewOfDocuments(t,n,s=q()){const i=le();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=Pe();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=le();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,q()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=Ht();const o=Ke(),a=Ke();return n.forEach((u,l)=>{const c=s.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof me)?r=r.insert(l.key,l):c!==void 0&&(o.set(l.key,c.mutation.getFieldMask()),je(c.mutation,l,c.mutation.getFieldMask(),gt.now()))}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new hh(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Ke();let i=new pt((o,a)=>o-a),r=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=s.get(u)||Ot.empty();c=a.applyToLocalView(l,c),s.set(u,c);const h=(i.get(a.batchId)||q()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=La();c.forEach(f=>{if(!r.has(f)){const g=ba(n.get(f),s.get(f));g!==null&&h.set(f,g),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return m.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return A.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Ic(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):m.resolve(le());let a=-1,u=r;return o.next(l=>m.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(c)?m.resolve():this.remoteDocumentCache.getEntry(t,c).next(f=>{u=u.insert(c,f)}))).next(()=>this.populateOverlays(t,l,r)).next(()=>this.computeViews(t,u,l,q())).next(c=>({batchId:a,changes:Ra(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new A(n)).next(s=>{let i=Pe();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=Pe();return this.indexManager.getCollectionParents(t,i).next(o=>m.forEach(o,a=>{const u=function(l,c){return new gs(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(l=>{l.forEach((c,h)=>{r=r.insert(c,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(r=>{r.forEach((a,u)=>{const l=u.getKey();i.get(l)===null&&(i=i.insert(l,St.newInvalidDocument(l)))});let o=Pe();return i.forEach((a,u)=>{const l=r.get(a);l!==void 0&&je(l.mutation,u,Ot.empty(),gt.now()),$i(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return m.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Mt(s.createTime)}),m.resolve()}getNamedQuery(t,n){return m.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:ah(s.bundledQuery),readTime:Mt(s.readTime)}}(n)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.overlays=new pt(A.comparator),this.es=new Map}getOverlay(t,n){return m.resolve(this.overlays.get(n))}getOverlays(t,n){const s=le();return m.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.oe(t,n,r)}),m.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),m.resolve()}getOverlaysForCollection(t,n,s){const i=le(),r=n.length+1,o=new A(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return m.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new pt((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let c=r.get(l.largestBatchId);c===null&&(c=le(),r=r.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=le(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return m.resolve(a)}oe(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new rh(n,s));let r=this.es.get(n);r===void 0&&(r=q(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.ns=new mt(vt.ss),this.rs=new mt(vt.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new vt(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new vt(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new A(new ut([])),s=new vt(n,t),i=new vt(n,t+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new A(new ut([])),s=new vt(n,t),i=new vt(n,t+1);let r=q();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new vt(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class vt{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return A.comparator(t.key,n.key)||Q(t._s,n._s)}static os(t,n){return Q(t._s,n._s)||A.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new mt(vt.ss)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ih(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new vt(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,n){return m.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return m.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new vt(n,0),i=new vt(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),m.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new mt(Q);return n.forEach(i=>{const r=new vt(i,0),o=new vt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),m.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;A.isDocumentKey(r)||(r=r.child(""));const o=new vt(new A(r),0);let a=new mt(Q);return this.gs.forEachWhile(u=>{const l=u.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(u._s)),!0)},o),m.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){et(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return m.forEach(n.mutations,i=>{const r=new vt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new vt(n,0),i=this.gs.firstAfterOrEqual(s);return m.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(t){this.Es=t,this.docs=new pt(A.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return m.resolve(s?s.document.mutableCopy():St.newInvalidDocument(n))}getEntries(t,n){let s=Ht();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():St.newInvalidDocument(i))}),m.resolve(s)}getAllFromCollection(t,n,s){let i=Ht();const r=new A(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||nc(ec(u),s)<=0||(i=i.insert(u.key,u.mutableCopy()))}return m.resolve(i)}getAllFromCollectionGroup(t,n,s,i){x()}As(t,n){return m.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new yh(this)}getSize(t){return m.resolve(this.size)}}class yh extends ch{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(s)}),m.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t){this.persistence=t,this.Rs=new xe(n=>Ai(n),Di),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.bs=0,this.Ps=new xi,this.targetCount=0,this.vs=be.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,i)=>n(i)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),m.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new be(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,m.resolve()}updateTargetData(t,n){return this.Dn(n),m.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),m.waitFor(r).next(()=>i)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return m.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),m.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),m.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),m.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return m.resolve(s)}containsKey(t,n){return m.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new ki(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new vh(this),this.indexManager=new uh,this.remoteDocumentCache=function(s){return new ph(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new oh(n),this.Ns=new dh(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new gh,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new mh(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){C("MemoryPersistence","Starting transaction:",t);const i=new Eh(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(t,n){return m.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class Eh extends ic{constructor(t){super(),this.currentSequenceNumber=t}}class Vi{constructor(t){this.persistence=t,this.Fs=new xi,this.$s=null}static Bs(t){return new Vi(t)}get Ls(){if(this.$s)return this.$s;throw x()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),m.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),m.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),m.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Ls,s=>{const i=A.fromPath(s);return this.qs(t,i).next(r=>{r||n.removeEntry(i,M.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return m.or([()=>m.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=i}static Ci(t,n){let s=q(),i=q();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Oi(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,i){return this.ki(t,n).next(r=>r||this.Oi(t,n,i,s)).next(r=>r||this.Mi(t,n))}ki(t,n){if(_r(n))return m.resolve(null);let s=zt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xs(n,null,"F"),s=zt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=q(...r);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(u=>{const l=this.Fi(n,a);return this.$i(n,l,o,u.readTime)?this.ki(t,Xs(n,null,"F")):this.Bi(t,l,n,u)}))})))}Oi(t,n,s,i){return _r(n)||i.isEqual(M.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(t,n):(dr()<=Ge.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ys(n)),this.Bi(t,o,n,tc(i,-1)))})}Fi(t,n){let s=new mt(Ea(t));return n.forEach((i,r)=>{$i(t,r)&&(s=s.add(r))}),s}$i(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(t,n){return dr()<=Ge.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Ys(n)),this.Ni.getDocumentsMatchingQuery(t,n,ee.min())}Bi(t,n,s,i){return this.Ni.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,n,s,i){this.persistence=t,this.Li=n,this.yt=i,this.qi=new pt(Q),this.Ui=new xe(r=>Ai(r),Di),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new fh(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function Ih(e,t,n,s){return new _h(e,t,n,s)}async function ja(e,t){const n=F(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=q();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of r){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(s,u).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Sh(e,t){const n=F(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let f=m.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(d=>{const w=u.docVersions.get(g);et(w!==null),d.version.compareTo(w)<0&&(c.applyToRemoteDocument(d,u),d.isValidDocument()&&(d.setReadTime(u.commitVersion),l.addEntry(d)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=q();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function Ka(e){const t=F(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function Ch(e,t){const n=F(e),s=t.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];t.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(r,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(r,c.addedDocuments,h)));let g=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(h)?g=g.withResumeToken(At.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,s)),i=i.insert(h,g),function(d,w,T){return d.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-d.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,g,c)&&a.push(n.Cs.updateTargetData(r,g))});let u=Ht(),l=q();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(kh(r,o,t.documentUpdates).next(c=>{u=c.Wi,l=c.zi})),!s.isEqual(M.min())){const c=n.Cs.getLastRemoteSnapshotVersion(r).next(h=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(c)}return m.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,l)).next(()=>u)}).then(r=>(n.qi=i,r))}function kh(e,t,n){let s=q(),i=q();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=Ht();return n.forEach((a,u)=>{const l=r.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(M.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function bh(e,t){const n=F(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Ah(e,t){const n=F(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,t).next(r=>r?(i=r,m.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new he(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(t,s.targetId)),s})}async function ei(e,t,n){const s=F(e),i=s.qi.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!pn(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.qi=s.qi.remove(t),s.Ui.delete(i.target)}function $r(e,t,n){const s=F(e);let i=M.min(),r=q();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=F(a),h=c.Ui.get(l);return h!==void 0?m.resolve(c.qi.get(h)):c.Cs.getTargetData(u,l)}(s,o,zt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?i:M.min(),n?r:q())).next(a=>(Dh(s,Sc(t),a),{documents:a,Hi:r})))}function Dh(e,t,n){let s=e.Ki.get(t)||M.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Ki.set(t,s)}class Rr{constructor(){this.activeTargetIds=xa()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Nh{constructor(){this.Lr=new Rr,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,s){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Rr,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{Ur(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,i,r){const o=this.ho(t,n);C("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(t,o,a,s).then(u=>(C("RestConnection","Received: ",u),u),u=>{throw Qs("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",s),u})}_o(t,n,s,i,r,o){return this.ao(t,n,s,i,r)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Re,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ho(t,n){const s=Rh[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,i){return new Promise((r,o)=>{const a=new Kl;a.setWithCredentials(!0),a.listenOnce(ql.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case $s.NO_ERROR:const l=a.getResponseJson();C("Connection","XHR received:",JSON.stringify(l)),r(l);break;case $s.TIMEOUT:C("Connection",'RPC "'+t+'" timed out'),o(new N(p.DEADLINE_EXCEEDED,"Request time out"));break;case $s.HTTP_ERROR:const c=a.getStatus();if(C("Connection",'RPC "'+t+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const g=function(d){const w=d.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(w)>=0?w:p.UNKNOWN}(f.status);o(new N(g,f.message))}else o(new N(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new N(p.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{C("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,s,15)})}wo(t,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Pl(),o=Ul(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new jl({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const u=i.join("");C("Connection","Creating WebChannel: "+u,a);const l=r.createWebChannel(u,a);let c=!1,h=!1;const f=new Lh({Hr:d=>{h?C("Connection","Not sending because WebChannel is closed:",d):(c||(C("Connection","Opening WebChannel transport."),l.open(),c=!0),C("Connection","WebChannel sending:",d),l.send(d))},Jr:()=>l.close()}),g=(d,w,T)=>{d.listen(w,U=>{try{T(U)}catch(v){setTimeout(()=>{throw v},0)}})};return g(l,An.EventType.OPEN,()=>{h||C("Connection","WebChannel transport opened.")}),g(l,An.EventType.CLOSE,()=>{h||(h=!0,C("Connection","WebChannel transport closed"),f.io())}),g(l,An.EventType.ERROR,d=>{h||(h=!0,Qs("Connection","WebChannel transport errored:",d),f.io(new N(p.UNAVAILABLE,"The operation could not be completed")))}),g(l,An.EventType.MESSAGE,d=>{var w;if(!h){const T=d.data[0];et(!!T);const U=T,v=U.error||((w=U[0])===null||w===void 0?void 0:w.error);if(v){C("Connection","WebChannel received error:",v);const P=v.status;let B=function(D){const y=ct[D];if(y!==void 0)return Na(y)}(P),S=v.message;B===void 0&&(B=p.INTERNAL,S="Unknown error status: "+P+" with message "+v.message),h=!0,f.io(new N(B,S)),l.close()}else C("Connection","WebChannel received:",T),f.ro(T)}}),g(o,Bl.STAT_EVENT,d=>{d.stat===hr.PROXY?C("Connection","Detected buffering proxy"):d.stat===hr.NOPROXY&&C("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Ls(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(e){return new Kc(e,!0)}class Ga{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t,n,s,i,r,o,a,u){this.Hs=t,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ga(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(Qt(n.toString()),Qt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{t(()=>{const i=new N(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return C("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vh extends Qa{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.yt=r}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=zc(this.yt,t),s=function(i){if(!("targetChange"in i))return M.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?M.min():r.readTime?Mt(r.readTime):M.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=ti(this.yt),n.addTarget=function(i,r){let o;const a=r.target;return o=Ws(a)?{documents:Xc(i,a)}:{query:Yc(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Ma(i,r.resumeToken):r.snapshotVersion.compareTo(M.min())>0&&(o.readTime=Wn(i,r.snapshotVersion.toTimestamp())),o}(this.yt,t);const s=Zc(this.yt,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=ti(this.yt),n.removeTarget=t,this.Bo(n)}}class Oh extends Qa{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(et(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=Wc(t.writeResults,t.commitTime),s=Mt(t.commitTime);return this.listener.Zo(s,n)}return et(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=ti(this.yt),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Hc(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new N(p.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(p.UNKNOWN,i.toString())})}_o(t,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new N(p.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class Fh{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Qt(n),this.ou=!1):C("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{pe(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=F(a);u._u.add(4),await wn(u),u.gu.set("Unknown"),u._u.delete(4),await Es(u)}(this))})}),this.gu=new Fh(s,i)}}async function Es(e){if(pe(e))for(const t of e.wu)await t(!0)}async function wn(e){for(const t of e.wu)await t(!1)}function za(e,t){const n=F(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Pi(n)?Fi(n):Ve(n).ko()&&Mi(n,t))}function Ha(e,t){const n=F(e),s=Ve(n);n.du.delete(t),s.ko()&&Wa(n,t),n.du.size===0&&(s.ko()?s.Fo():pe(n)&&n.gu.set("Unknown"))}function Mi(e,t){e.yu.Ot(t.targetId),Ve(e).zo(t)}function Wa(e,t){e.yu.Ot(t),Ve(e).Ho(t)}function Fi(e){e.yu=new Uc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),Ve(e).start(),e.gu.uu()}function Pi(e){return pe(e)&&!Ve(e).No()&&e.du.size>0}function pe(e){return F(e)._u.size===0}function Xa(e){e.yu=void 0}async function Uh(e){e.du.forEach((t,n)=>{Mi(e,t)})}async function qh(e,t){Xa(e),Pi(e)?(e.gu.hu(t),Fi(e)):e.gu.set("Unknown")}async function Bh(e,t,n){if(e.gu.set("Online"),t instanceof Oa&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){C("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Xn(e,s)}else if(t instanceof Ln?e.yu.Kt(t):t instanceof Va?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(M.min()))try{const s=await Ka(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(u);l&&i.du.set(u,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken(At.EMPTY_BYTE_STRING,u.snapshotVersion)),Wa(i,a);const l=new he(u.target,a,1,u.sequenceNumber);Mi(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){C("RemoteStore","Failed to raise snapshot:",s),await Xn(e,s)}}async function Xn(e,t,n){if(!pn(t))throw t;e._u.add(1),await wn(e),e.gu.set("Offline"),n||(n=()=>Ka(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Es(e)})}function Ya(e,t){return t().catch(n=>Xn(e,n,t))}async function Ts(e){const t=F(e),n=se(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;jh(t);)try{const i=await bh(t.localStore,s);if(i===null){t.fu.length===0&&n.Fo();break}s=i.batchId,Kh(t,i)}catch(i){await Xn(t,i)}Ja(t)&&Za(t)}function jh(e){return pe(e)&&e.fu.length<10}function Kh(e,t){e.fu.push(t);const n=se(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Ja(e){return pe(e)&&!se(e).No()&&e.fu.length>0}function Za(e){se(e).start()}async function Gh(e){se(e).eu()}async function Qh(e){const t=se(e);for(const n of e.fu)t.Xo(n.mutations)}async function zh(e,t,n){const s=e.fu.shift(),i=Li.from(s,t,n);await Ya(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Ts(e)}async function Hh(e,t){t&&se(e).Yo&&await async function(n,s){if(i=s.code,Vc(i)&&i!==p.ABORTED){const r=n.fu.shift();se(n).Mo(),await Ya(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ts(n)}var i}(e,t),Ja(e)&&Za(e)}async function xr(e,t){const n=F(e);n.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const s=pe(n);n._u.add(3),await wn(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Es(n)}async function Wh(e,t){const n=F(e);t?(n._u.delete(2),await Es(n)):t||(n._u.add(2),await wn(n),n.gu.set("Unknown"))}function Ve(e){return e.pu||(e.pu=function(t,n,s){const i=F(t);return i.su(),new Vh(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(e.datastore,e.asyncQueue,{Yr:Uh.bind(null,e),Zr:qh.bind(null,e),Wo:Bh.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),Pi(e)?Fi(e):e.gu.set("Unknown")):(await e.pu.stop(),Xa(e))})),e.pu}function se(e){return e.Iu||(e.Iu=function(t,n,s){const i=F(t);return i.su(),new Oh(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(e.datastore,e.asyncQueue,{Yr:Gh.bind(null,e),Zr:Hh.bind(null,e),tu:Qh.bind(null,e),Zo:zh.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await Ts(e)):(await e.Iu.stop(),e.fu.length>0&&(C("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new Ui(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qi(e,t){if(Qt("AsyncQueue",`${t}: ${e}`),pn(e))return new N(p.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this.comparator=t?(n,s)=>t(n,s)||A.comparator(n.key,s.key):(n,s)=>A.comparator(n.key,s.key),this.keyedMap=Pe(),this.sortedSet=new pt(this.comparator)}static emptySet(t){return new Te(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Te)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Te;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.Tu=new pt(A.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):x():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Ae{constructor(t,n,s,i,r,o,a,u,l){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ae(t,n,Te.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ms(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.Au=void 0,this.listeners=[]}}class Yh{constructor(){this.queries=new xe(t=>wa(t),ms),this.onlineState="Unknown",this.Ru=new Set}}async function Jh(e,t){const n=F(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Xh),i)try{r.Au=await n.onListen(s)}catch(o){const a=qi(o,`Initialization of query '${Ys(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.bu(n.onlineState),r.Au&&t.Pu(r.Au)&&Bi(n)}async function Zh(e,t){const n=F(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function tf(e,t){const n=F(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&Bi(n)}function ef(e,t,n){const s=F(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function Bi(e){e.Ru.forEach(t=>{t.next()})}class nf{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Ae(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=Ae.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t){this.key=t}}class eu{constructor(t){this.key=t}}class sf{constructor(t,n){this.query=t,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=q(),this.mutatedKeys=q(),this.Gu=Ea(t),this.Qu=new Te(this.Gu)}get ju(){return this.qu}Wu(t,n){const s=n?n.zu:new Vr,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,h)=>{const f=i.get(c),g=$i(this.query,h)?h:null,d=!!f&&this.mutatedKeys.has(f.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;f&&g?f.data.isEqual(g.data)?d!==w&&(s.track({type:3,doc:g}),T=!0):this.Hu(f,g)||(s.track({type:2,doc:g}),T=!0,(u&&this.Gu(g,u)>0||l&&this.Gu(g,l)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),T=!0):f&&!g&&(s.track({type:1,doc:f}),T=!0,(u||l)&&(a=!0)),T&&(g?(o=o.add(g),r=w?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),s.track({type:1,doc:c})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const r=t.zu.Eu();r.sort((l,c)=>function(h,f){const g=d=>{switch(d){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return g(h)-g(f)}(l.type,c.type)||this.Gu(l.doc,c.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.Uu;return this.Uu=a,r.length!==0||u?{snapshot:new Ae(this.query,t.Qu,i,r,t.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Vr,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=q(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return t.forEach(s=>{this.Ku.has(s)||n.push(new eu(s))}),this.Ku.forEach(s=>{t.has(s)||n.push(new tu(s))}),n}tc(t){this.qu=t.Hi,this.Ku=q();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return Ae.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class rf{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class of{constructor(t){this.key=t,this.nc=!1}}class af{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new xe(a=>wa(a),ms),this.rc=new Map,this.oc=new Set,this.uc=new pt(A.comparator),this.cc=new Map,this.ac=new xi,this.hc={},this.lc=new Map,this.fc=be.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function uf(e,t){const n=vf(e);let s,i;const r=n.ic.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await Ah(n.localStore,zt(t));n.isPrimaryClient&&za(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await lf(n,t,s,a==="current",o.resumeToken)}return i}async function lf(e,t,n,s,i){e._c=(h,f,g)=>async function(d,w,T,U){let v=w.view.Wu(T);v.$i&&(v=await $r(d.localStore,w.query,!1).then(({documents:S})=>w.view.Wu(S,v)));const P=U&&U.targetChanges.get(w.targetId),B=w.view.applyChanges(v,d.isPrimaryClient,P);return Mr(d,w.targetId,B.Xu),B.snapshot}(e,h,f,g);const r=await $r(e.localStore,t,!0),o=new sf(t,r.Hi),a=o.Wu(r.documents),u=vn.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),l=o.applyChanges(a,e.isPrimaryClient,u);Mr(e,n,l.Xu);const c=new rf(t,n,o);return e.ic.set(t,c),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),l.snapshot}async function cf(e,t){const n=F(e),s=n.ic.get(t),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!ms(r,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ei(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ha(n.remoteStore,s.targetId),ni(n,s.targetId)}).catch(mn)):(ni(n,s.targetId),await ei(n.localStore,s.targetId,!0))}async function hf(e,t,n){const s=wf(e);try{const i=await function(r,o){const a=F(r),u=gt.now(),l=o.reduce((f,g)=>f.add(g.key),q());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Ht(),d=q();return a.Gi.getEntries(f,l).next(w=>{g=w,g.forEach((T,U)=>{U.isValidDocument()||(d=d.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(w=>{c=w;const T=[];for(const U of o){const v=Rc(U,c.get(U.key).overlayedDocument);v!=null&&T.push(new me(U.key,v,va(v.value.mapValue),Kt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,u,T,o)}).next(w=>{h=w;const T=w.applyToLocalDocumentSet(c,d);return a.documentOverlayCache.saveOverlays(f,w.batchId,T)})}).then(()=>({batchId:h.batchId,changes:Ra(c)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.hc[r.currentUser.toKey()];u||(u=new pt(Q)),u=u.insert(o,a),r.hc[r.currentUser.toKey()]=u}(s,i.batchId,n),await En(s,i.changes),await Ts(s.remoteStore)}catch(i){const r=qi(i,"Failed to persist write");n.reject(r)}}async function nu(e,t){const n=F(e);try{const s=await Ch(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(et(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?et(o.nc):i.removedDocuments.size>0&&(et(o.nc),o.nc=!1))}),await En(n,s,t)}catch(s){await mn(s)}}function Or(e,t,n){const s=F(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=F(r);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.bu(o)&&(u=!0)}),u&&Bi(a)}(s.eventManager,t),i.length&&s.sc.Wo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function ff(e,t,n){const s=F(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.cc.get(t),r=i&&i.key;if(r){let o=new pt(A.comparator);o=o.insert(r,St.newNoDocument(r,M.min()));const a=q().add(r),u=new vs(M.min(),new Map,new mt(Q),o,a);await nu(s,u),s.uc=s.uc.remove(r),s.cc.delete(t),ji(s)}else await ei(s.localStore,t,!1).then(()=>ni(s,t,n)).catch(mn)}async function df(e,t){const n=F(e),s=t.batch.batchId;try{const i=await Sh(n.localStore,t);iu(n,s,null),su(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await En(n,i)}catch(i){await mn(i)}}async function gf(e,t,n){const s=F(e);try{const i=await function(r,o){const a=F(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(et(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(s.localStore,t);iu(s,t,n),su(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await En(s,i)}catch(i){await mn(i)}}function su(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function iu(e,t,n){const s=F(e);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.hc[s.currentUser.toKey()]=i}}function ni(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.rc.get(t))e.ic.delete(s),n&&e.sc.wc(s,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(s=>{e.ac.containsKey(s)||ru(e,s)})}function ru(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(Ha(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),ji(e))}function Mr(e,t,n){for(const s of n)s instanceof tu?(e.ac.addReference(s.key,t),mf(e,s)):s instanceof eu?(C("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,t),e.ac.containsKey(s.key)||ru(e,s.key)):x()}function mf(e,t){const n=t.key,s=n.path.canonicalString();e.uc.get(n)||e.oc.has(s)||(C("SyncEngine","New document in limbo: "+n),e.oc.add(s),ji(e))}function ji(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new A(ut.fromString(t)),s=e.fc.next();e.cc.set(s,new of(n)),e.uc=e.uc.insert(n,s),za(e.remoteStore,new he(zt(Ni(n.path)),s,2,ki.at))}}async function En(e,t,n){const s=F(e),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,u)=>{o.push(s._c(u,t,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=Oi.Ci(u.targetId,l);r.push(c)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,u){const l=F(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>m.forEach(u,h=>m.forEach(h.Si,f=>l.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>m.forEach(h.Di,f=>l.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!pn(c))throw c;C("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const f=l.qi.get(h),g=f.snapshotVersion,d=f.withLastLimboFreeSnapshotVersion(g);l.qi=l.qi.insert(h,d)}}}(s.localStore,r))}async function pf(e,t){const n=F(e);if(!n.currentUser.isEqual(t)){C("SyncEngine","User change. New user:",t.toKey());const s=await ja(n.localStore,t);n.currentUser=t,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new N(p.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await En(n,s.ji)}}function yf(e,t){const n=F(e),s=n.cc.get(t);if(s&&s.nc)return q().add(s.key);{let i=q();const r=n.rc.get(t);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function vf(e){const t=F(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=nu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=yf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ff.bind(null,t),t.sc.Wo=tf.bind(null,t.eventManager),t.sc.wc=ef.bind(null,t.eventManager),t}function wf(e){const t=F(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=df.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=gf.bind(null,t),t}class Ef{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=ws(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return Ih(this.persistence,new Th,t.initialUser,this.yt)}yc(t){return new wh(Vi.Bs,this.yt)}gc(t){return new Nh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Tf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Or(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pf.bind(null,this.syncEngine),await Wh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Yh}createDatastore(t){const n=ws(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new xh(i));var i;return function(r,o,a,u){return new Mh(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Or(this.syncEngine,a,0),o=Lr.C()?new Lr:new $h,new Ph(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,u,l){const c=new af(s,i,r,o,a,u);return l&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=F(t);C("RemoteStore","RemoteStore shutting down."),n._u.add(5),await wn(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(e,t,n){if(!n)throw new N(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function If(e,t,n,s){if(t===!0&&s===!0)throw new N(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Fr(e){if(!A.isDocumentKey(e))throw new N(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ki(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":x()}function sn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new N(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ki(e);throw new N(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new Map;class Ur{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new N(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,If("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ur({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ur(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Gl;switch(n.type){case"gapi":const s=n.client;return new Wl(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Pr.get(t);n&&(C("ComponentProvider","Removing Datastore"),Pr.delete(t),n.terminate())}(this),Promise.resolve()}}function Sf(e,t,n,s={}){var i;const r=(e=sn(e,Gi))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&Qs("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=It.MOCK_USER;else{o=Du(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new N(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new It(u)}e._authCredentials=new Ql(new aa(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new xt(this.firestore,t,this._key)}}class Qi{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Qi(this.firestore,t,this._query)}}class rn extends Qi{constructor(t,n,s){super(t,n,Ni(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new xt(this.firestore,null,new A(t))}withConverter(t){return new rn(this.firestore,t,this._path)}}function ou(e,t,...n){if(e=On(e),arguments.length===1&&(t=ua.R()),_f("doc","path",t),e instanceof Gi){const s=ut.fromString(t,...n);return Fr(s),new xt(e,null,new A(s))}{if(!(e instanceof xt||e instanceof rn))throw new N(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(ut.fromString(t,...n));return Fr(s),new xt(e.firestore,e instanceof rn?e.converter:null,new A(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):Qt("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=ua.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{C("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(C("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=qi(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function bf(e,t){e.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await ja(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Af(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Df(e);C("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>xr(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>xr(t.remoteStore,r)),e.onlineComponents=t}async function Df(e){return e.offlineComponents||(C("FirestoreClient","Using default OfflineComponentProvider"),await bf(e,new Ef)),e.offlineComponents}async function au(e){return e.onlineComponents||(C("FirestoreClient","Using default OnlineComponentProvider"),await Af(e,new Tf)),e.onlineComponents}function Nf(e){return au(e).then(t=>t.syncEngine)}async function $f(e){const t=await au(e),n=t.eventManager;return n.onListen=uf.bind(null,t.syncEngine),n.onUnlisten=cf.bind(null,t.syncEngine),n}function Rf(e,t,n={}){const s=new Zt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const l=new Cf({next:h=>{r.enqueueAndForget(()=>Zh(i,c));const f=h.docs.has(o);!f&&h.fromCache?u.reject(new N(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?u.reject(new N(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new nf(Ni(o.path),l,{includeMetadataChanges:!0,Nu:!0});return Jh(i,c)}(await $f(e),e.asyncQueue,t,n,s)),s.promise}class Lf{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ga(this,"async_queue_retry"),this.Wc=()=>{const n=Ls();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=Ls();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=Ls();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Zt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!pn(t))throw t;C("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Qt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=Ui.createAndSchedule(this,t,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&x()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class zi extends Gi{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new Lf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lu(this),this._firestoreClient.terminate()}}function xf(e,t){const n=typeof e=="object"?e:ku(),s=typeof e=="string"?e:t||"(default)",i=bu(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Au("firestore");r&&Sf(i,...r)}return i}function uu(e){return e._firestoreClient||lu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function lu(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new rc(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new kf(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this._byteString=t}static fromBase64String(t){try{return new De(At.fromBase64String(t))}catch(n){throw new N(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new De(At.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new N(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new N(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new N(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Q(this._lat,t._lat)||Q(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=/^__.*__$/;class Of{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new me(t,this.data,this.fieldMask,n,this.fieldTransforms):new yn(t,this.data,n,this.fieldTransforms)}}function hu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class Xi{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Xi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:s,oa:!1});return i.ua(t),i}ca(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:s,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Yn(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(hu(this.sa)&&Vf.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Mf{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.yt=s||ws(t)}da(t,n,s,i=!1){return new Xi({sa:t,methodName:n,fa:s,path:Ct.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Ff(e){const t=e._freezeSettings(),n=ws(e._databaseId);return new Mf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Pf(e,t,n,s,i,r={}){const o=e.da(r.merge||r.mergeFields?2:0,t,n,i);mu("Data must be an object, but it was:",o,s);const a=du(s,o);let u,l;if(r.merge)u=new Ot(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const h of r.mergeFields){const f=Uf(t,h,n);if(!o.contains(f))throw new N(p.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Bf(c,f)||c.push(f)}u=new Ot(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new Of(new Lt(a),u,l)}function fu(e,t){if(gu(e=On(e)))return mu("Unsupported field value:",t,e),du(e,t);if(e instanceof cu)return function(n,s){if(!hu(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=fu(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=On(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return kc(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=gt.fromDate(n);return{timestampValue:Wn(s.yt,i)}}if(n instanceof gt){const i=new gt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Wn(s.yt,i)}}if(n instanceof Wi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof De)return{bytesValue:Ma(s.yt,n._byteString)};if(n instanceof xt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ri(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Ki(n)}`)}(e,t)}function du(e,t){const n={};return la(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Le(e,(s,i)=>{const r=fu(i,t.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function gu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof gt||e instanceof Wi||e instanceof De||e instanceof xt||e instanceof cu)}function mu(e,t,n){if(!gu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ki(n);throw s==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+s)}}function Uf(e,t,n){if((t=On(t))instanceof Hi)return t._internalPath;if(typeof t=="string")return pu(e,t);throw Yn("Field path arguments must be of type string or ",e,!1,void 0,n)}const qf=new RegExp("[~\\*/\\[\\]]");function pu(e,t,n){if(t.search(qf)>=0)throw Yn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Hi(...t.split("."))._internalPath}catch{throw Yn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Yn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new N(p.INVALID_ARGUMENT,a+e+u)}function Bf(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new jf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(vu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jf extends yu{data(){return super.data()}}function vu(e,t){return typeof t=="string"?pu(e,t):t instanceof Hi?t._internalPath:t._delegate._internalPath}class Kf{convertValue(t,n="none"){switch(de(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ht(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Se(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw x()}}convertObject(t,n){const s={};return Le(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Wi(ht(t.latitude),ht(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=ha(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ze(t));default:return null}}convertTimestamp(t){const n=ne(t);return new gt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=ut.fromString(t);et(Ba(s));const i=new Je(s.get(1),s.get(3)),r=new A(s.popFirst(5));return i.isEqual(n)||Qt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class wu extends yu{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new zf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(vu("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class zf extends wu{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(e){e=sn(e,xt);const t=sn(e.firestore,zi);return Rf(uu(t),e._key).then(n=>Jf(t,e,n))}class Wf extends Kf{constructor(t){super(),this.firestore=t}convertBytes(t){return new De(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function Xf(e,t,n){e=sn(e,xt);const s=sn(e.firestore,zi),i=Gf(e.converter,t,n);return Yf(s,[Pf(Ff(s),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Kt.none())])}function Yf(e,t){return function(n,s){const i=new Zt;return n.asyncQueue.enqueueAndForget(async()=>hf(await Nf(n),s,i)),i.promise}(uu(e),t)}function Jf(e,t,n){const s=n.docs.get(t._key),i=new Wf(e);return new wu(e,i,t._key,s,new Qf(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Re=n})(Nu),Iu(new Su("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new zi(new zl(n.getProvider("auth-internal")),new Yl(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new N(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Je(a.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ji(fr,"3.8.0",e),Ji(fr,"3.8.0","esm2017")})();const Eu=xf(),Zf=async e=>{try{return await Xf(ou(Eu,"hotels",e.slug),{...e}),!0}catch(t){console.log(t)}},td=e=>new Promise((t,n)=>{try{Hf(ou(Eu,"hotels",e)).then(s=>{s.exists()&&t(!0),t(!1)})}catch(s){console.log(s),n(s)}});function qr(e,t,n){const s=e.slice();return s[34]=t[n],s[35]=t,s[36]=n,s}function Br(e,t,n){const s=e.slice();return s[37]=t[n],s[38]=t,s[39]=n,s}function ed(e){let t,n;return t=new Ru({}),{c(){z(t.$$.fragment)},l(s){H(t.$$.fragment,s)},m(s,i){W(t,s,i),n=!0},p:xs,i(s){n||(b(t.$$.fragment,s),n=!0)},o(s){R(t.$$.fragment,s),n=!1},d(s){X(t,s)}}}function nd(e){let t,n,s,i;return t=new Lu({}),s=new xu({props:{className:"mt-24",$$slots:{default:[gd]},$$scope:{ctx:e}}}),{c(){z(t.$$.fragment),n=Z(),z(s.$$.fragment)},l(r){H(t.$$.fragment,r),n=tt(r),H(s.$$.fragment,r)},m(r,o){W(t,r,o),ft(r,n,o),W(s,r,o),i=!0},p(r,o){const a={};o[0]&27|o[1]&512&&(a.$$scope={dirty:o,ctx:r}),s.$set(a)},i(r){i||(b(t.$$.fragment,r),b(s.$$.fragment,r),i=!0)},o(r){R(t.$$.fragment,r),R(s.$$.fragment,r),i=!1},d(r){X(t,r),r&&O(n),X(s,r)}}}function sd(e){let t,n,s,i,r,o,a,u,l,c,h,f,g,d,w,T,U,v;function P(E){e[29](E)}let B={maxLength:20,label:"Choose custom url:",trailingAddon:"m.saklani.dev/",placeholder:"",error:e[0]};e[3].slug!==void 0&&(B.value=e[3].slug),s=new Jt({props:B}),qt.push(()=>Bt(s,"value",P)),s.$on("change",e[30]);let S=e[0]&&jr();a=new so({props:{label:"Select theme",options:[{id:1,value:"Minimal"}]}});function D(E){e[31](E)}let y={squareSize:400};return e[3].slug!==void 0&&(y.codeValue=e[3].slug),d=new Bu({props:y}),qt.push(()=>Bt(d,"codeValue",D)),U=new te({props:{label:"Proceed",className:"w-32 px-6 mx-auto mt-10",primary:!0,disabled:!e[3].slug.trim(),$$slots:{default:[od]},$$scope:{ctx:e}}}),U.$on("click",e[32]),{c(){t=it("div"),n=it("div"),z(s.$$.fragment),r=Z(),S&&S.c(),o=Z(),z(a.$$.fragment),u=Z(),l=it("div"),c=it("div"),h=Nt("Preview:"),f=Z(),g=it("div"),z(d.$$.fragment),T=Z(),z(U.$$.fragment),this.h()},l(E){t=rt(E,"DIV",{class:!0});var Y=ot(t);n=rt(Y,"DIV",{class:!0});var V=ot(n);H(s.$$.fragment,V),r=tt(V),S&&S.l(V),V.forEach(O),o=tt(Y),H(a.$$.fragment,Y),u=tt(Y),l=rt(Y,"DIV",{class:!0});var I=ot(l);c=rt(I,"DIV",{class:!0});var J=ot(c);h=$t(J,"Preview:"),J.forEach(O),f=tt(I),g=rt(I,"DIV",{class:!0});var K=ot(g);H(d.$$.fragment,K),K.forEach(O),I.forEach(O),T=tt(Y),H(U.$$.fragment,Y),Y.forEach(O),this.h()},h(){nt(n,"class",""),nt(c,"class","text-[12px] md:text-xs font-semibold text-light-2 mb-1.5"),nt(g,"class","qrcode w-full bg-white rounded-md flex items-center justify-center p-6"),nt(l,"class",""),nt(t,"class","flex flex-col w-full gap-6 mt-14")},m(E,Y){ft(E,t,Y),$(t,n),W(s,n,null),$(n,r),S&&S.m(n,null),$(t,o),W(a,t,null),$(t,u),$(t,l),$(l,c),$(c,h),$(l,f),$(l,g),W(d,g,null),$(t,T),W(U,t,null),v=!0},p(E,Y){const V={};Y[0]&1&&(V.error=E[0]),!i&&Y[0]&8&&(i=!0,V.value=E[3].slug,jt(()=>i=!1)),s.$set(V),E[0]?S||(S=jr(),S.c(),S.m(n,null)):S&&(S.d(1),S=null);const I={};!w&&Y[0]&8&&(w=!0,I.codeValue=E[3].slug,jt(()=>w=!1)),d.$set(I);const J={};Y[0]&8&&(J.disabled=!E[3].slug.trim()),Y[1]&512&&(J.$$scope={dirty:Y,ctx:E}),U.$set(J)},i(E){v||(b(s.$$.fragment,E),b(a.$$.fragment,E),b(d.$$.fragment,E),b(U.$$.fragment,E),v=!0)},o(E){R(s.$$.fragment,E),R(a.$$.fragment,E),R(d.$$.fragment,E),R(U.$$.fragment,E),v=!1},d(E){E&&O(t),X(s),S&&S.d(),X(a),X(d),X(U)}}}function id(e){var U;let t,n,s,i,r,o,a,u,l,c,h,f;n=new so({props:{value:e[3].currency||"INR",label:"Currency",id:"currency",options:[{id:0,value:"INR"},{id:1,value:"USD"}]}}),n.$on("change",e[17]);let g=e[3].menu,d=[];for(let v=0;v<g.length;v+=1)d[v]=Hr(qr(e,g,v));const w=v=>R(d[v],1,1,()=>{d[v]=null});let T=((U=e[3].menu)==null?void 0:U.length)===0&&Wr(e);return h=new te({props:{label:"Proceed",className:"w-32 px-6 mx-auto mt-10",primary:!0,$$slots:{default:[hd]},$$scope:{ctx:e}}}),h.$on("click",e[28]),{c(){t=it("div"),z(n.$$.fragment),s=Z(),i=it("div"),r=it("div"),o=Nt("Menu:"),a=Z(),u=it("div");for(let v=0;v<d.length;v+=1)d[v].c();l=Z(),T&&T.c(),c=Z(),z(h.$$.fragment),this.h()},l(v){t=rt(v,"DIV",{class:!0});var P=ot(t);H(n.$$.fragment,P),s=tt(P),i=rt(P,"DIV",{class:!0});var B=ot(i);r=rt(B,"DIV",{class:!0});var S=ot(r);o=$t(S,"Menu:"),S.forEach(O),a=tt(B),u=rt(B,"DIV",{class:!0});var D=ot(u);for(let y=0;y<d.length;y+=1)d[y].l(D);l=tt(D),T&&T.l(D),D.forEach(O),B.forEach(O),c=tt(P),H(h.$$.fragment,P),P.forEach(O),this.h()},h(){nt(r,"class","text-[12px] font-semibold text-light-2 mb-1.5"),nt(u,"class","grid mt-1"),nt(i,"class","mt-4"),nt(t,"class","flex flex-col w-full gap-6 mt-14")},m(v,P){ft(v,t,P),W(n,t,null),$(t,s),$(t,i),$(i,r),$(r,o),$(i,a),$(i,u);for(let B=0;B<d.length;B+=1)d[B].m(u,null);$(u,l),T&&T.m(u,null),$(t,c),W(h,t,null),f=!0},p(v,P){var D;const B={};if(P[0]&8&&(B.value=v[3].currency||"INR"),n.$set(B),P[0]&72){g=v[3].menu;let y;for(y=0;y<g.length;y+=1){const E=qr(v,g,y);d[y]?(d[y].p(E,P),b(d[y],1)):(d[y]=Hr(E),d[y].c(),b(d[y],1),d[y].m(u,l))}for(Yt(),y=g.length;y<d.length;y+=1)w(y);Xt()}((D=v[3].menu)==null?void 0:D.length)===0?T?(T.p(v,P),P[0]&8&&b(T,1)):(T=Wr(v),T.c(),b(T,1),T.m(u,null)):T&&(Yt(),R(T,1,1,()=>{T=null}),Xt());const S={};P[1]&512&&(S.$$scope={dirty:P,ctx:v}),h.$set(S)},i(v){if(!f){b(n.$$.fragment,v);for(let P=0;P<g.length;P+=1)b(d[P]);b(T),b(h.$$.fragment,v),f=!0}},o(v){R(n.$$.fragment,v),d=d.filter(Boolean);for(let P=0;P<d.length;P+=1)R(d[P]);R(T),R(h.$$.fragment,v),f=!1},d(v){v&&O(t),X(n),to(d,v),T&&T.d(),X(h)}}}function rd(e){let t,n,s,i,r,o,a,u,l,c,h,f,g,d,w;function T(D){e[11](D)}let U={label:"Registered hotel name:",placeholder:"hotel name here ..."};e[3].hotel.name!==void 0&&(U.value=e[3].hotel.name),n=new Jt({props:U}),qt.push(()=>Bt(n,"value",T)),n.$on("change",e[12]);function v(D){e[13](D)}let P={label:"Hotel tagline:",placeholder:"tagline here ..."};e[3].hotel.tagline!==void 0&&(P.value=e[3].hotel.tagline),r=new Jt({props:P}),qt.push(()=>Bt(r,"value",v));function B(D){e[14](D)}let S={label:"Address:",placeholder:"Address here ..."};return e[3].hotel.address!==void 0&&(S.value=e[3].hotel.address),u=new Jt({props:S}),qt.push(()=>Bt(u,"value",B)),f=new te({props:{disabled:!e[3].hotel.name.trim()||!e[3].hotel.tagline.trim()||!e[3].hotel.address.trim(),label:"Proceed",className:"w-32 px-6",primary:!0,$$slots:{default:[fd]},$$scope:{ctx:e}}}),f.$on("click",e[15]),d=new te({props:{label:"Cancel",className:"w-32 px-6",$$slots:{default:[dd]},$$scope:{ctx:e}}}),d.$on("click",e[16]),{c(){t=it("div"),z(n.$$.fragment),i=Z(),z(r.$$.fragment),a=Z(),z(u.$$.fragment),c=Z(),h=it("div"),z(f.$$.fragment),g=Z(),z(d.$$.fragment),this.h()},l(D){t=rt(D,"DIV",{class:!0});var y=ot(t);H(n.$$.fragment,y),i=tt(y),H(r.$$.fragment,y),a=tt(y),H(u.$$.fragment,y),c=tt(y),h=rt(y,"DIV",{class:!0});var E=ot(h);H(f.$$.fragment,E),g=tt(E),H(d.$$.fragment,E),E.forEach(O),y.forEach(O),this.h()},h(){nt(h,"class","flex items-center justify-center flex-col gap-6 mt-10"),nt(t,"class","flex flex-col items-center justify-center gap-6 mt-14")},m(D,y){ft(D,t,y),W(n,t,null),$(t,i),W(r,t,null),$(t,a),W(u,t,null),$(t,c),$(t,h),W(f,h,null),$(h,g),W(d,h,null),w=!0},p(D,y){const E={};!s&&y[0]&8&&(s=!0,E.value=D[3].hotel.name,jt(()=>s=!1)),n.$set(E);const Y={};!o&&y[0]&8&&(o=!0,Y.value=D[3].hotel.tagline,jt(()=>o=!1)),r.$set(Y);const V={};!l&&y[0]&8&&(l=!0,V.value=D[3].hotel.address,jt(()=>l=!1)),u.$set(V);const I={};y[0]&8&&(I.disabled=!D[3].hotel.name.trim()||!D[3].hotel.tagline.trim()||!D[3].hotel.address.trim()),y[1]&512&&(I.$$scope={dirty:y,ctx:D}),f.$set(I);const J={};y[1]&512&&(J.$$scope={dirty:y,ctx:D}),d.$set(J)},i(D){w||(b(n.$$.fragment,D),b(r.$$.fragment,D),b(u.$$.fragment,D),b(f.$$.fragment,D),b(d.$$.fragment,D),w=!0)},o(D){R(n.$$.fragment,D),R(r.$$.fragment,D),R(u.$$.fragment,D),R(f.$$.fragment,D),R(d.$$.fragment,D),w=!1},d(D){D&&O(t),X(n),X(r),X(u),X(f),X(d)}}}function jr(e){let t,n;return{c(){t=it("div"),n=Nt("Slug is already taken"),this.h()},l(s){t=rt(s,"DIV",{class:!0});var i=ot(t);n=$t(i,"Slug is already taken"),i.forEach(O),this.h()},h(){nt(t,"class","text-red-500 text-sm mt-1")},m(s,i){ft(s,t,i),$(t,n)},d(s){s&&O(t)}}}function od(e){let t,n,s;return n=new si({}),{c(){t=Nt("Proceed "),z(n.$$.fragment)},l(i){t=$t(i,"Proceed "),H(n.$$.fragment,i)},m(i,r){ft(i,t,r),W(n,i,r),s=!0},i(i){s||(b(n.$$.fragment,i),s=!0)},o(i){R(n.$$.fragment,i),s=!1},d(i){i&&O(t),X(n,i)}}}function Kr(e){let t,n;function s(){return e[24](e[36])}return t=new te({props:{label:"Add new item",className:"rounded-[7px] w-fit mt-5",$$slots:{default:[ad]},$$scope:{ctx:e}}}),t.$on("click",s),{c(){z(t.$$.fragment)},l(i){H(t.$$.fragment,i)},m(i,r){W(t,i,r),n=!0},p(i,r){e=i;const o={};r[1]&512&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(i){n||(b(t.$$.fragment,i),n=!0)},o(i){R(t.$$.fragment,i),n=!1},d(i){X(t,i)}}}function ad(e){let t;return{c(){t=Nt("+")},l(n){t=$t(n,"+")},m(n,s){ft(n,t,s)},d(n){n&&O(t)}}}function Gr(e){var J;let t,n,s,i,r,o,a,u,l,c,h,f,g,d,w,T,U,v,P;function B(K){e[20](K,e[36],e[39])}let S={placeholder:"Item name"};e[3].menu[e[36]].items[e[39]].name!==void 0&&(S.value=e[3].menu[e[36]].items[e[39]].name),r=new Jt({props:S}),qt.push(()=>Bt(r,"value",B));function D(K){e[21](K,e[36],e[39])}let y={placeholder:"Description"};e[3].menu[e[36]].items[e[39]].description!==void 0&&(y.value=e[3].menu[e[36]].items[e[39]].description),u=new Jt({props:y}),qt.push(()=>Bt(u,"value",D));function E(K){e[22](K,e[36],e[39])}let Y={placeholder:"Price"};e[3].menu[e[36]].items[e[39]].price!==void 0&&(Y.value=e[3].menu[e[36]].items[e[39]].price),h=new Jt({props:Y}),qt.push(()=>Bt(h,"value",E)),w=new no({props:{className:"w-2 h-2 !stroke-light-2"}});function V(){return e[23](e[36],e[39])}let I=((J=e[3].menu[e[36]].items)==null?void 0:J.length)-1===e[39]&&Kr(e);return{c(){t=it("div"),n=it("div"),s=it("div"),i=Z(),z(r.$$.fragment),a=Z(),z(u.$$.fragment),c=Z(),z(h.$$.fragment),g=Z(),d=it("button"),z(w.$$.fragment),T=Z(),I&&I.c(),this.h()},l(K){t=rt(K,"DIV",{class:!0});var j=ot(t);n=rt(j,"DIV",{class:!0});var at=ot(n);s=rt(at,"DIV",{class:!0}),ot(s).forEach(O),i=tt(at),H(r.$$.fragment,at),a=tt(at),H(u.$$.fragment,at),c=tt(at),H(h.$$.fragment,at),g=tt(at),d=rt(at,"BUTTON",{class:!0});var oe=ot(d);H(w.$$.fragment,oe),oe.forEach(O),at.forEach(O),T=tt(j),I&&I.l(j),j.forEach(O),this.h()},h(){nt(s,"class","w-5 h-px bg-light-4/40 absolute -left-5 top-5 -translate-y-1/2"),nt(d,"class","absolute -top-2 -right-2 bg-dark-focus p-1.5 rounded border border-gray-600"),nt(n,"class","relative py-4 border rounded-md border-dashed border-light-4/50 grid gap-4 px-4"),nt(t,"class","")},m(K,j){ft(K,t,j),$(t,n),$(n,s),$(n,i),W(r,n,null),$(n,a),W(u,n,null),$(n,c),W(h,n,null),$(n,g),$(n,d),W(w,d,null),$(t,T),I&&I.m(t,null),U=!0,v||(P=[Vn(d,"click",V),Vn(d,"keypress",e[8])],v=!0)},p(K,j){var _n;e=K;const at={};!o&&j[0]&8&&(o=!0,at.value=e[3].menu[e[36]].items[e[39]].name,jt(()=>o=!1)),r.$set(at);const oe={};!l&&j[0]&8&&(l=!0,oe.value=e[3].menu[e[36]].items[e[39]].description,jt(()=>l=!1)),u.$set(oe);const Tn={};!f&&j[0]&8&&(f=!0,Tn.value=e[3].menu[e[36]].items[e[39]].price,jt(()=>f=!1)),h.$set(Tn),((_n=e[3].menu[e[36]].items)==null?void 0:_n.length)-1===e[39]?I?(I.p(e,j),j[0]&8&&b(I,1)):(I=Kr(e),I.c(),b(I,1),I.m(t,null)):I&&(Yt(),R(I,1,1,()=>{I=null}),Xt())},i(K){U||(b(r.$$.fragment,K),b(u.$$.fragment,K),b(h.$$.fragment,K),b(w.$$.fragment,K),b(I),U=!0)},o(K){R(r.$$.fragment,K),R(u.$$.fragment,K),R(h.$$.fragment,K),R(w.$$.fragment,K),R(I),U=!1},d(K){K&&O(t),X(r),X(u),X(h),X(w),I&&I.d(),v=!1,eo(P)}}}function Qr(e){let t,n;function s(){return e[25](e[36])}return t=new te({props:{label:"Add new item",className:"rounded-[7px] w-fit",$$slots:{default:[ud]},$$scope:{ctx:e}}}),t.$on("click",s),{c(){z(t.$$.fragment)},l(i){H(t.$$.fragment,i)},m(i,r){W(t,i,r),n=!0},p(i,r){e=i;const o={};r[1]&512&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(i){n||(b(t.$$.fragment,i),n=!0)},o(i){R(t.$$.fragment,i),n=!1},d(i){X(t,i)}}}function ud(e){let t;return{c(){t=Nt("+")},l(n){t=$t(n,"+")},m(n,s){ft(n,t,s)},d(n){n&&O(t)}}}function zr(e){let t,n;return t=new te({props:{label:"Add new category",className:"rounded-[7px] w-fit mt-6",$$slots:{default:[ld]},$$scope:{ctx:e}}}),t.$on("click",e[26]),{c(){z(t.$$.fragment)},l(s){H(t.$$.fragment,s)},m(s,i){W(t,s,i),n=!0},p(s,i){const r={};i[1]&512&&(r.$$scope={dirty:i,ctx:s}),t.$set(r)},i(s){n||(b(t.$$.fragment,s),n=!0)},o(s){R(t.$$.fragment,s),n=!1},d(s){X(t,s)}}}function ld(e){let t;return{c(){t=Nt("+")},l(n){t=$t(n,"+")},m(n,s){ft(n,t,s)},d(n){n&&O(t)}}}function Hr(e){var Y;let t,n,s,i,r,o,a,u,l,c,h,f,g,d,w,T;function U(V){e[18](V,e[34])}let v={placeholder:"Category name",className:"!w-full"};e[34].category!==void 0&&(v.value=e[34].category),r=new Jt({props:v}),qt.push(()=>Bt(r,"value",U)),l=new no({props:{className:"w-2 h-2 !stroke-light-2"}});function P(){return e[19](e[36])}let B=e[34].items,S=[];for(let V=0;V<B.length;V+=1)S[V]=Gr(Br(e,B,V));const D=V=>R(S[V],1,1,()=>{S[V]=null});let y=e[34].items.length===0&&Qr(e),E=((Y=e[3].menu)==null?void 0:Y.length)-1===e[36]&&zr(e);return{c(){t=it("div"),n=it("div"),s=it("div"),i=Z(),z(r.$$.fragment),a=Z(),u=it("button"),z(l.$$.fragment),c=Z(),h=it("div");for(let V=0;V<S.length;V+=1)S[V].c();f=Z(),y&&y.c(),g=Z(),E&&E.c(),this.h()},l(V){t=rt(V,"DIV",{class:!0});var I=ot(t);n=rt(I,"DIV",{class:!0});var J=ot(n);s=rt(J,"DIV",{class:!0}),ot(s).forEach(O),i=tt(J),H(r.$$.fragment,J),a=tt(J),u=rt(J,"BUTTON",{class:!0});var K=ot(u);H(l.$$.fragment,K),K.forEach(O),J.forEach(O),c=tt(I),h=rt(I,"DIV",{class:!0});var j=ot(h);for(let at=0;at<S.length;at+=1)S[at].l(j);f=tt(j),y&&y.l(j),j.forEach(O),g=tt(I),E&&E.l(I),I.forEach(O),this.h()},h(){nt(s,"class","w-5 h-px bg-light-4/40 absolute -left-5 top-1/2 -translate-y-1/2"),nt(u,"class","absolute -top-2 -right-2 bg-dark-focus p-1.5 rounded border border-gray-600"),nt(n,"class","relative "+(e[36]!==0&&"mt-8")),nt(h,"class","ml-4 pl-5 pt-6 border-l border-light-4/40 grid gap-6"),nt(t,"class","ml-4 border-l border-light-4/40 pl-5")},m(V,I){ft(V,t,I),$(t,n),$(n,s),$(n,i),W(r,n,null),$(n,a),$(n,u),W(l,u,null),$(t,c),$(t,h);for(let J=0;J<S.length;J+=1)S[J].m(h,null);$(h,f),y&&y.m(h,null),$(t,g),E&&E.m(t,null),d=!0,w||(T=[Vn(u,"click",P),Vn(u,"keypress",e[9])],w=!0)},p(V,I){var K;e=V;const J={};if(!o&&I[0]&8&&(o=!0,J.value=e[34].category,jt(()=>o=!1)),r.$set(J),I[0]&72){B=e[34].items;let j;for(j=0;j<B.length;j+=1){const at=Br(e,B,j);S[j]?(S[j].p(at,I),b(S[j],1)):(S[j]=Gr(at),S[j].c(),b(S[j],1),S[j].m(h,f))}for(Yt(),j=B.length;j<S.length;j+=1)D(j);Xt()}e[34].items.length===0?y?(y.p(e,I),I[0]&8&&b(y,1)):(y=Qr(e),y.c(),b(y,1),y.m(h,null)):y&&(Yt(),R(y,1,1,()=>{y=null}),Xt()),((K=e[3].menu)==null?void 0:K.length)-1===e[36]?E?(E.p(e,I),I[0]&8&&b(E,1)):(E=zr(e),E.c(),b(E,1),E.m(t,null)):E&&(Yt(),R(E,1,1,()=>{E=null}),Xt())},i(V){if(!d){b(r.$$.fragment,V),b(l.$$.fragment,V);for(let I=0;I<B.length;I+=1)b(S[I]);b(y),b(E),d=!0}},o(V){R(r.$$.fragment,V),R(l.$$.fragment,V),S=S.filter(Boolean);for(let I=0;I<S.length;I+=1)R(S[I]);R(y),R(E),d=!1},d(V){V&&O(t),X(r),X(l),to(S,V),y&&y.d(),E&&E.d(),w=!1,eo(T)}}}function Wr(e){let t,n;return t=new te({props:{label:"Add new category",className:"rounded-[7px] w-fit mt-0.5",$$slots:{default:[cd]},$$scope:{ctx:e}}}),t.$on("click",e[27]),{c(){z(t.$$.fragment)},l(s){H(t.$$.fragment,s)},m(s,i){W(t,s,i),n=!0},p(s,i){const r={};i[1]&512&&(r.$$scope={dirty:i,ctx:s}),t.$set(r)},i(s){n||(b(t.$$.fragment,s),n=!0)},o(s){R(t.$$.fragment,s),n=!1},d(s){X(t,s)}}}function cd(e){let t;return{c(){t=Nt("New Category +")},l(n){t=$t(n,"New Category +")},m(n,s){ft(n,t,s)},d(n){n&&O(t)}}}function hd(e){let t,n,s;return n=new si({}),{c(){t=Nt("Proceed "),z(n.$$.fragment)},l(i){t=$t(i,"Proceed "),H(n.$$.fragment,i)},m(i,r){ft(i,t,r),W(n,i,r),s=!0},i(i){s||(b(n.$$.fragment,i),s=!0)},o(i){R(n.$$.fragment,i),s=!1},d(i){i&&O(t),X(n,i)}}}function fd(e){let t,n,s;return n=new si({}),{c(){t=Nt("Proceed "),z(n.$$.fragment)},l(i){t=$t(i,"Proceed "),H(n.$$.fragment,i)},m(i,r){ft(i,t,r),W(n,i,r),s=!0},i(i){s||(b(n.$$.fragment,i),s=!0)},o(i){R(n.$$.fragment,i),s=!1},d(i){i&&O(t),X(n,i)}}}function dd(e){let t;return{c(){t=Nt("Cancel")},l(n){t=$t(n,"Cancel")},m(n,s){ft(n,t,s)},d(n){n&&O(t)}}}function gd(e){let t,n,s,i,r,o,a,u;t=new Vu({props:{step:e[1]}}),s=new Ou({props:{className:"mt-12"}}),s.$on("click",e[10]);const l=[rd,id,sd],c=[];function h(f,g){return f[1]===1?0:f[1]===2?1:f[1]===3?2:-1}return~(r=h(e))&&(o=c[r]=l[r](e)),{c(){z(t.$$.fragment),n=Z(),z(s.$$.fragment),i=Z(),o&&o.c(),a=xn()},l(f){H(t.$$.fragment,f),n=tt(f),H(s.$$.fragment,f),i=tt(f),o&&o.l(f),a=xn()},m(f,g){W(t,f,g),ft(f,n,g),W(s,f,g),ft(f,i,g),~r&&c[r].m(f,g),ft(f,a,g),u=!0},p(f,g){const d={};g[0]&2&&(d.step=f[1]),t.$set(d);let w=r;r=h(f),r===w?~r&&c[r].p(f,g):(o&&(Yt(),R(c[w],1,1,()=>{c[w]=null}),Xt()),~r?(o=c[r],o?o.p(f,g):(o=c[r]=l[r](f),o.c()),b(o,1),o.m(a.parentNode,a)):o=null)},i(f){u||(b(t.$$.fragment,f),b(s.$$.fragment,f),b(o),u=!0)},o(f){R(t.$$.fragment,f),R(s.$$.fragment,f),R(o),u=!1},d(f){X(t,f),f&&O(n),X(s,f),f&&O(i),~r&&c[r].d(f),f&&O(a)}}}function md(e){let t,n,s,i;const r=[nd,ed],o=[];function a(u,l){return u[2]?0:1}return t=a(e),n=o[t]=r[t](e),{c(){n.c(),s=xn()},l(u){n.l(u),s=xn()},m(u,l){o[t].m(u,l),ft(u,s,l),i=!0},p(u,l){let c=t;t=a(u),t===c?o[t].p(u,l):(Yt(),R(o[c],1,1,()=>{o[c]=null}),Xt(),n=o[t],n?n.p(u,l):(n=o[t]=r[t](u),n.c()),b(n,1),n.m(s.parentNode,s))},i(u){i||(b(n),i=!0)},o(u){R(n),i=!1},d(u){o[t].d(u),u&&O(s)}}}function pd(e,t,n){let s,i,r,o;In(e,Mu,k=>n(2,s=k)),In(e,Sn,k=>n(33,r=k)),In(e,Fu,k=>n(4,o=k));const a={hotel:{name:"",tagline:"",address:""},author:"",slug:"",currency:"INR",menu:[{category:"",items:[{name:"",description:"",price:""}]}]};Sn.set(!0);let u=!1;const l=Pu({...a});In(e,l,k=>n(3,i=k));let c=1;Zr(()=>{const k=o.url.searchParams.get("_id");console.log({id:k}),localStorage.getItem("pending-data")&&l.set(JSON.parse(localStorage.getItem("pending-data")||"{}")),l.subscribe(yt=>localStorage["pending-data"]=JSON.stringify(yt)),Sn.set(!1)});const h=async()=>{_s(Sn,r=!0,r),await Zf({...i,author:s.uid}),Is("/dashboard")};function f(k){Yi.call(this,e,k)}function g(k){Yi.call(this,e,k)}const d=()=>{c===1?Is("/dashboard"):n(1,c-=1)};function w(k){e.$$.not_equal(i.hotel.name,k)&&(i.hotel.name=k,l.set(i))}const T=()=>_s(l,i.slug=i.hotel.name.trim().replace(/\s+/g,"-").toLowerCase(),i);function U(k){e.$$.not_equal(i.hotel.tagline,k)&&(i.hotel.tagline=k,l.set(i))}function v(k){e.$$.not_equal(i.hotel.address,k)&&(i.hotel.address=k,l.set(i))}const P=()=>{n(1,c++,c)},B=()=>{l.set(a),Is("/dashboard")},S=k=>{var yt;_s(l,i.currency=((yt=k.target)==null?void 0:yt.value)||"INR",i)};function D(k,yt){e.$$.not_equal(yt.category,k)&&(yt.category=k,l.set(i))}const y=k=>{i.menu.splice(k,1),l.set(i)};function E(k,yt,Wt){e.$$.not_equal(i.menu[yt].items[Wt].name,k)&&(i.menu[yt].items[Wt].name=k,l.set(i))}function Y(k,yt,Wt){e.$$.not_equal(i.menu[yt].items[Wt].description,k)&&(i.menu[yt].items[Wt].description=k,l.set(i))}function V(k,yt,Wt){e.$$.not_equal(i.menu[yt].items[Wt].price,k)&&(i.menu[yt].items[Wt].price=k,l.set(i))}const I=(k,yt)=>{i.menu[k].items.splice(yt,1),l.set(i)},J=k=>{i.menu[k].items.push({name:"",description:"",price:""}),l.set(i)},K=k=>{i.menu[k].items.push({name:"",description:"",price:""}),l.set(i)},j=()=>{i.menu.push({category:"",items:[{name:"",description:"",price:""}]}),l.set(i)},at=()=>{i.menu.push({category:"",items:[{name:"",description:"",price:""}]}),l.set(i)},oe=()=>{n(1,c++,c)};function Tn(k){e.$$.not_equal(i.slug,k)&&(i.slug=k,l.set(i))}const _n=()=>{o.url.searchParams.get("_id")||td(i.slug).then(k=>n(0,u=k))};function Tu(k){e.$$.not_equal(i.slug,k)&&(i.slug=k,l.set(i))}return[u,c,s,i,o,a,l,h,f,g,d,w,T,U,v,P,B,S,D,y,E,Y,V,I,J,K,j,at,oe,Tn,_n,Tu,()=>{h()}]}class Ad extends Xr{constructor(t){super(),Yr(this,t,pd,md,Jr,{},null,[-1,-1])}}export{Ad as default};
