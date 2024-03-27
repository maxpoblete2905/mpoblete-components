// ButtonComponent.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { GridComponent } from "../components/grid/Grid.component";

const meta: Meta = {
  title: "Component/Grid",
  component: GridComponent,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
    },
    col: { control: "select" },
  },
};

export default meta;

type Story = StoryObj<typeof GridComponent>;

export const GridBasic: Story = {
  args: {
    color: "dark",
    col: 12,
    children: (
      <>
        <h2>The City</h2>
        <hr />
        <p>
          Chania is the capital of the Chania region on the island of Crete. The
          city can be divided in two parts, the old town and the modern city.
        </p>
        <p>
          Resize the browser window to see how the content respond to the
          resizing.
        </p>
      </>
    ),
  },
};
