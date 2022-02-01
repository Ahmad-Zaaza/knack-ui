#!/usr/bin/env node
import inquirer from "inquirer";
import fs from "fs/promises";
import fsSync from "fs";
import path from "path";

import { fileURLToPath } from "url";

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rootPath = path.join(__dirname, "..");
const componentsPath = path.join(rootPath, "src", "components");
const stylesPath = path.join(rootPath, "src", "styles");

const jsxTemplate = `
import { ComponentPropsWithoutRef, forwardRef } from "react";
import use[NAME]Classes from "./use[NAME]Classes";

export interface I[NAME]Props extends ComponentPropsWithoutRef<"[TYPE]"> {
  
}

const [NAME] = forwardRef<HTML[CTYPE]Element, I[NAME]Props>(
  ({ className, ...delegated }, ref) => {
    const { containerClasses } = use[NAME]Classes({className});
    return (
      <[TYPE] ref={ref} className={containerClasses} {...delegated}>GENERATED FROM create.mjs</[TYPE]>
    );
  }
);

export default [NAME];

`;
const storyTemplate = `
import { ComponentStory, ComponentMeta } from "@storybook/react";

import [NAME] from "./[NAME]";

export default {
  title: "Components/[NAME]",
  component: [NAME],
  argTypes: {}
} as ComponentMeta<typeof [NAME]>;


const Template: ComponentStory<typeof [NAME]> = (args) => <[NAME] {...args} />;

export const Default = Template.bind({});
`;
const indexTemplate = `
export { default as [NAME] } from "./[NAME]";
`;

const useClassesTemplate = `
import { useMemo } from "react";
import classnames from "classnames/bind";
import styles from "../../tailwind.css";
import { I[NAME]Props } from "./[NAME]";

const clsx = classnames.bind(styles);
const use[NAME]Classes = ({className}: I[NAME]Props) => {
  const containerClasses = useMemo(
    () =>
      clsx(className),
    []
  );

  return {
    containerClasses
  };
};

export default use[NAME]Classes;
`;

const produceTemplate = (file, changes) => {
  if (!changes || Object.entries(changes).length === 0)
    throw new Error("Please add changes");
  let newFile = file;
  Object.entries(changes).forEach(([word, value]) => {
    const regex = new RegExp(`\\[${word}?\\]`, "g");

    newFile = newFile.replace(regex, value);
  });
  return newFile;
};
const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
// --- 🌟 Entry point ---
const getUserInput = async () => {
  const answers = await inquirer.prompt({
    name: "component_name",
    type: "input",
    message: "Enter component name:"
  });
  const answers2 = await inquirer.prompt({
    name: "element_type",
    type: "input",
    message: "Enter element type:"
  });
  const componentName = capitalize(answers.component_name.toLowerCase());
  const elementType = answers2.element_type.toLowerCase();

  try {
    // 📁 Make directory with the components name
    await fs.mkdir(path.join(componentsPath, componentName), {
      recursive: true
    });
    // 🆕 Make new component.tsx file
    await fs.writeFile(
      path.join(componentsPath, componentName, `${componentName}.tsx`),
      produceTemplate(jsxTemplate, {
        NAME: componentName,
        TYPE: elementType,
        CTYPE: capitalize(elementType)
      })
    );
    // 🆕 Make new storybook file
    await fs.writeFile(
      path.join(componentsPath, componentName, `${componentName}.stories.tsx`),
      produceTemplate(storyTemplate, {
        NAME: componentName
      })
    );
    // 🆕 Make index.tsx file

    await fs.writeFile(
      path.join(componentsPath, componentName, `index.tsx`),
      produceTemplate(indexTemplate, {
        NAME: componentName
      })
    );
    // Append file to index.ts
    await fs.appendFile(
      path.join(componentsPath, `index.ts`),
      `export { ${componentName} } from "./${componentName}";`
    );
    // Add useComponentClasses.tsx
    await fs.writeFile(
      path.join(
        componentsPath,
        componentName,
        `use${componentName}Classes.tsx`
      ),
      produceTemplate(useClassesTemplate, { NAME: componentName })
    );
    // 🎨 Add component styles and utilities
    await fs.writeFile(
      path.join(
        stylesPath,
        "components",
        `${componentName.toLowerCase()}.component.css`
      ),
      `@layer components {}`
    );
    await fs.writeFile(
      path.join(
        stylesPath,
        "utilities",
        `${componentName.toLowerCase()}.utilities.css`
      ),
      `@layer utilities {}`
    );
    // Update imports in layers
    const componentsLayer = fsSync
      .readFileSync(path.join(stylesPath, "layers", `componentsLayer.css`))
      .toString()
      .split("\n");
    const utilsLayer = fsSync
      .readFileSync(path.join(stylesPath, "layers", `utilsLayer.css`))
      .toString()
      .split("\n");
    componentsLayer.splice(
      1, // After tailwind import
      0,
      `@import "../components/${componentName.toLowerCase()}.component.css";`
    );
    utilsLayer.splice(
      1, // after tailwind import
      0,
      `@import "../utilities/${componentName.toLowerCase()}.utilities.css";`
    );
    const newComponentLayer = componentsLayer.join("\n");
    const newUtilsLayer = utilsLayer.join("\n");
    await fs.writeFile(
      path.join(stylesPath, "layers", `componentsLayer.css`),
      newComponentLayer
    );
    await fs.writeFile(
      path.join(stylesPath, "layers", `utilsLayer.css`),
      newUtilsLayer
    );
  } catch (error) {
    console.error(error);
  }
};

await getUserInput();
