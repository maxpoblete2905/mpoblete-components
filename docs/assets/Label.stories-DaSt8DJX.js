import{j as q}from"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o=({label:s,allCaps:S=!1,color:L="primary",text:k})=>q.jsx("span",{className:`label teme-${L} text-${k}`,children:S?s.toUpperCase():s});try{o.displayName="Label",o.__docgenInfo={description:"",displayName:"Label",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},allCaps:{defaultValue:{value:"false"},description:"all label caps latter",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"color label text",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"dark"'}]}},text:{defaultValue:null,description:"text size",name:"text",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extra-large"'}]}}}}}catch{}const j={title:"Component/Label",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{color:{control:"select"},text:{control:"select"}}},e={args:{label:"basic",text:"medium"}},a={args:{label:"All Caps Label",text:"medium",allCaps:!0}},r={args:{label:"Secondary label",text:"medium",color:"secondary"}},l={args:{label:"Custom label",text:"medium"}},t={args:{label:"back groud color",text:"medium"}};var n,c,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "basic",
    text: "medium"
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,d,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "All Caps Label",
    text: "medium",
    allCaps: true
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var i,b,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Secondary label",
    text: "medium",
    color: "secondary"
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,y,C;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Custom label",
    text: "medium"
  }
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var f,v,_;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "back groud color",
    text: "medium"
  }
}`,...(_=(v=t.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const N=["Basic","AllCaps","Secondary","CustomColor","BackgraundColor"];export{a as AllCaps,t as BackgraundColor,e as Basic,l as CustomColor,r as Secondary,N as __namedExportsOrder,j as default};
