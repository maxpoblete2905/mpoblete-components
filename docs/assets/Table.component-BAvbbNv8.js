import{j as n}from"./jsx-runtime-DQ32znRX.js";import{r as k,R as d}from"./index-DH5ua8nC.js";import{u as N,c as D}from"./ThemeProvider-BHT--WVz.js";import{F as E}from"./Form-BU-uEKGz.js";import{B as y}from"./Button-DFxwYlNq.js";const V=k.forwardRef(({bsPrefix:e,className:t,striped:r,bordered:a,borderless:l,hover:s,size:u,variant:i,responsive:o,...h},P)=>{const c=N(e,"table"),_=D(t,c,i&&`${c}-${i}`,u&&`${c}-${u}`,r&&`${c}-${typeof r=="string"?`striped-${r}`:"striped"}`,a&&`${c}-bordered`,l&&`${c}-borderless`,s&&`${c}-hover`),x=n.jsx("table",{...h,className:_,ref:P});if(o){let g=`${c}-responsive`;return typeof o=="string"&&(g=`${g}-${o}`),n.jsx("div",{className:g,children:x})}return x}),B=V;var O={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=d.createContext&&d.createContext(O),$=["attr","size","title"];function z(e,t){if(e==null)return{};var r=A(e,t),a,l;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)a=s[l],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function A(e,t){if(e==null)return{};var r={},a=Object.keys(e),l,s;for(s=0;s<a.length;s++)l=a[s],!(t.indexOf(l)>=0)&&(r[l]=e[l]);return r}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},m.apply(this,arguments)}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(a){T(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function T(e,t,r){return t=S(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){var t=H(e,"string");return typeof t=="symbol"?t:String(t)}function H(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function w(e){return e&&e.map((t,r)=>d.createElement(t.tag,f({key:r},t.attr),w(t.child)))}function p(e){return t=>d.createElement(I,m({attr:f({},e.attr)},t),w(e.child))}function I(e){var t=r=>{var{attr:a,size:l,title:s}=e,u=z(e,$),i=l||r.size||"1em",o;return r.className&&(o=r.className),e.className&&(o=(o?o+" ":"")+e.className),d.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,u,{className:o,style:f(f({color:e.color||r.color},r.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),s&&d.createElement("title",null,s),e.children)};return b!==void 0?d.createElement(b.Consumer,null,r=>t(r)):t(O)}function M(e){return p({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"},child:[]}]})(e)}function q(e){return p({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"},child:[]}]})(e)}function G(e){return p({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"},child:[]}]})(e)}function R(e){return p({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"},child:[]},{tag:"path",attr:{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"},child:[]}]})(e)}const v=e=>new Date(e).toLocaleDateString("es-ES",{year:"numeric",month:"short",day:"numeric"}),C=({data:e,columns:t,selectedItemIds:r,handleCheckboxChange:a,handleEditClick:l,handleDeleteClick:s})=>{const u=e.map(i=>({...i,creationDate:v(i.creationDate)}));return n.jsxs(B,{striped:!0,bordered:!0,hover:!0,children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{width:"auto",textAlign:"center"},children:"Check"}),t.map(i=>n.jsx("th",{style:{width:i.width??"auto",textAlign:i.align??"center"},children:i.label},i.key)),n.jsx("th",{style:{width:"20PX",textAlign:"center"},children:"Acciones"})]})}),n.jsx("tbody",{children:u.map(i=>n.jsxs("tr",{children:[n.jsx("td",{style:{textAlign:"center",verticalAlign:"middle",width:"20px"},children:n.jsx("div",{style:{display:"inline-block"},children:n.jsx(E.Check,{style:{margin:"auto"},type:"checkbox",checked:r.includes(i.id),onChange:()=>a(i.id)})})}),t.map(o=>{var h;return n.jsx("td",{children:(h=i[o.key])==null?void 0:h.toString()},o.label)}),n.jsx("td",{style:{textAlign:"center",verticalAlign:"middle",width:"20%"},children:n.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[n.jsx(y,{variant:"danger",className:"ml-2",style:{marginRight:"5px"},onClick:()=>s(i.id),children:n.jsx(R,{})}),n.jsx(y,{variant:"secondary",className:"ml-2",style:{marginRight:"5px"},onClick:()=>alert("crear vista ver registro"),children:n.jsx(M,{})}),n.jsx(y,{variant:"primary",className:"ml-2",onClick:()=>l(i),children:n.jsx(q,{})})]})})]},i.id))})]})};try{v.displayName="formatDate",v.__docgenInfo={description:"",displayName:"formatDate",props:{}}}catch{}try{C.displayName="TableComponent",C.__docgenInfo={description:"",displayName:"TableComponent",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn[]"}},selectedItemIds:{defaultValue:null,description:"",name:"selectedItemIds",required:!0,type:{name:"string[]"}},handleCheckboxChange:{defaultValue:null,description:"",name:"handleCheckboxChange",required:!0,type:{name:"(id: string) => void"}},handleEditClick:{defaultValue:null,description:"",name:"handleEditClick",required:!0,type:{name:"(row: T) => void"}},handleDeleteClick:{defaultValue:null,description:"",name:"handleDeleteClick",required:!0,type:{name:"(id: string) => void"}}}}}catch{}export{R as B,C as T,G as a};