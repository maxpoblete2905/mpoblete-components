# 📁 MP Custom Components

This project is a library of custom components created with [Vite](https://vitejs.dev/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Storybook](https://storybook.js.org/).

## 🛠️ Development Server

Run `npm run storybook` to start the development server. Navigate to `http://localhost:6006/`. The application will automatically reload if you change any of the source files.

## 🔧 Creating Components

Run `npm run generate component component-name` to generate a new component using a predefined template.

## 🏗️ Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## ❓ Further Help

For more help on Vite, use `vite --help` or check out the [Vite documentation](https://vitejs.dev/guide/). For more help on Storybook, check out the [Storybook documentation](https://storybook.js.org/docs/react/get-started/introduction).

## 📦 Dependencies and Versions

- **React**: ^18.2.0
- **React DOM**: ^18.2.0
- **TypeScript**: ^5.2.2
- **Vite**: ^5.1.4
- **Storybook**: ^7.6.17

## ▶️ Running the Project

To run the project locally, follow these steps:

1. Make sure you have Node.js and npm installed on your machine.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the project dependencies.
5. After the installation is complete, run `npm run storybook` to start the development server.
6. Open your web browser and navigate to `http://localhost:6006/` to view the project.

## 📦 Exported Components

Currently, the library exports the following components:

- 🟦 **CustomButton**: A custom button component.

## 📥 Installation and Usage

To use the `CustomButton` component in your project, follow these steps:

1. **Install the library**: First, install the library using npm or yarn.

   ```sh
   npm install mp-custom-components
   ```

2. **Use component**: Secons, Import components from **mp-custom-components** and use them as in the following example.

   ```jsx
   import { CustomButton } from "mp-custom-components";

   const App = () => {
     return (
       <div>
         <CustomButton
           label="Click Me"
           icon="FcDownload"
           theme="primary"
           onClick={() => alert("Button clicked!")}
         />
       </div>
     );
   };
   ```

```
export default App;

## 📝 License

This project is licensed under the MIT License. See the LICENSE file for more details.

## 📫 Contact

For more information, visit the [documentation page](https://maxpoblete2905.github.io/mpoblete-components/?path=/docs/documentacion-general--docs) or the [repository](https://github.com/maxpoblete2905/Storybook.git).
```
