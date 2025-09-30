import type { Meta, StoryObj } from "@storybook/react";
import Experience from "./Experience";

const meta = {
  title: "Components/Experience",
  component: Experience,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Professional experience section with timeline of work history, roles, and achievements.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Experience>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default Experience section with professional timeline.",
      },
    },
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        story: "Experience section in dark mode.",
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
