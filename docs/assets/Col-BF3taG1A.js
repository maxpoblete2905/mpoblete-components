import{c as $,u as B,a as C,b as h}from"./ThemeProvider-DEEoOhBN.js";import{r as N}from"./index-DH5ua8nC.js";import{j}from"./jsx-runtime-DQ32znRX.js";function x({as:l,bsPrefix:s,className:c,...o}){s=B(s,"col");const p=C(),u=h(),t=[],f=[];return p.forEach(a=>{const n=o[a];delete o[a];let e,i,m;typeof n=="object"&&n!=null?{span:e,offset:i,order:m}=n:e=n;const r=a!==u?`-${a}`:"";e&&t.push(e===!0?`${s}${r}`:`${s}${r}-${e}`),m!=null&&f.push(`order${r}-${m}`),i!=null&&f.push(`offset${r}-${i}`)}),[{...o,className:$(c,...t,...f)},{as:l,bsPrefix:s,spans:t}]}const d=N.forwardRef((l,s)=>{const[{className:c,...o},{as:p="div",bsPrefix:u,spans:t}]=x(l);return j.jsx(p,{...o,ref:s,className:$(c,!t.length&&u)})});d.displayName="Col";const g=d;export{g as C};
