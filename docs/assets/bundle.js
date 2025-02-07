var $e=Object.defineProperty;var Ee=(e,t,n)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var q=(e,t,n)=>(Ee(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function x(){}function ve(e){return e()}function se(){return Object.create(null)}function N(e){e.forEach(ve)}function U(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let k;function re(e,t){return e===t?!0:(k||(k=document.createElement("a")),k.href=t,e===k.href)}function Ie(e){return Object.keys(e).length===0}function be(e,...t){if(e==null){for(const s of t)s(void 0);return x}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ae(e,t,n){e.$$.on_destroy.push(be(t,n))}function oe(e,t,n){return e.set(n),t}const Ce=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function $(e,t){e.appendChild(t)}function D(e,t,n){e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function I(e){return document.createElement(e)}function Me(e){return document.createTextNode(e)}function A(){return Me(" ")}function Ae(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Te(e){return Array.from(e.childNodes)}let O;function B(e){O=e}function Pe(){if(!O)throw new Error("Function called outside component initialization");return O}function He(e){Pe().$$.on_mount.push(e)}const H=[],le=[];let S=[];const ce=[],Se=Promise.resolve();let V=!1;function je(){V||(V=!0,Se.then(we))}function Y(e){S.push(e)}const G=new Set;let T=0;function we(){if(T!==0)return;const e=O;do{try{for(;T<H.length;){const t=H[T];T++,B(t),Be(t.$$)}}catch(t){throw H.length=0,T=0,t}for(B(null),H.length=0,T=0;le.length;)le.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];G.has(n)||(G.add(n),n())}S.length=0}while(H.length);for(;ce.length;)ce.pop()();V=!1,G.clear(),B(e)}function Be(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Y)}}function Re(e){const t=[],n=[];S.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),S=t}const L=new Set;let Oe;function X(e,t){e&&e.i&&(L.delete(e),e.i(t))}function ue(e,t,n,s){if(e&&e.o){if(L.has(e))return;L.add(e),Oe.c.push(()=>{L.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function fe(e){e&&e.c()}function K(e,t,n){const{fragment:s,after_update:r}=e.$$;s&&s.m(t,n),Y(()=>{const l=e.$$.on_mount.map(ve).filter(U);e.$$.on_destroy?e.$$.on_destroy.push(...l):N(l),e.$$.on_mount=[]}),r.forEach(Y)}function Z(e,t){const n=e.$$;n.fragment!==null&&(Re(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ne(e,t){e.$$.dirty[0]===-1&&(H.push(e),je(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ee(e,t,n,s,r,l,m=null,h=[-1]){const p=O;B(e);const o=e.$$={fragment:null,ctx:[],props:l,update:x,not_equal:r,bound:se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:se(),dirty:h,skip_bound:!1,root:t.target||p.$$.root};m&&m(o.root);let _=!1;if(o.ctx=n?n(e,t.props||{},(v,c,...u)=>{const f=u.length?u[0]:c;return o.ctx&&r(o.ctx[v],o.ctx[v]=f)&&(!o.skip_bound&&o.bound[v]&&o.bound[v](f),_&&Ne(e,v)),c}):[],o.update(),_=!0,N(o.before_update),o.fragment=s?s(o.ctx):!1,t.target){if(t.hydrate){const v=Te(t.target);o.fragment&&o.fragment.l(v),v.forEach(R)}else o.fragment&&o.fragment.c();t.intro&&X(e.$$.fragment),K(e,t.target,t.anchor),we()}B(p)}class te{constructor(){q(this,"$$");q(this,"$$set")}$destroy(){Z(this,1),this.$destroy=x}$on(t,n){if(!U(n))return x;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!Ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ke="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ke);var W=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var We="Expected a function",de=0/0,Le="[object Symbol]",De=/^\s+|\s+$/g,ze=/^[-+]0x[0-9a-f]+$/i,Ue=/^0b[01]+$/i,Fe=/^0o[0-7]+$/i,qe=parseInt,Ge=typeof W=="object"&&W&&W.Object===Object&&W,Je=typeof self=="object"&&self&&self.Object===Object&&self,Ve=Ge||Je||Function("return this")(),Ye=Object.prototype,Xe=Ye.toString,Ke=Math.max,Ze=Math.min,J=function(){return Ve.Date.now()};function Qe(e,t,n){var s,r,l,m,h,p,o=0,_=!1,v=!1,c=!0;if(typeof e!="function")throw new TypeError(We);t=he(t)||0,Q(n)&&(_=!!n.leading,v="maxWait"in n,l=v?Ke(he(n.maxWait)||0,t):l,c="trailing"in n?!!n.trailing:c);function u(b){var M=s,j=r;return s=r=void 0,o=b,m=e.apply(j,M),m}function f(b){return o=b,h=setTimeout(a,t),_?u(b):m}function g(b){var M=b-p,j=b-o,ie=t-M;return v?Ze(ie,l-j):ie}function i(b){var M=b-p,j=b-o;return p===void 0||M>=t||M<0||v&&j>=l}function a(){var b=J();if(i(b))return d(b);h=setTimeout(a,g(b))}function d(b){return h=void 0,c&&s?u(b):(s=r=void 0,m)}function w(){h!==void 0&&clearTimeout(h),o=0,s=p=r=h=void 0}function E(){return h===void 0?m:d(J())}function C(){var b=J(),M=i(b);if(s=arguments,r=this,p=b,M){if(h===void 0)return f(p);if(v)return h=setTimeout(a,t),u(p)}return h===void 0&&(h=setTimeout(a,t)),m}return C.cancel=w,C.flush=E,C}function Q(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function et(e){return!!e&&typeof e=="object"}function tt(e){return typeof e=="symbol"||et(e)&&Xe.call(e)==Le}function he(e){if(typeof e=="number")return e;if(tt(e))return de;if(Q(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Q(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(De,"");var n=Ue.test(e);return n||Fe.test(e)?qe(e.slice(2),n?2:8):ze.test(e)?de:+e}var nt=Qe;const ge=_e(nt),P=[];function it(e,t){return{subscribe:ne(e,t).subscribe}}function ne(e,t=x){let n;const s=new Set;function r(h){if(F(e,h)&&(e=h,n)){const p=!P.length;for(const o of s)o[1](),P.push(o,e);if(p){for(let o=0;o<P.length;o+=2)P[o][0](P[o+1]);P.length=0}}}function l(h){r(h(e))}function m(h,p=x){const o=[h,p];return s.add(o),s.size===1&&(n=t(r,l)||x),h(e),()=>{s.delete(o),s.size===0&&n&&(n(),n=null)}}return{set:r,update:l,subscribe:m}}function ye(e,t,n){const s=!Array.isArray(e),r=s?[e]:e;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=t.length<2;return it(n,(m,h)=>{let p=!1;const o=[];let _=0,v=x;const c=()=>{if(_)return;v();const f=t(s?o[0]:o,m,h);l?m(f):v=U(f)?f:x},u=r.map((f,g)=>be(f,i=>{o[g]=i,_&=~(1<<g),p&&c()},()=>{_|=1<<g}));return p=!0,c(),function(){N(u),v(),p=!1}})}const z=ne(window.innerWidth),me=ne(window.innerHeight);ye(z,e=>e<=560);ye(z,e=>e>1200);const{window:st}=Ce;function rt(e){let t,n;return{c:x,m(s,r){t||(n=Ae(st,"resize",function(){U(ge(e[1],e[0]))&&ge(e[1],e[0]).apply(this,arguments)}),t=!0)},p(s,[r]){e=s},i:x,o:x,d(s){t=!1,n()}}}function at(e,t,n){let s,r;ae(e,me,h=>n(2,s=h)),ae(e,z,h=>n(3,r=h));let{debounceDur:l=100}=t;const m=()=>{oe(z,r=window.innerWidth,r),oe(me,s=window.innerHeight,s)};return He(()=>{m()}),e.$$set=h=>{"debounceDur"in h&&n(0,l=h.debounceDur)},[l,m]}class ot extends te{constructor(t){super(),ee(this,t,at,rt,F,{debounceDur:0})}}function lt(e){let t,n,s,r,l,m,h,p,o;return{c(){t=I("div"),n=I("img"),r=A(),l=I("div"),m=I("img"),p=A(),o=I("div"),o.textContent="Project area",re(n.src,s=e[0])||y(n,"src",s),y(n,"alt","Main map showing the Hatchie-Loosahatchie region"),y(n,"class","main-map svelte-1uxhi98"),re(m.src,h=e[1])||y(m,"src",h),y(m,"alt","Inset map showing the broader regional context"),y(m,"class","svelte-1uxhi98"),y(o,"class","inset-label svelte-1uxhi98"),y(l,"class","inset-map svelte-1uxhi98"),y(t,"class","map-container svelte-1uxhi98")},m(_,v){D(_,t,v),$(t,n),$(t,r),$(t,l),$(l,m),$(l,p),$(l,o)},p:x,i:x,o:x,d(_){_&&R(t)}}}const ct=800,ut=1e3,ft=200,dt=200,ht="-90.229525,35.063049,-89.851870,35.691208",gt="-93.136082,33.082409,-86.873875,38.410626",pe="548687";function mt(e){const t="pk.eyJ1IjoiYWd3YXRlcmRlc2siLCJhIjoiY2x2dHBvcHZnMTJwajJsbGx4NDg1NzkzdiJ9.x-5N8xgT9tGsilVw5h5kjw",n=`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/[${ht}]/${ct}x${ut}?access_token=${t}`,s=`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/geojson(%7B%22type%22%3A%22Feature%22%2C%22properties%22%3A%7B%22stroke%22%3A%22%23${pe}%22%2C%22stroke-width%22%3A2%2C%22fill%22%3A%22%23${pe}%22%2C%22fill-opacity%22%3A0.2%7D%2C%22geometry%22%3A%7B%22type%22%3A%22Polygon%22%2C%22coordinates%22%3A%5B%5B%5B-90.398254%2C35.094069%5D%2C%5B-89.673157%2C35.094069%5D%2C%5B-89.673157%2C35.728677%5D%2C%5B-90.398254%2C35.728677%5D%2C%5B-90.398254%2C35.094069%5D%5D%5D%7D%7D)/[${gt}]/${ft}x${dt}?attribution=false&access_token=${t}`;return[n,s]}let pt=class extends te{constructor(t){super(),ee(this,t,mt,lt,F,{})}};var xe={exports:{}};/*! pym.js - v1.3.2 - 2018-02-13 */(function(e){(function(t){e.exports?e.exports=t():window.pym=t.call(this)})(function(){var t="xPYMx",n={},s=function(c){var u=document.createEvent("Event");u.initEvent("pym:"+c,!0,!0),document.dispatchEvent(u)},r=function(c){var u=new RegExp("[\\?&]"+c.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]")+"=([^&#]*)"),f=u.exec(location.search);return f===null?"":decodeURIComponent(f[1].replace(/\+/g," "))},l=function(c,u){if(!(u.xdomain!=="*"&&!c.origin.match(new RegExp(u.xdomain+"$")))&&typeof c.data=="string")return!0},m=function(c){var u=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/gi;if(c.match(u))return!0},h=function(c,u,f){var g=["pym",c,u,f];return g.join(t)},p=function(c){var u=["pym",c,"(\\S+)","(.*)"];return new RegExp("^"+u.join(t)+"$")},o=Date.now||function(){return new Date().getTime()},_=function(c,u,f){var g,i,a,d=null,w=0;f||(f={});var E=function(){w=f.leading===!1?0:o(),d=null,a=c.apply(g,i),d||(g=i=null)};return function(){var C=o();!w&&f.leading===!1&&(w=C);var b=u-(C-w);return g=this,i=arguments,b<=0||b>u?(d&&(clearTimeout(d),d=null),w=C,a=c.apply(g,i),d||(g=i=null)):!d&&f.trailing!==!1&&(d=setTimeout(E,b)),a}},v=function(){for(var c=n.autoInitInstances.length,u=c-1;u>=0;u--){var f=n.autoInitInstances[u];f.el.getElementsByTagName("iframe").length&&f.el.getElementsByTagName("iframe")[0].contentWindow||n.autoInitInstances.splice(u,1)}};return n.autoInitInstances=[],n.autoInit=function(c){var u=document.querySelectorAll("[data-pym-src]:not([data-pym-auto-initialized])"),f=u.length;v();for(var g=0;g<f;++g){var i=u[g];i.setAttribute("data-pym-auto-initialized",""),i.id===""&&(i.id="pym-"+g+"-"+Math.random().toString(36).substr(2,5));var a=i.getAttribute("data-pym-src"),d={xdomain:"string",title:"string",name:"string",id:"string",sandbox:"string",allowfullscreen:"boolean",parenturlparam:"string",parenturlvalue:"string",optionalparams:"boolean",trackscroll:"boolean",scrollwait:"number"},w={};for(var E in d)if(i.getAttribute("data-pym-"+E)!==null)switch(d[E]){case"boolean":w[E]=i.getAttribute("data-pym-"+E)!=="false";break;case"string":w[E]=i.getAttribute("data-pym-"+E);break;case"number":var C=Number(i.getAttribute("data-pym-"+E));isNaN(C)||(w[E]=C);break;default:console.err("unrecognized attribute type")}var b=new n.Parent(i.id,a,w);n.autoInitInstances.push(b)}return c||s("pym-initialized"),n.autoInitInstances},n.Parent=function(c,u,f){this.id=c,this.url=u,this.el=document.getElementById(c),this.iframe=null,this.settings={xdomain:"*",optionalparams:!0,parenturlparam:"parentUrl",parenturlvalue:window.location.href,trackscroll:!1,scrollwait:100},this.messageRegex=p(this.id),this.messageHandlers={},f=f||{},this._constructIframe=function(){var i=this.el.offsetWidth.toString();this.iframe=document.createElement("iframe");var a="",d=this.url.indexOf("#");for(d>-1&&(a=this.url.substring(d,this.url.length),this.url=this.url.substring(0,d)),this.url.indexOf("?")<0?this.url+="?":this.url+="&",this.iframe.src=this.url+"initialWidth="+i+"&childId="+this.id,this.settings.optionalparams&&(this.iframe.src+="&parentTitle="+encodeURIComponent(document.title),this.iframe.src+="&"+this.settings.parenturlparam+"="+encodeURIComponent(this.settings.parenturlvalue)),this.iframe.src+=a,this.iframe.setAttribute("width","100%"),this.iframe.setAttribute("scrolling","no"),this.iframe.setAttribute("marginheight","0"),this.iframe.setAttribute("frameborder","0"),this.settings.title&&this.iframe.setAttribute("title",this.settings.title),this.settings.allowfullscreen!==void 0&&this.settings.allowfullscreen!==!1&&this.iframe.setAttribute("allowfullscreen",""),this.settings.sandbox!==void 0&&typeof this.settings.sandbox=="string"&&this.iframe.setAttribute("sandbox",this.settings.sandbox),this.settings.id&&(document.getElementById(this.settings.id)||this.iframe.setAttribute("id",this.settings.id)),this.settings.name&&this.iframe.setAttribute("name",this.settings.name);this.el.firstChild;)this.el.removeChild(this.el.firstChild);this.el.appendChild(this.iframe),window.addEventListener("resize",this._onResize),this.settings.trackscroll&&window.addEventListener("scroll",this._throttleOnScroll)},this._onResize=(function(){this.sendWidth(),this.settings.trackscroll&&this.sendViewportAndIFramePosition()}).bind(this),this._onScroll=(function(){this.sendViewportAndIFramePosition()}).bind(this),this._fire=function(i,a){if(i in this.messageHandlers)for(var d=0;d<this.messageHandlers[i].length;d++)this.messageHandlers[i][d].call(this,a)},this.remove=function(){window.removeEventListener("message",this._processMessage),window.removeEventListener("resize",this._onResize),this.el.removeChild(this.iframe),v()},this._processMessage=(function(i){if(l(i,this.settings)&&typeof i.data=="string"){var a=i.data.match(this.messageRegex);if(!a||a.length!==3)return!1;var d=a[1],w=a[2];this._fire(d,w)}}).bind(this),this._onHeightMessage=function(i){var a=parseInt(i);this.iframe.setAttribute("height",a+"px")},this._onNavigateToMessage=function(i){m(i)&&(document.location.href=i)},this._onScrollToChildPosMessage=function(i){var a=document.getElementById(this.id).getBoundingClientRect().top+window.pageYOffset,d=a+parseInt(i);window.scrollTo(0,d)},this.onMessage=function(i,a){i in this.messageHandlers||(this.messageHandlers[i]=[]),this.messageHandlers[i].push(a)},this.sendMessage=function(i,a){this.el.getElementsByTagName("iframe").length&&(this.el.getElementsByTagName("iframe")[0].contentWindow?this.el.getElementsByTagName("iframe")[0].contentWindow.postMessage(h(this.id,i,a),"*"):this.remove())},this.sendWidth=function(){var i=this.el.offsetWidth.toString();this.sendMessage("width",i)},this.sendViewportAndIFramePosition=function(){var i=this.iframe.getBoundingClientRect(),a=window.innerWidth||document.documentElement.clientWidth,d=window.innerHeight||document.documentElement.clientHeight,w=a+" "+d;w+=" "+i.top+" "+i.left,w+=" "+i.bottom+" "+i.right,this.sendMessage("viewport-iframe-position",w)};for(var g in f)this.settings[g]=f[g];return this._throttleOnScroll=_(this._onScroll.bind(this),this.settings.scrollwait),this.onMessage("height",this._onHeightMessage),this.onMessage("navigateTo",this._onNavigateToMessage),this.onMessage("scrollToChildPos",this._onScrollToChildPosMessage),this.onMessage("parentPositionInfo",this.sendViewportAndIFramePosition),window.addEventListener("message",this._processMessage,!1),this._constructIframe(),this},n.Child=function(c){this.parentWidth=null,this.id=null,this.parentTitle=null,this.parentUrl=null,this.settings={renderCallback:null,xdomain:"*",polling:0,parenturlparam:"parentUrl"},this.timerId=null,this.messageRegex=null,this.messageHandlers={},c=c||{},this.onMessage=function(i,a){i in this.messageHandlers||(this.messageHandlers[i]=[]),this.messageHandlers[i].push(a)},this._fire=function(i,a){if(i in this.messageHandlers)for(var d=0;d<this.messageHandlers[i].length;d++)this.messageHandlers[i][d].call(this,a)},this._processMessage=(function(i){if(l(i,this.settings)&&typeof i.data=="string"){var a=i.data.match(this.messageRegex);if(!(!a||a.length!==3)){var d=a[1],w=a[2];this._fire(d,w)}}}).bind(this),this._onWidthMessage=function(i){var a=parseInt(i);a!==this.parentWidth&&(this.parentWidth=a,this.settings.renderCallback&&this.settings.renderCallback(a),this.sendHeight())},this.sendMessage=function(i,a){window.parent.postMessage(h(this.id,i,a),"*")},this.sendHeight=(function(){var i=document.getElementsByTagName("body")[0].offsetHeight.toString();return this.sendMessage("height",i),i}).bind(this),this.getParentPositionInfo=function(){this.sendMessage("parentPositionInfo")},this.scrollParentTo=function(i){this.sendMessage("navigateTo","#"+i)},this.navigateParentTo=function(i){this.sendMessage("navigateTo",i)},this.scrollParentToChildEl=function(i){var a=document.getElementById(i).getBoundingClientRect().top+window.pageYOffset;this.scrollParentToChildPos(a)},this.scrollParentToChildPos=function(i){this.sendMessage("scrollToChildPos",i.toString())};var u=function(i){var a=document.getElementsByTagName("html")[0],d,w=a.className;try{window.self!==window.top?d="embedded":d="not-embedded"}catch{d="embedded"}w.indexOf(d)<0&&(a.className=w?w+" "+d:d,i&&i(d),s("marked-embedded"))};this.remove=function(){window.removeEventListener("message",this._processMessage),this.timerId&&clearInterval(this.timerId)};for(var f in c)this.settings[f]=c[f];this.id=r("childId")||c.id,this.messageRegex=new RegExp("^pym"+t+this.id+t+"(\\S+)"+t+"(.*)$");var g=parseInt(r("initialWidth"));return this.parentUrl=r(this.settings.parenturlparam),this.parentTitle=r("parentTitle"),this.onMessage("width",this._onWidthMessage),window.addEventListener("message",this._processMessage,!1),this.settings.renderCallback&&this.settings.renderCallback(g),this.sendHeight(),this.settings.polling&&(this.timerId=window.setInterval(this.sendHeight,this.settings.polling)),u(c.onMarkedEmbeddedStatus),this},typeof document<"u"&&n.autoInit(!0),n})})(xe);var vt=xe.exports;const bt=_e(vt);function wt(e){let t;return{c(){t=I("div"),t.innerHTML=`Data: U.S. Army Corps of Engineers; Graphic by Jared Whalen /
      <a target="_blank" href="https://agwaterdesk.org/">Ag &amp; Water Desk</a>`,y(t,"class","credit")},m(n,s){D(n,t,s)},d(n){n&&R(t)}}}function _t(e){let t,n,s,r,l,m,h,p,o,_,v,c,u;t=new ot({}),v=new pt({});let f=e[0]&&wt();return{c(){fe(t.$$.fragment),n=A(),s=I("div"),r=I("h1"),r.textContent=`Extent of the Hatchie-Loosahatchie Mississippi River Ecosystem Restoration
    project`,l=A(),m=I("p"),m.textContent=`A proposed $63.7 million restoration project aims to reconnect floodplains,
    restore endangered species' habitats, and combat invasive carp along the
    Mississippi River near Memphis.`,h=A(),p=I("p"),p.textContent=`A map showing the approximate area of the Hatchie-Loosahatchie Mississippi
    River Ecosystem Restoration project near Memphis, Tennessee, with major
    roads, water bodies, and an inset highlighting the project's location within
    the region.`,o=A(),_=I("div"),fe(v.$$.fragment),c=A(),f&&f.c(),y(r,"class","headline"),y(m,"class","dek hide-in-static"),y(p,"class","sr-only"),y(_,"id","g-viz"),y(_,"class","svelte-1j4uh3w"),y(s,"class","chart-container svelte-1j4uh3w")},m(g,i){K(t,g,i),D(g,n,i),D(g,s,i),$(s,r),$(s,l),$(s,m),$(s,h),$(s,p),$(s,o),$(s,_),K(v,_,null),$(s,c),f&&f.m(s,null),u=!0},p:x,i(g){u||(X(t.$$.fragment,g),X(v.$$.fragment,g),u=!0)},o(g){ue(t.$$.fragment,g),ue(v.$$.fragment,g),u=!1},d(g){g&&(R(n),R(s)),Z(t,g),Z(v),f&&f.d()}}}function yt(e){return new URLSearchParams(window.location.search).get(e)}function xt(e){return new bt.Child({polling:500}),[yt("credit")!="false"]}class $t extends te{constructor(t){super(),ee(this,t,xt,_t,F,{})}}new $t({target:document.getElementById("app")});
