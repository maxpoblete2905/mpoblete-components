import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const u=({isOpen:a,onClose:s,title:l,content:i})=>a?e.jsx("div",{className:"modal",children:e.jsxs("div",{className:"modal-content",children:[e.jsx("span",{className:"close",onClick:s,children:"×"}),e.jsx("h2",{children:l}),e.jsx("p",{children:i})]})}):null;try{CustomModal.displayName="CustomModal",CustomModal.__docgenInfo={description:"",displayName:"CustomModal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}}}catch{}const m={title:"Component/Modal/modal",component:u,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{isOpen:{control:"boolean",description:"Placeholder para el input",table:{type:{summary:"boolean"}}},title:{control:"select",description:"Placeholder para el input",table:{type:{summary:"string"}}}}},t={args:{isOpen:!0,title:"modal estatus ",onClose:()=>{alert("se ejecuta funcion anonima")}}};var n,o,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "modal estatus ",
    onClose: () => {
      alert("se ejecuta funcion anonima");
    }
  }
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const y=["DefaultInput3"];export{t as DefaultInput3,y as __namedExportsOrder,m as default};
