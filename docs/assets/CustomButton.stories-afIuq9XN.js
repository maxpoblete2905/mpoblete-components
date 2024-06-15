import{C as i}from"./CustomButtonDownloadExcel-B_U-O-sn.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./getReactIconByName-BlUYT3dy.js";const b={title:"Component/Buttons/Button",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:"text",description:"Texto que se muestra en el botón",defaultValue:"Button",table:{type:{summary:"string"}}},onClick:{action:"clicked",description:"Función a ejecutar cuando se hace clic en el botón",table:{type:{summary:"() => void"}}},type:{control:"select",options:["button","submit","reset"],description:"Tipo del botón",table:{type:{summary:"button | submit | reset"}}},disabled:{control:"boolean",description:"Si el botón está deshabilitado",table:{type:{summary:"boolean"}}},size:{control:"select",options:["small","medium","large"],description:"Tamaño del botón",table:{type:{summary:"small | medium | large"}}},theme:{control:"select",description:"Color del botón",table:{type:{summary:"default | primary | secondary | danger"}}},icon:{control:"select",description:"Elemento de icono para el botón"},borderRedius:{control:"select",description:"Elemento de icono para el botón."},iconSize:{control:"select",description:"tamaño del icono"},data:{control:"array",description:"data que descargara en formato excel.",table:{disable:!0}},header:{control:"array",description:"header datos.",table:{disable:!0}},capitalized:{control:"boolean",description:"cambia label a mayusculas."}}},e={args:{onClick:()=>{alert("se ejecuta funcion anonima")}}},t={args:{label:"Custom Butom",capitalized:!0,icon:"FcEditImage",theme:"secondary",onClick:()=>{alert("se ejecuta funcion anonima")}}};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    onClick: () => {
      alert("se ejecuta funcion anonima");
    }
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var r,s,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: "Custom Butom",
    capitalized: true,
    icon: "FcEditImage",
    theme: "secondary",
    onClick: () => {
      alert("se ejecuta funcion anonima");
    }
  }
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const y=["DefaultButton","CustomButom"];export{t as CustomButom,e as DefaultButton,y as __namedExportsOrder,b as default};
