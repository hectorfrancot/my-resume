import type { Meta, StoryObj } from "@storybook/react";
import Contact from "./Contact";

const meta = {
  title: "Components/Contact",
  component: Contact,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Contact section with contact form, social links, and contact information.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default Contact section with form and contact details.",
      },
    },
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        story: "Contact section in dark mode.",
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
