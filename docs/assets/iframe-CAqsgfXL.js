function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Button.stories--tHFe7v8.js","./Button-Do6gLgwJ.js","./jsx-runtime-DQ32znRX.js","./index-DH5ua8nC.js","./_commonjsHelpers-Cpj98o6Y.js","./Button-BfyGbg8N.css","./Configure-D-UdImBq.js","./index-JX5dh45L.js","./index-D9uilScg.js","./index-Bw8VTzHM.js","./index-UvUotFBn.js","./index-DrFu-skq.js","./index-mlbUBBkt.js","./Header.stories-IHG-OOkZ.js","./Header-DAlFVHpe.js","./Header-BjLH3naM.css","./MyLabel.stories-Dgkkk8vn.js","./MyLabel-y1YDYk2q.css","./Page.stories-DD0Lh-Bw.js","./Page-B9ntr4df.css","./entry-preview-8pnywnDf.js","./react-18-iZ4baTDS.js","./entry-preview-docs-DHP_2J3h.js","./preview-B_0crF9I.js","./preview-D8VCGkL0.js","./preview-BcxrGG1y.js","./preview-BAz7FMXc.js","./preview-BCp7Wgbt.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="modulepreload",p=function(_,i){return new URL(_,i).href},O={},o=function(i,s,l){let e=Promise.resolve();if(s&&s.length>0){const t=document.getElementsByTagName("link");e=Promise.all(s.map(r=>{if(r=p(r,l),r in O)return;O[r]=!0;const c=r.endsWith(".css"),E=c?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const u=t[a];if(u.href===r&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${E}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":d,c||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),c)return new Promise((a,u)=>{n.addEventListener("load",a),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>i()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,m=R({page:"preview"});f.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const P={"./src/stories/Button.stories.ts":async()=>o(()=>import("./Button.stories--tHFe7v8.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./src/stories/Configure.mdx":async()=>o(()=>import("./Configure-D-UdImBq.js"),__vite__mapDeps([6,2,3,4,7,8,9,10,11,12]),import.meta.url),"./src/stories/Header.stories.ts":async()=>o(()=>import("./Header.stories-IHG-OOkZ.js"),__vite__mapDeps([13,14,2,3,4,1,5,15]),import.meta.url),"./src/stories/MyLabel.stories.ts":async()=>o(()=>import("./MyLabel.stories-Dgkkk8vn.js"),__vite__mapDeps([16,2,3,4,17]),import.meta.url),"./src/stories/Page.stories.ts":async()=>o(()=>import("./Page.stories-DD0Lh-Bw.js"),__vite__mapDeps([18,2,3,4,14,1,5,15,19]),import.meta.url)};async function T(_){return P[_]()}const{composeConfigs:w,PreviewWeb:L,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,v=async()=>{const _=await Promise.all([o(()=>import("./entry-preview-8pnywnDf.js"),__vite__mapDeps([20,3,4,21,8]),import.meta.url),o(()=>import("./entry-preview-docs-DHP_2J3h.js"),__vite__mapDeps([22,10,4,11,3]),import.meta.url),o(()=>import("./preview-B_0crF9I.js"),__vite__mapDeps([23,9]),import.meta.url),o(()=>import("./preview-Dku-XPVo.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-D8VCGkL0.js"),__vite__mapDeps([24,11]),import.meta.url),o(()=>import("./preview-BcxrGG1y.js"),__vite__mapDeps([25,11]),import.meta.url),o(()=>import("./preview-Db4Idchh.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([26,11]),import.meta.url),o(()=>import("./preview-Cv3rAi2i.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-BCp7Wgbt.js"),__vite__mapDeps([27,4]),import.meta.url),o(()=>import("./preview-CIwosuWp.js"),__vite__mapDeps([]),import.meta.url)]);return w(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:T,getProjectAnnotations:v});export{o as _};
