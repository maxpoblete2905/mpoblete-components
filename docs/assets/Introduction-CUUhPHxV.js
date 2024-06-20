import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{M as s}from"./chunk-HLWAVYOI-CMhx-Ljo.js";import{useMDXComponents as r}from"./index-BnapxFVb.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DGKP6jA-.js";import"../sb-preview/runtime.js";import"./react-16-CNRis4zp.js";import"./index-DXimoRZY.js";import"./index-Dx4y3nsS.js";import"./index-DrFu-skq.js";function t(o){const n=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre"},r(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"storybook-of-mpoblete-components-for-react-components",children:"Storybook of mpoblete-components for React components"}),`
`,e.jsxs(n.p,{children:["Storybook helps you build UI components in isolation from business logic, data, and your application's context. This makes developing hard-to-reach states easier. Save these UI states as ",e.jsx(n.strong,{children:"stories"})," to revisit them during development, testing, or quality control."]}),`
`,e.jsxs(n.p,{children:[`Explore example stories now by navigating to them in the sidebar.\r
Check out their code in the `,e.jsx(n.code,{children:"./stories"}),` directory to see how they work.\r
We recommend building UIs with a `,e.jsx(n.a,{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.strong,{children:"component-driven"})})," process that starts with atomic components and ends with pages."]}),`
`,e.jsx(n.h2,{id:"how-to-create-a-reusable-component",children:"How to create a reusable component?"}),`
`,e.jsxs(n.p,{children:["Storybook automatically exports components entered within the ",e.jsx(n.code,{children:"./src/components/index.ts"})," path. Any component not exported within this index file won't be extractable from the ",e.jsx(n.code,{children:"@mpoblete/react-ui"})," library."]}),`
`,e.jsx(n.h3,{id:"component-example",children:"Component Example"}),`
`,e.jsx(n.p,{children:`How to create a story for my component?\r
Storybook allows creating stories related to our components. All parameters of our component can be edited and viewed in real-time.`}),`
`,e.jsx(n.p,{children:"Example component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from "react";\r
import "../styles/index.scss";\r
import { MyComponentProps } from "../interfaces";\r
\r
export const MyComponent: React.FC<MyComponentProps> = ({\r
  title = "Default Title",\r
  content,\r
  onAction,\r
  isDisabled = false,\r
  size = "medium",\r
  theme = "default",\r
}) => {\r
  return (\r
    <div\r
      className={\`my-component \${size} \${theme} \${\r
        isDisabled ? "disabled" : ""\r
      }\`}\r
      onClick={!isDisabled ? onAction : undefined}\r
      data-testid="my-component"\r
    >\r
      <h1>{title}</h1>\r
      <p>{content}</p>\r
    </div>\r
  );\r
};
`})}),`
`,e.jsx(n.h2,{id:"add-interfaces-and-types",children:"Add Interfaces and Types"}),`
`,e.jsx(n.p,{children:"Define your component properties using interfaces and types to ensure consistency and autocompletion in your code editor. This also makes maintaining and scaling your code easier."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export interface MyComponentProps {\r
  title?: string;\r
  content?: string;\r
  onAction?: () => void;\r
  isDisabled?: boolean;\r
  size?: "small" | "medium" | "large";\r
  theme?: "default" | "primary" | "secondary";\r
}
`})}),`
`,e.jsx(n.h2,{id:"to-style-components-in-storybook",children:"To style components in Storybook"}),`
`,e.jsx(n.p,{children:"you can import CSS or SCSS files directly into your component files or stories. Make sure to maintain an organized folder structure for styles, separating global styles from component-specific ones."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import "../styles/my-component.scss";\r
\r
export const StyledComponent: React.FC = () => (\r
  <div className="my-component custom-style">Hello World</div>\r
);
`})}),`
`,e.jsx(n.h2,{id:"you-can-create-your-own-css-file",children:"You can create your own CSS file."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`.my-component {\r
  padding: 1rem;\r
  border: 1px solid #ccc;\r
  border-radius: 4px;\r
  background-color: #f9f9f9;\r
  transition: background-color 0.3s ease;\r
}\r

`})})]})}function f(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(t,o)})):t(o)}export{f as default};
