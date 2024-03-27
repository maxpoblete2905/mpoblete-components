import{j as e}from"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o=({children:t,color:n})=>{const l={padding:"20px",borderRadius:10},c={flexGrow:1};return e.jsx("div",{style:{...l,backgroundColor:n==="primary"?"blue":n==="secondary"?"green":"black"},children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col",style:{...c,backgroundColor:n==="secondary"?"green":"inherit"},children:t})})})};try{o.displayName="GridComponent",o.__docgenInfo={description:"",displayName:"GridComponent",props:{col:{defaultValue:null,description:"",name:"col",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"dark"'}]}}}}}catch{}const u={title:"Component/Grid",component:o,tags:["autodocs"],argTypes:{color:{control:"select"},col:{control:"select"}}},r={args:{color:"dark",col:12,children:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"The City"}),e.jsx("hr",{}),e.jsx("p",{children:"Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city."}),e.jsx("p",{children:"Resize the browser window to see how the content respond to the resizing."})]})}};var a,i,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    color: "dark",
    col: 12,
    children: <>\r
        <h2>The City</h2>\r
        <hr />\r
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
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const m=["GridBasic"];export{r as GridBasic,m as __namedExportsOrder,u as default};
