import{j as e}from"./jsx-runtime-DQ32znRX.js";import{u as f,c as v,C as x}from"./Col-BHW6QTMh.js";import{r as y}from"./index-DH5ua8nC.js";import{R as C}from"./Row-ghaqDYmI.js";/* empty css                      */import"./_commonjsHelpers-Cpj98o6Y.js";const d=y.forwardRef(({bsPrefix:o,fluid:r=!1,as:t="div",className:p,...h},m)=>{const s=f(o,"container"),u=typeof r=="string"?`-${r}`:"-fluid";return e.jsx(t,{ref:m,...h,className:v(p,r?`${s}${u}`:s)})});d.displayName="Container";const g=d,a=({children:o,col:r,color:t})=>e.jsx(g,{style:{padding:"20px",borderRadius:10},className:`theme-${t}`,children:e.jsx(C,{children:e.jsx(x,{className:"theme-secondary",xs:12,md:r,children:o})})});try{a.displayName="GridComponent",a.__docgenInfo={description:"",displayName:"GridComponent",props:{col:{defaultValue:null,description:"",name:"col",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"dark"'}]}}}}}catch{}const b={title:"Component/Grid",component:a,tags:["autodocs"],argTypes:{color:{control:"select"},col:{control:"select"}}},n={args:{color:"dark",col:12,children:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"The City"}),e.jsx("hr",{}),e.jsx("p",{children:"Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city."}),e.jsx("p",{children:"Resize the browser window to see how the content respond to the resizing."})]})}};var i,c,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const T=["GridBasic"];export{n as GridBasic,T as __namedExportsOrder,b as default};
