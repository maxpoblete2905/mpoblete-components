import{a as n}from"./CustomButtonDownloadExcel-CF9nza-V.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./getReactIconByName-BlUYT3dy.js";const r=[{id:"0",nombre:"Juan",apellido:"Perez",email:"juan@example.com",creationDate:new Date().toISOString()},{id:"1",nombre:"María",apellido:"García",email:"maria@example.com",creationDate:new Date(Date.now()-864e5).toISOString()},{id:"2",nombre:"Pedro",apellido:"López",email:"pedro@example.com",creationDate:new Date(Date.now()-2*864e5).toISOString()},{id:"3",nombre:"Ana",apellido:"Martínez",email:"ana@example.com",creationDate:new Date(Date.now()-3*864e5).toISOString()},{id:"4",nombre:"Luis",apellido:"Fernández",email:"luis@example.com",creationDate:new Date(Date.now()-4*864e5).toISOString()}],d={title:"Component/CustomButton/ButonDownloadExcel",component:n,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:"text",description:"Texto que se muestra en el botón",table:{type:{summary:"string"}}},onClick:{action:"clicked",description:"Función a ejecutar cuando se hace clic en el botón",table:{type:{summary:"() => void"}}},type:{control:"select",options:["button","submit","reset"],description:"Tipo del botón",table:{type:{summary:"button | submit | reset"}}},disabled:{control:"boolean",description:"Si el botón está deshabilitado",table:{type:{summary:"boolean"}}},size:{control:"select",options:["small","medium","large"],description:"Tamaño del botón",table:{type:{summary:"small | medium | large"}}},color:{control:"select",description:"Color del botón",table:{type:{summary:"default | primary | secondary | danger"}}},icon:{control:"select",description:"Elemento de icono para el botón"},borderRedius:{control:"select",description:"Elemento de icono para el botón"},data:{control:{disable:!0},description:"Datos a exportar en el archivo Excel",table:{type:{summary:"DataItem[]"}}},header:{control:{disable:!0},description:"Encabezado para el archivo Excel",table:{type:{summary:"string[]"}}}}},e={args:{label:"Export to Excel",data:r,onClick:()=>{alert("se ejecuta funcion anonima")},type:"button",disabled:!1,size:"medium",color:"default",icon:"FcAudioFile"}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Export to Excel",
    data: records,
    onClick: () => {
      alert("se ejecuta funcion anonima");
    },
    type: "button",
    disabled: false,
    size: "medium",
    color: "default",
    icon: "FcAudioFile"
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const p=["ButtonCreate"];export{e as ButtonCreate,p as __namedExportsOrder,d as default};
