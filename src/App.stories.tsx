import type { Meta, StoryObj } from "@storybook/react";
import App from "./App";

const meta = {
  title: "Pages/App",
  component: App,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Complete portfolio application with all sections: Hero, About, Skills, Experience, Projects, Contact, and Footer.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullPortfolio: Story = {
  parameters: {
    docs: {
      description: {
        story: "Complete portfolio page with all sections rendered.",
      },
    },
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        story: "Complete portfolio in dark mode.",
      },
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "Complete portfolio on mobile devices.",
      },
    },
  },
};

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    docs: {
      description: {
        story: "Complete portfolio on tablet devices.",
      },
    },
  },
};
