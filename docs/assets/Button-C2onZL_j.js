import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import"./chunk-HLWAVYOI-otjlijJY.js";import{M as o}from"./index-CbN1j-cQ.js";import{useMDXComponents as s}from"./index-BnapxFVb.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-sagFbwxc.js";import"../sb-preview/runtime.js";import"./react-16-BhWW6Igw.js";import"./index-B8XB3FuZ.js";import"./index-DXimoRZY.js";import"./index-Dx4y3nsS.js";import"./index-DrFu-skq.js";function r(t){const e=Object.assign({h1:"h1",ul:"ul",li:"li",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code"},s(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Documentation/Buttons/Button"}),`
`,n.jsx(e.h1,{id:"componente-button",children:"Componente Button"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.h2,{id:"descripción",children:"Descripción"}),`
`,"Componente que renderiza un botón con la capacidad de poder hacer click sobre él"]}),`
`]}),`
`,n.jsx("br",{}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.h2,{id:"parámetros",children:"Parámetros"}),`
`,n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{children:[n.jsx(e.p,{children:"label: string"}),n.jsx("div",{className:"text-blue-800",children:n.jsx("small",{children:"Texto del botón"})})]}),n.jsxs("div",{children:[n.jsx(e.p,{children:'size: "sm" | "md" | "lg" | "xl" | "xsm" | "2xl" | "3xl" | "4xl" | "full"'}),n.jsx("div",{className:"text-blue-800",children:n.jsx("small",{children:"Tamaño del botón"})})]}),n.jsxs("div",{children:[n.jsx(e.p,{children:`color: "red" | "blue" | "green" | "black" | "white" | "yellow" | "orange"\r
| "cmpc"`}),n.jsx("div",{className:"text-blue-800",children:n.jsx("small",{children:"Color del botón"})})]}),n.jsxs("div",{children:[n.jsx(e.p,{children:"disabled: boolean"}),n.jsx("div",{className:"text-blue-800",children:n.jsx("small",{children:"Desactiva todas las acciones sobre el componente"})})]}),n.jsxs("div",{children:[n.jsx(e.p,{children:'type: "button" | "submit"'}),n.jsx("div",{className:"text-blue-800",children:n.jsx("small",{children:"Tipo de botón"})})]}),n.jsxs("div",{children:[n.jsx(e.p,{children:"onClick: () => void"}),n.jsx("div",{className:"text-blue-800",children:n.jsx("small",{children:"Click sobre el botón"})})]}),n.jsx("span",{className:"text-red-500",children:"Párametros obligatorios (*)"})]}),`
`]}),`
`]}),`
`,n.jsx("br",{}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.h3,{id:"button-component-for-source-code",children:"Button Component for Source Code"}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`\r
import "../styles/index.scss";\r
import { getReactIconByName } from "../../../icon";\r
import { CustomButtonProps } from "../interfaces";\r
import { borderRadiusClass, themeClass, sizeClass } from "../theme";\r
import { formatTextUtilities } from "../utils/formatTextUtilities";\r
import { handleDownloadExcel } from "../utils";\r
import { DownloadExcelOptions } from "../interfaces/DownloadExcelOptions";\r
\r
export const CustomButton: React.FC<CustomButtonProps> = ({\r
  label = "Button",\r
  onClick,\r
  icon,\r
  type = "button",\r
  disabled = false,\r
  size = "medium",\r
  theme = "primary",\r
  borderRedius = "sm",\r
  textUtilities = "capitalize",\r
  downloadExcel,\r
}) => {\r
  const IconComponent = getReactIconByName(icon!);\r
\r
  const handleClick = (downloadExcel: DownloadExcelOptions) => {\r
    handleDownloadExcel(downloadExcel);\r
  };\r
\r
  const handleClickButton = () => {\r
    if (downloadExcel?.active) {\r
      handleClick(downloadExcel);\r
    } else {\r
      onClick?.();\r
    }\r
  };\r
\r
  return (\r
    <button\r
      type={type}\r
      onClick={handleClickButton}\r
      disabled={disabled}\r
      data-testid="custom-button"\r
      className={\`\r
        btn-button\r
        btn \r
        \${sizeClass[size]} \r
        \${themeClass[theme]} \r
        \${borderRadiusClass[borderRedius]}\r
      \`}\r
    >\r
      {IconComponent && <IconComponent className="icon"/>}\r
      {label && formatTextUtilities(textUtilities, label)}\r
    </button>\r
  );\r
};\r

`})})]})}function f(t={}){const{wrapper:e}=Object.assign({},s(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(r,t)})):r(t)}export{f as default};
