import{T as l,r as s}from"./data-BP48-E1c.js";import"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-GHW6o9UK.js";const c=[{key:"nombre",label:"Nombre"},{key:"apellido",label:"Apellido"},{key:"email",label:"Email"},{key:"creationDate",label:"Ingreso"}],p={title:"component/Table",component:l,tags:["autodocs"],parameters:{layout:"centered"}},o={args:{data:s,selectedItemIds:[],columns:c,handleCheckboxChange:function(e){console.log("data checked",e)},handleEditClick:function(e){console.log("edit ",e)},handleDeleteClick:function(e){console.log("delete",e)}}};var n,t,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    data: registros,
    selectedItemIds: [],
    columns: columns,
    handleCheckboxChange: function (id: string): void {
      console.log("data checked", id);
    },
    handleEditClick: function (row: TableData): void {
      console.log("edit ", row);
    },
    handleDeleteClick: function (id: string): void {
      console.log("delete", id);
    }
  }
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const u=["Basices"];export{o as Basices,u as __namedExportsOrder,p as default};
