import{j as l}from"./jsx-runtime-DQ32znRX.js";import{G as d,B as Q,c as X,d as Y}from"./index-GHW6o9UK.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";function ee(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"},child:[]}]})(e)}function le(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"},child:[]}]})(e)}function ae(e){return d({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(e)}function oe(e){return d({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"},child:[]}]})(e)}const f={trash:l.jsx(Q,{}),plus:l.jsx(X,{}),edit:l.jsx(Y,{}),checkboxEmpty:l.jsx(ee,{}),checkboxFilled:l.jsx(le,{}),save:l.jsx(oe,{}),close:l.jsx(ae,{})},c=e=>f.hasOwnProperty(e)?f[e]:(console.error(`Icono '${e}' no encontrado.`),null);try{c.displayName="getIconByName",c.__docgenInfo={description:"",displayName:"getIconByName",props:{}}}catch{}const m=({color:e="black-solid",fontSize:T="20",fontWeight:Z="normal",margin:A="md",padding:D="md",borderRadius:G="md",boxShadow:O="none",hoverBackground:v,backgroundColor:g="blue-solid",hoverColor:h,label:s="Guardar registro",hoverScale:H=100,allCaps:P=!1,icon:p,onClick:U})=>{const J=`
  custom-button color-${e}
  background-${g} 
  font-size-${T} 
  font-weight-${Z} 
  margin-${A} 
  padding-${D}
  border-radius-${G} 
  box-shadow-${O} 
  hover-background-color-${v||g}
  hover-color-${h||e}
  hover-scale-${H}
`,b=p?c(p):null,K=P?s.toUpperCase():s;return l.jsxs("button",{className:J,onClick:U,children:[b||null,s?l.jsx("span",{className:"label",children:K}):null]})};try{m.displayName="ButtonTest",m.__docgenInfo={description:"",displayName:"ButtonTest",props:{label:{defaultValue:{value:"Guardar registro"},description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"trash"'},{value:'"plus"'},{value:'"edit"'},{value:'"checkboxEmpty"'},{value:'"checkboxFilled"'},{value:'"save"'},{value:'"close"'}]}},color:{defaultValue:{value:"black-solid"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"black-light"'},{value:'"black-medium"'},{value:'"black-solid"'},{value:'"blue-light"'},{value:'"blue-medium"'},{value:'"blue-solid"'},{value:'"brown-light"'},{value:'"brown-medium"'},{value:'"brown-solid"'},{value:'"cyan-light"'},{value:'"cyan-medium"'},{value:'"cyan-solid"'},{value:'"gray-light"'},{value:'"gray-medium"'},{value:'"gray-solid"'},{value:'"green-light"'},{value:'"green-medium"'},{value:'"green-solid"'},{value:'"lime-light"'},{value:'"lime-medium"'},{value:'"lime-solid"'},{value:'"magenta-light"'},{value:'"magenta-medium"'},{value:'"magenta-solid"'},{value:'"orange-light"'},{value:'"orange-medium"'},{value:'"orange-solid"'},{value:'"pink-light"'},{value:'"pink-medium"'},{value:'"pink-solid"'},{value:'"purple-light"'},{value:'"purple-medium"'},{value:'"purple-solid"'},{value:'"red-light"'},{value:'"red-medium"'},{value:'"red-solid"'},{value:'"teal-light"'},{value:'"teal-medium"'},{value:'"teal-solid"'},{value:'"white-light"'},{value:'"white-medium"'},{value:'"white-solid"'},{value:'"yellow-light"'},{value:'"yellow-medium"'},{value:'"yellow-solid"'}]}},fontSize:{defaultValue:{value:"20"},description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"6"'},{value:'"8"'},{value:'"10"'},{value:'"12"'},{value:'"14"'},{value:'"16"'},{value:'"18"'},{value:'"20"'},{value:'"24"'},{value:'"30"'},{value:'"36"'},{value:'"48"'},{value:'"60"'}]}},fontWeight:{defaultValue:{value:"normal"},description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"bold"'},{value:'"bolder"'},{value:'"lighter"'},{value:'"100"'},{value:'"200"'},{value:'"300"'},{value:'"400"'},{value:'"500"'},{value:'"600"'},{value:'"700"'},{value:'"800"'},{value:'"900"'}]}},margin:{defaultValue:{value:"md"},description:"",name:"margin",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'},{value:'"auto"'},{value:'"0"'},{value:'"xs"'},{value:'"md"'},{value:'"xl"'}]}},padding:{defaultValue:{value:"md"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'},{value:'"0"'},{value:'"xs"'},{value:'"md"'},{value:'"xl"'}]}},borderRadius:{defaultValue:{value:"md"},description:"",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'},{value:'"md"'},{value:'"xl"'},{value:'"none"'}]}},boxShadow:{defaultValue:{value:"none"},description:"",name:"boxShadow",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'},{value:'"md"'},{value:'"xl"'},{value:'"none"'}]}},backgroundColor:{defaultValue:{value:"blue-solid"},description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"black-light"'},{value:'"black-medium"'},{value:'"black-solid"'},{value:'"blue-light"'},{value:'"blue-medium"'},{value:'"blue-solid"'},{value:'"brown-light"'},{value:'"brown-medium"'},{value:'"brown-solid"'},{value:'"cyan-light"'},{value:'"cyan-medium"'},{value:'"cyan-solid"'},{value:'"gray-light"'},{value:'"gray-medium"'},{value:'"gray-solid"'},{value:'"green-light"'},{value:'"green-medium"'},{value:'"green-solid"'},{value:'"lime-light"'},{value:'"lime-medium"'},{value:'"lime-solid"'},{value:'"magenta-light"'},{value:'"magenta-medium"'},{value:'"magenta-solid"'},{value:'"orange-light"'},{value:'"orange-medium"'},{value:'"orange-solid"'},{value:'"pink-light"'},{value:'"pink-medium"'},{value:'"pink-solid"'},{value:'"purple-light"'},{value:'"purple-medium"'},{value:'"purple-solid"'},{value:'"red-light"'},{value:'"red-medium"'},{value:'"red-solid"'},{value:'"teal-light"'},{value:'"teal-medium"'},{value:'"teal-solid"'},{value:'"white-light"'},{value:'"white-medium"'},{value:'"white-solid"'},{value:'"yellow-light"'},{value:'"yellow-medium"'},{value:'"yellow-solid"'}]}},hoverBackground:{defaultValue:null,description:"",name:"hoverBackground",required:!1,type:{name:"enum",value:[{value:'"black-light"'},{value:'"black-medium"'},{value:'"black-solid"'},{value:'"blue-light"'},{value:'"blue-medium"'},{value:'"blue-solid"'},{value:'"brown-light"'},{value:'"brown-medium"'},{value:'"brown-solid"'},{value:'"cyan-light"'},{value:'"cyan-medium"'},{value:'"cyan-solid"'},{value:'"gray-light"'},{value:'"gray-medium"'},{value:'"gray-solid"'},{value:'"green-light"'},{value:'"green-medium"'},{value:'"green-solid"'},{value:'"lime-light"'},{value:'"lime-medium"'},{value:'"lime-solid"'},{value:'"magenta-light"'},{value:'"magenta-medium"'},{value:'"magenta-solid"'},{value:'"orange-light"'},{value:'"orange-medium"'},{value:'"orange-solid"'},{value:'"pink-light"'},{value:'"pink-medium"'},{value:'"pink-solid"'},{value:'"purple-light"'},{value:'"purple-medium"'},{value:'"purple-solid"'},{value:'"red-light"'},{value:'"red-medium"'},{value:'"red-solid"'},{value:'"teal-light"'},{value:'"teal-medium"'},{value:'"teal-solid"'},{value:'"white-light"'},{value:'"white-medium"'},{value:'"white-solid"'},{value:'"yellow-light"'},{value:'"yellow-medium"'},{value:'"yellow-solid"'}]}},hoverColor:{defaultValue:null,description:"",name:"hoverColor",required:!1,type:{name:"enum",value:[{value:'"black-light"'},{value:'"black-medium"'},{value:'"black-solid"'},{value:'"blue-light"'},{value:'"blue-medium"'},{value:'"blue-solid"'},{value:'"brown-light"'},{value:'"brown-medium"'},{value:'"brown-solid"'},{value:'"cyan-light"'},{value:'"cyan-medium"'},{value:'"cyan-solid"'},{value:'"gray-light"'},{value:'"gray-medium"'},{value:'"gray-solid"'},{value:'"green-light"'},{value:'"green-medium"'},{value:'"green-solid"'},{value:'"lime-light"'},{value:'"lime-medium"'},{value:'"lime-solid"'},{value:'"magenta-light"'},{value:'"magenta-medium"'},{value:'"magenta-solid"'},{value:'"orange-light"'},{value:'"orange-medium"'},{value:'"orange-solid"'},{value:'"pink-light"'},{value:'"pink-medium"'},{value:'"pink-solid"'},{value:'"purple-light"'},{value:'"purple-medium"'},{value:'"purple-solid"'},{value:'"red-light"'},{value:'"red-medium"'},{value:'"red-solid"'},{value:'"teal-light"'},{value:'"teal-medium"'},{value:'"teal-solid"'},{value:'"white-light"'},{value:'"white-medium"'},{value:'"white-solid"'},{value:'"yellow-light"'},{value:'"yellow-medium"'},{value:'"yellow-solid"'}]}},hoverScale:{defaultValue:{value:"100"},description:"",name:"hoverScale",required:!1,type:{name:"enum",value:[{value:"100"},{value:"105"},{value:"110"},{value:"115"},{value:"120"},{value:"125"},{value:"130"},{value:"135"},{value:"140"},{value:"145"},{value:"150"}]}},allCaps:{defaultValue:{value:"false"},description:"",name:"allCaps",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const te={title:"Component/ButtonTest",component:m,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{color:{control:"select"},fontSize:{control:"select"},fontWeight:{control:"select"},padding:{control:"select"},margin:{control:"select"},backgroundColor:{control:"select"},borderRadius:{control:"select"},boxShadow:{control:"select"},icon:{control:"select"},hoverBackground:{control:"select"},hoverColor:{control:"select"},hoverScale:{control:"select"},onClick:{action:"clicked"},allCaps:{control:"boolean"}}},a={args:{backgroundColor:"green-solid",borderRadius:"md",boxShadow:"md",color:"white-light",fontSize:"20",fontWeight:"500",hoverBackground:"green-medium",hoverColor:"green-solid",hoverScale:100,icon:"save",label:"Crear Registro",margin:"0",onClick:()=>{console.log("se ejecuta funcion anonima")},padding:"sm"}},o={args:{backgroundColor:"blue-solid",borderRadius:"md",boxShadow:"none",color:"white-light",fontSize:"18",fontWeight:"100",hoverBackground:"blue-medium",hoverColor:"blue-solid",hoverScale:110,label:"Custom Button",margin:"0",onClick:()=>{console.log("se ejecuta funcion anonima")},padding:"sm"}},n={args:{backgroundColor:"red-solid",borderRadius:"md",boxShadow:"md",color:"white-light",fontSize:"20",fontWeight:"500",hoverBackground:"red-medium",hoverColor:"red-solid",hoverScale:100,icon:"trash",label:"Eliminar",margin:"0",onClick:()=>{console.log("se ejecuta funcion anonima")},padding:"sm"}},u={args:{backgroundColor:"blue-solid",borderRadius:"md",boxShadow:"md",color:"white-light",fontSize:"20",fontWeight:"500",hoverScale:110,icon:"edit",label:"",margin:"0",onClick:()=>{console.log("se ejecuta funcion anonima")},padding:"sm"}},i={args:{backgroundColor:"blue-solid",borderRadius:"md",boxShadow:"md",color:"white-light",fontSize:"20",fontWeight:"500",hoverBackground:"blue-medium",hoverColor:"blue-solid",hoverScale:100,icon:"checkboxFilled",label:"Información",margin:"0",onClick:()=>{console.log("se ejecuta funcion anonima")},padding:"sm"}},r={args:{backgroundColor:"blue-solid",borderRadius:"md",boxShadow:"md",color:"white-light",fontSize:"18",fontWeight:"500",hoverBackground:"blue-solid",hoverColor:"white-light",hoverScale:120,label:"Button Scale",margin:"0",onClick:()=>{console.log("se ejecuta funcion anonima")},padding:"xs"}},t={args:{backgroundColor:"blue-solid",borderRadius:"md",boxShadow:"md",color:"white-light",fontSize:"18",fontWeight:"500",hoverBackground:"blue-solid",hoverColor:"white-light",hoverScale:100,label:"Button Scale",margin:"0",onClick:()=>{console.log("se ejecuta funcion anonima")},padding:"xs",allCaps:!0}};var k,C,w;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'green-solid',
    borderRadius: 'md',
    boxShadow: 'md',
    color: 'white-light',
    fontSize: '20',
    fontWeight: '500',
    hoverBackground: 'green-medium',
    hoverColor: 'green-solid',
    hoverScale: 100,
    icon: 'save',
    label: 'Crear Registro',
    margin: '0',
    onClick: () => {
      console.log("se ejecuta funcion anonima");
    },
    padding: 'sm'
  }
}`,...(w=(C=a.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var y,S,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'blue-solid',
    borderRadius: 'md',
    boxShadow: 'none',
    color: 'white-light',
    fontSize: '18',
    fontWeight: '100',
    hoverBackground: 'blue-medium',
    hoverColor: 'blue-solid',
    hoverScale: 110,
    label: 'Custom Button',
    margin: '0',
    onClick: () => {
      console.log("se ejecuta funcion anonima");
    },
    padding: 'sm'
  }
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var B,j,z;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'red-solid',
    borderRadius: 'md',
    boxShadow: 'md',
    color: 'white-light',
    fontSize: '20',
    fontWeight: '500',
    hoverBackground: 'red-medium',
    hoverColor: 'red-solid',
    hoverScale: 100,
    icon: 'trash',
    label: 'Eliminar',
    margin: '0',
    onClick: () => {
      console.log("se ejecuta funcion anonima");
    },
    padding: 'sm'
  }
}`,...(z=(j=n.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var R,V,_;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'blue-solid',
    borderRadius: 'md',
    boxShadow: 'md',
    color: 'white-light',
    fontSize: '20',
    fontWeight: '500',
    hoverScale: 110,
    icon: 'edit',
    label: '',
    margin: '0',
    onClick: () => {
      console.log("se ejecuta funcion anonima");
    },
    padding: 'sm'
  }
}`,...(_=(V=u.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var W,q,I;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'blue-solid',
    borderRadius: 'md',
    boxShadow: 'md',
    color: 'white-light',
    fontSize: '20',
    fontWeight: '500',
    hoverBackground: 'blue-medium',
    hoverColor: 'blue-solid',
    hoverScale: 100,
    icon: 'checkboxFilled',
    label: 'Información',
    margin: '0',
    onClick: () => {
      console.log("se ejecuta funcion anonima");
    },
    padding: 'sm'
  }
}`,...(I=(q=i.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var L,$,N;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'blue-solid',
    borderRadius: 'md',
    boxShadow: 'md',
    color: 'white-light',
    fontSize: '18',
    fontWeight: '500',
    hoverBackground: 'blue-solid',
    hoverColor: 'white-light',
    hoverScale: 120,
    label: 'Button Scale',
    margin: '0',
    onClick: () => {
      console.log("se ejecuta funcion anonima");
    },
    padding: 'xs'
  }
}`,...(N=($=r.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var M,E,F;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'blue-solid',
    borderRadius: 'md',
    boxShadow: 'md',
    color: 'white-light',
    fontSize: '18',
    fontWeight: '500',
    hoverBackground: 'blue-solid',
    hoverColor: 'white-light',
    hoverScale: 100,
    label: 'Button Scale',
    margin: '0',
    onClick: () => {
      console.log("se ejecuta funcion anonima");
    },
    padding: 'xs',
    allCaps: true
  }
}`,...(F=(E=t.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const de=["ButtonCreate","ButtonCustom","ButtonDelete","ButtonIcon","ButtonInfo","ButtonScale","ButtonAllCaps"];export{t as ButtonAllCaps,a as ButtonCreate,o as ButtonCustom,n as ButtonDelete,u as ButtonIcon,i as ButtonInfo,r as ButtonScale,de as __namedExportsOrder,te as default};
