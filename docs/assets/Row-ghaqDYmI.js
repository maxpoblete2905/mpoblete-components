import{u as B,a as d,b as R,c as $}from"./Col-BHW6QTMh.js";import{r as w}from"./index-DH5ua8nC.js";import{j}from"./jsx-runtime-DQ32znRX.js";const c=w.forwardRef(({bsPrefix:i,className:n,as:f="div",...t},l)=>{const a=B(i,"row"),p=d(),m=R(),u=`${a}-cols`,r=[];return p.forEach(s=>{const o=t[s];delete t[s];let e;o!=null&&typeof o=="object"?{cols:e}=o:e=o;const x=s!==m?`-${s}`:"";e!=null&&r.push(`${u}${x}-${e}`)}),j.jsx(f,{ref:l,...t,className:$(n,a,...r)})});c.displayName="Row";const y=c;export{y as R};