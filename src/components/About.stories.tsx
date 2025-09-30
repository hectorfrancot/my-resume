import type { Meta, StoryObj } from "@storybook/react";
import About from "./About";

const meta = {
  title: "Components/About",
  component: About,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "About section displaying personal information, professional summary, and key highlights.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Default About section with personal information and highlights.",
      },
    },
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        story: "About section in dark mode.",
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
