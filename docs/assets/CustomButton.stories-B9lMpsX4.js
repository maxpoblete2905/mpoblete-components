import{C as n}from"./CustomButtonDownloadExcel-CF9nza-V.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./getReactIconByName-BlUYT3dy.js";const d={title:"Component/CustomButton/Button",component:n,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:"text",description:"Texto que se muestra en el botón",table:{type:{summary:"string"}}},onClick:{action:"clicked",description:"Función a ejecutar cuando se hace clic en el botón",table:{type:{summary:"() => void"}}},type:{control:"select",options:["button","submit","reset"],description:"Tipo del botón",table:{type:{summary:"button | submit | reset"}}},disabled:{control:"boolean",description:"Si el botón está deshabilitado",table:{type:{summary:"boolean"}}},size:{control:"select",options:["small","medium","large"],description:"Tamaño del botón",table:{type:{summary:"small | medium | large"}}},color:{control:"select",description:"Color del botón",table:{type:{summary:"default | primary | secondary | danger"}}},icon:{control:"select",description:"Elemento de icono para el botón"},borderRedius:{control:"select",description:"Elemento de icono para el botón"}}},e={args:{label:"Create",onClick:()=>{alert("se ejecuta funcion anonima")},type:"button",disabled:!1,size:"medium",color:"default",icon:"FcEndCall"}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Create',
    onClick: () => {
      alert("se ejecuta funcion anonima");
    },
    type: "button",
    disabled: false,
    size: "medium",
    // Puedes cambiar el tamaño predeterminado aquí
    color: "default",
    // Puedes cambiar el color predeterminado aquí
    icon: "FcEndCall" // Puedes añadir un icono aquí si es necesario
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const m=["ButtonCreate"];export{e as ButtonCreate,m as __namedExportsOrder,d as default};
