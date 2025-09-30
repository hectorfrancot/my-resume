import type { Meta, StoryObj } from "@storybook/react";
import AIPortfolioInfo from "./AIPortfolioInfo";

const meta = {
  title: "Components/AIPortfolioInfo",
  component: AIPortfolioInfo,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Special section highlighting the AI-assisted development of this portfolio, showcasing modern development practices.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AIPortfolioInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Default AI Portfolio Info section with GitHub Copilot collaboration details.",
      },
    },
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        story: "AI Portfolio Info section in dark mode.",
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
