if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const a=e=>t(e,c),r={module:{uri:c},exports:o,require:a};s[c]=Promise.all(n.map((e=>r[e]||a(e)))).then((e=>(i(...e),o)))}}define(["./workbox-de803542"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app.1434af9d.js",revision:null},{url:"assets/css/index-d376fbd7.css",revision:"de13a8d6e9bbad10e0190503256ef89a"},{url:"index.html",revision:"1eb86997efa83a1a408829d435aa72b0"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"assets/fonts/app-icons.ttf",revision:"17ab44485c6648921cd7712d66d68350"},{url:"assets/favicon-a69cfcce.ico",revision:"698c7090ca32fdabd4e67f79db158608"},{url:"manifest.webmanifest",revision:"42dc02454f6886d2514c10c4ff0ca76f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
