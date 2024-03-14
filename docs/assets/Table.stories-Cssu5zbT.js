/* empty css                      */import{T as g}from"./Table.component-CYM2UyOg.js";import"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./ThemeProvider-BHT--WVz.js";import"./Form-BU-uEKGz.js";import"./index-CpCSUgdU.js";import"./Col-DvNPdkmS.js";import"./Button-DFxwYlNq.js";function b(e,r){let a="";for(let o=e;o<=r;o++){const n=Math.floor(Math.random()*12),l=Math.floor(Math.random()*28)+1;a=new Date(Date.UTC(o,n,l)).toISOString()}return a}const u=[],f=[{key:"nombre",label:"Nombre"},{key:"apellido",label:"Apellido"},{key:"email",label:"Email"},{key:"creationDate",label:"Ingreso"}],c=["Juan","María","Pedro","Ana","Carlos","Esteban","Laura","Diego","Sofía","Luis","Carmen","Javier","Rosa","Miguel","Elena","Manuel","Isabel","Fernando","Lucía","Antonio"],d=["Poblete","Pérez","Gómez","Martínez","López","Sánchez","Romero","García","Fernández","González","Rodríguez","Navarro","Jiménez","Díaz","Torres","Álvarez","Ruiz","Martín","Serrano","Molina"];for(let e=0;e<100;e++){const r=Math.floor(Math.random()*c.length),a=Math.floor(Math.random()*d.length),o=c[r],n=d[a],l=`${o.toLowerCase()}${n.toLowerCase()}${e+1}@example.com`,s=e+1,h=b(2022,2024);u.push({id:s,nombre:o,apellido:n,email:l,creationDate:h})}const E={title:"component/Table",component:g,tags:["autodocs"],parameters:{layout:"centered"}},t={args:{data:u,selectedItemIds:[],columns:f,handleCheckboxChange:function(e){console.log("data checked",e)},handleEditClick:function(e){console.log("edit ",e)},handleDeleteClick:function(e){console.log("delete",e)}}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    selectedItemIds: [],
    columns: columns,
    handleCheckboxChange: function (id: number): void {
      console.log("data checked", id);
    },
    handleEditClick: function (row: TableData): void {
      console.log("edit ", row);
    },
    handleDeleteClick: function (id: number): void {
      console.log("delete", id);
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const L=["Basices"];export{t as Basices,L as __namedExportsOrder,E as default};
