import{j as t}from"./jsx-runtime-DQ32znRX.js";import{r as h}from"./index-DH5ua8nC.js";/* empty css             */import{I as j}from"./Input-D7sopEv7.js";import{B as v}from"./Button-BN9VmaLU.js";import{L as i}from"./Label-Bzv_SCz-.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o=({fields:r,onSubmit:c,color:a,title:p="test",subTitle:y="test"})=>{const[l,b]=h.useState({}),x=(e,n)=>{b(f=>({...f,[e]:n}))},g=e=>{e.preventDefault(),c(l)};return t.jsxs("form",{className:`dynamic-form teme-${a} row`,onSubmit:g,children:[t.jsxs("div",{className:"col-12",children:[t.jsx(i,{color:a,label:p,text:"large"}),"  ",t.jsx(i,{color:a,label:y,text:"medium"}),t.jsx("hr",{})]}),r.map(e=>t.jsxs("div",{className:"col-6",children:[t.jsx(i,{color:a,label:e.label,text:"medium"}),t.jsx(j,{id:e.id,label:e.label,type:e.type,value:l[e.id]||"",onChange:n=>x(e.id,n),color:a})]},e.id)),t.jsx("div",{className:"col-12",children:t.jsx(v,{color:a})})]})};try{o.displayName="DynamicForm",o.__docgenInfo={description:"",displayName:"DynamicForm",props:{fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"FormField[]"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(formData: { [key: string]: string; }) => void"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"dark"'}]}},title:{defaultValue:{value:"test"},description:"",name:"title",required:!1,type:{name:"string"}},subTitle:{defaultValue:{value:"test"},description:"",name:"subTitle",required:!1,type:{name:"string"}}}}}catch{}const q={title:"Component/Form",component:o,argTypes:{fields:{},onSubmit:{},color:{control:"select"}},tags:["autodocs"],parameters:{layout:"centered"}},s={args:{color:"primary",fields:[{id:"username",label:"Username",type:"text"},{id:"email",label:"Email",type:"email"},{id:"address",label:"Address",type:"text"}],onSubmit:r=>{console.log("Form submitted with data:",r)},title:"FORMURARIO",subTitle:"registro y mantencion de usuarios "}};var m,d,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: "primary",
    fields: [{
      id: "username",
      label: "Username",
      type: "text"
    }, {
      id: "email",
      label: "Email",
      type: "email"
    }, {
      id: "address",
      label: "Address",
      type: "text"
    }],
    onSubmit: (formData: {
      [key: string]: string;
    }) => {
      console.log("Form submitted with data:", formData);
      // Realizar acciones adicionales según tus necesidades
    },
    title: "FORMURARIO",
    subTitle: "registro y mantencion de usuarios "
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const A=["Basict"];export{s as Basict,A as __namedExportsOrder,q as default};
