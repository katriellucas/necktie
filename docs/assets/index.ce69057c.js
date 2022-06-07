const z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};z();function p(){}function I(e){return e()}function O(){return Object.create(null)}function v(e){e.forEach(I)}function D(e){return typeof e=="function"}function M(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function U(e){return Object.keys(e).length===0}function b(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function j(e){return document.createElement(e)}function X(e){return document.createTextNode(e)}function Y(){return X(" ")}function G(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function B(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function J(e){return Array.from(e.childNodes)}function q(e,t,n){e.classList[n?"add":"remove"](t)}let w;function d(e){w=e}const f=[],N=[],_=[],k=[],Q=Promise.resolve();let x=!1;function R(){x||(x=!0,Q.then(C))}function y(e){_.push(e)}const $=new Set;let m=0;function C(){const e=w;do{for(;m<f.length;){const t=f[m];m++,d(t),V(t.$$)}for(d(null),f.length=0,m=0;N.length;)N.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];$.has(n)||($.add(n),n())}_.length=0}while(f.length);for(;k.length;)k.pop()();x=!1,$.clear(),d(e)}function V(e){if(e.fragment!==null){e.update(),v(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}const g=new Set;let W;function P(e,t){e&&e.i&&(g.delete(e),e.i(t))}function Z(e,t,n,s){if(e&&e.o){if(g.has(e))return;g.add(e),W.c.push(()=>{g.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function ee(e){e&&e.c()}function S(e,t,n,s){const{fragment:r,on_mount:o,on_destroy:i,after_update:u}=e.$$;r&&r.m(t,n),s||y(()=>{const c=o.map(I).filter(D);i?i.push(...c):v(c),e.$$.on_mount=[]}),u.forEach(y)}function H(e,t){const n=e.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function te(e,t){e.$$.dirty[0]===-1&&(f.push(e),R(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(e,t,n,s,r,o,i,u=[-1]){const c=w;d(e);const l=e.$$={fragment:null,ctx:null,props:o,update:p,not_equal:r,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:O(),dirty:u,skip_bound:!1,root:t.target||c.$$.root};i&&i(l.root);let L=!1;if(l.ctx=n?n(e,t.props||{},(a,E,...T)=>{const A=T.length?T[0]:E;return l.ctx&&r(l.ctx[a],l.ctx[a]=A)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](A),L&&te(e,a)),E}):[],l.update(),L=!0,v(l.before_update),l.fragment=s?s(l.ctx):!1,t.target){if(t.hydrate){const a=J(t.target);l.fragment&&l.fragment.l(a),a.forEach(h)}else l.fragment&&l.fragment.c();t.intro&&P(e.$$.fragment),S(e,t.target,t.anchor,t.customElement),C()}d(c)}class K{$destroy(){H(this,1),this.$destroy=p}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!U(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ne(e){let t=!1,n=()=>{t=!1},s,r,o,i;return y(e[2]),{c(){r=j("header"),r.innerHTML=`<div><img src="/src/elegance.svg"/></div> 
	<div class="nav svelte-1xyi0hx"></div>`,B(r,"class","top-app-bar svelte-1xyi0hx"),q(r,"pin",e[1])},m(u,c){b(u,r,c),o||(i=G(window,"scroll",()=>{t=!0,clearTimeout(s),s=setTimeout(n,100),e[2]()}),o=!0)},p(u,[c]){c&1&&!t&&(t=!0,clearTimeout(s),scrollTo(window.pageXOffset,u[0]),s=setTimeout(n,100)),c&2&&q(r,"pin",u[1])},i:p,o:p,d(u){u&&h(r),o=!1,i()}}}function re(e){console.log(e);let t;return e>0?t=!0:t=!1,t}function oe(e,t,n){let s,r;function o(){n(0,r=window.pageYOffset)}return e.$$.update=()=>{e.$$.dirty&1&&n(1,s=re(r))},[r,s,o]}class se extends K{constructor(t){super(),F(this,t,oe,ne,M,{})}}function ie(e){let t,n,s,r;return t=new se({}),{c(){ee(t.$$.fragment),n=Y(),s=j("main"),s.innerHTML=`<div class="banner svelte-19oipsq"><div>Hi! My name is</div> 
		<h1 class="svelte-19oipsq">Katriel Lucas.</h1> 
		<h2 class="svelte-19oipsq">I&#39;m a Front-end Developer.</h2> 
		<p class="svelte-19oipsq">I\u2019m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I\u2019m focused on building accessible, human-centered products at Upstatement.</p></div>`,B(s,"class","svelte-19oipsq")},m(o,i){S(t,o,i),b(o,n,i),b(o,s,i),r=!0},p,i(o){r||(P(t.$$.fragment,o),r=!0)},o(o){Z(t.$$.fragment,o),r=!1},d(o){H(t,o),o&&h(n),o&&h(s)}}}class le extends K{constructor(t){super(),F(this,t,null,ie,M,{})}}new le({target:document.getElementById("app")});