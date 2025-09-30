import type { Meta, StoryObj } from "@storybook/react";
import Projects from "./Projects";

const meta = {
  title: "Components/Projects",
  component: Projects,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Projects section displaying featured work with interactive cards, technology stacks, and project links.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Projects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Default Projects section with featured projects displayed as interactive cards.",
      },
    },
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        story: "Projects section in dark mode.",
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
