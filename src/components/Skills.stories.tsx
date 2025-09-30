import type { Meta, StoryObj } from "@storybook/react";
import Skills from "./Skills";

const meta = {
  title: "Components/Skills",
  component: Skills,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Skills section showcasing technical expertise with categorized skill sets and proficiency levels.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default Skills section with all skill categories displayed.",
      },
    },
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        story: "Skills section in dark mode.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};
