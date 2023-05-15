#!/usr/bin/env node
import inquirer from "inquirer";
import fs from "fs/promises";
import path from "path";

import { fileURLToPath } from "url";

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rootPath = path.join(__dirname, "..");
const componentsPath = path.join(rootPath, "src", "components");

const jsxTemplate = `
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styled from 'styled-components';

export interface I[NAME]Props extends ComponentPropsWithoutRef<"[TYPE]"> {
  
}

const [NAME] = forwardRef<HTML[CTYPE]Element, I[NAME]Props>(
  ({ ...delegated }, ref) => {
    return (
      <Wrapper ref={ref}  {...delegated}>[NAME] generated successfully</Wrapper>
    );
  }
);

export default [NAME];


const Wrapper = styled.[STYPE]${"``"}

`;
const storyTemplate = `
import { StoryFn, Meta } from "@storybook/react";

import [NAME] from "./[NAME]";

export default {
  title: "Components/[NAME]",
  component: [NAME],
  argTypes: {}
} as Meta<typeof [NAME]>;


const Template: StoryFn<typeof [NAME]> = (args) => <[NAME] {...args} />;

export const Default = Template.bind({});
`;
const indexTemplate = `
export { default as [NAME] } from "./[NAME]";
export { I[NAME]Props } from "./[NAME]";
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
        CTYPE: capitalize(elementType),
        STYPE: elementType
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
      `export * from "./${componentName}";`
    );
  } catch (error) {
    console.error(error);
  }
};

await getUserInput();
