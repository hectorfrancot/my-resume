import type { Meta, StoryObj } from "@storybook/react";
import SEO from "./SEO";

const meta = {
  title: "Components/SEO",
  component: SEO,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "SEO component that manages document head metadata, Open Graph tags, and JSON-LD structured data. This component is invisible but crucial for search optimization.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SEO>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Default SEO with standard meta information.",
      },
    },
  },
  render: (args) => (
    <div
      style={{
        padding: "20px",
        border: "2px dashed #ccc",
        borderRadius: "8px",
      }}
    >
      <SEO {...args} />
      <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
        📄 SEO Component is active (invisible) - Check browser dev tools to see
        updated meta tags
      </p>
    </div>
  ),
};

export const CustomTitle: Story = {
  args: {
    title: "Custom Page Title - Portfolio",
    description: "Custom description for this specific page",
    keywords: "custom, keywords, portfolio",
  },
  parameters: {
    docs: {
      description: {
        story: "SEO component with custom title, description, and keywords.",
      },
    },
  },
  render: (args) => (
    <div
      style={{
        padding: "20px",
        border: "2px dashed #ccc",
        borderRadius: "8px",
      }}
    >
      <SEO {...args} />
      <div style={{ color: "#666", fontSize: "14px" }}>
        <p>
          <strong>📄 Custom SEO Active:</strong>
        </p>
        <p>
          <strong>Title:</strong> {args.title}
        </p>
        <p>
          <strong>Description:</strong> {args.description}
        </p>
        <p>
          <strong>Keywords:</strong> {args.keywords}
        </p>
      </div>
    </div>
  ),
};

export const WithJSONLD: Story = {
  args: {
    title: "Portfolio with Structured Data",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Héctor Franco",
      jobTitle: "Senior Full Stack Developer",
      url: "https://hectorfrancot.github.io",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "SEO component with JSON-LD structured data for better search engine understanding.",
      },
    },
  },
  render: (args) => (
    <div
      style={{
        padding: "20px",
        border: "2px dashed #ccc",
        borderRadius: "8px",
      }}
    >
      <SEO {...args} />
      <div style={{ color: "#666", fontSize: "14px" }}>
        <p>
          <strong>🔍 SEO with JSON-LD Active</strong>
        </p>
        <p>
          <strong>Structured Data:</strong>
        </p>
        <pre
          style={{
            fontSize: "12px",
            background: "#f5f5f5",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          {JSON.stringify(args.jsonLd, null, 2)}
        </pre>
      </div>
    </div>
  ),
};
