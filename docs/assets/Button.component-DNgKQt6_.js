import{j as p}from"./jsx-runtime-DQ32znRX.js";import{h as d}from"./handlerThemeColor-Py96A-N_.js";import{B as c}from"./Button-DFxwYlNq.js";const l=({theme:a="primary",size:r="sm",label:t="button actions",onClickEvent:n,type:u="submit",AllCaps:o=!1,isneon:s=!1})=>{const e=d(a),i=` 0 0 10px ${e.textOnPrimary}, 0 0 10px ${e.textOnPrimary}, 0 0 10px ${e.primary}, 0 0 10px ${e.textOnPrimary}`,m=o?t.toUpperCase():t;return p.jsx(c,{onClick:()=>n&&n(),type:u,variant:a,size:r,style:{background:e.buttonBackground,color:e.buttonText,boxShadow:s?i:"",margin:"3px"},children:m})};try{l.displayName="ButtonComponent",l.__docgenInfo={description:"",displayName:"ButtonComponent",props:{onClickEvent:{defaultValue:null,description:"",name:"onClickEvent",required:!1,type:{name:"(() => void)"}},theme:{defaultValue:{value:"primary"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"info"'},{value:'"light"'},{value:'"dark"'}]}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},label:{defaultValue:{value:"button actions"},description:"",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:{value:"submit"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},AllCaps:{defaultValue:{value:"false"},description:"",name:"AllCaps",required:!1,type:{name:"boolean"}},customTextColor:{defaultValue:null,description:"",name:"customTextColor",required:!1,type:{name:"string"}},isneon:{defaultValue:{value:"false"},description:"",name:"isneon",required:!1,type:{name:"boolean"}}}}}catch{}export{l as B};