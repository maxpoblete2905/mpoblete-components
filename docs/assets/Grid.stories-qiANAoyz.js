import{j as e}from"./jsx-runtime-DQ32znRX.js";import{u as y,c as w,a as B,b as N}from"./ThemeProvider-DEEoOhBN.js";import{r as C}from"./index-DH5ua8nC.js";import{C as R}from"./Col-BF3taG1A.js";/* empty css                      */import"./_commonjsHelpers-Cpj98o6Y.js";const g=C.forwardRef(({bsPrefix:o,fluid:r=!1,as:t="div",className:a,...p},n)=>{const s=y(o,"container"),u=typeof r=="string"?`-${r}`:"-fluid";return e.jsx(t,{ref:n,...p,className:w(a,r?`${s}${u}`:s)})});g.displayName="Container";const G=g,j=C.forwardRef(({bsPrefix:o,className:r,as:t="div",...a},p)=>{const n=y(o,"row"),s=B(),u=N(),$=`${n}-cols`,h=[];return s.forEach(i=>{const c=a[i];delete a[i];let l;c!=null&&typeof c=="object"?{cols:l}=c:l=c;const _=i!==u?`-${i}`:"";l!=null&&h.push(`${$}${_}-${l}`)}),e.jsx(t,{ref:p,...a,className:w(r,n,...h)})});j.displayName="Row";const b=j,m=({children:o,col:r,color:t})=>e.jsx(G,{style:{padding:"20px",borderRadius:10},className:`theme-${t}`,children:e.jsx(b,{children:e.jsx(R,{className:"theme-secondary",xs:12,md:r,children:o})})});try{m.displayName="GridComponent",m.__docgenInfo={description:"",displayName:"GridComponent",props:{col:{defaultValue:null,description:"",name:"col",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"dark"'}]}}}}}catch{}const F={title:"Component/Grid",component:m,tags:["autodocs"],argTypes:{color:{control:"select"},col:{control:"select"}}},d={args:{color:"dark",col:12,children:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"The City"}),e.jsx("hr",{}),e.jsx("p",{children:"Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city."}),e.jsx("p",{children:"Resize the browser window to see how the content respond to the resizing."})]})}};var f,x,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: "dark",
    col: 12,
    children: <>\r
        <h2>The City</h2>\r
        <hr />\r
\r
        <p>\r
          Chania is the capital of the Chania region on the island of Crete. The\r
          city can be divided in two parts, the old town and the modern city.\r
        </p>\r
        <p>\r
          Resize the browser window to see how the content respond to the\r
          resizing.\r
        </p>\r
      </>
  }
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const I=["GridBasic"];export{d as GridBasic,I as __namedExportsOrder,F as default};
