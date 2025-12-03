import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Toast from "./Toast";

const meta = {
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoType: Story = {
  args: {
    type: "info",
  },
};

export const ErrorType: Story = {
  args: {
    type: "error",
  },
};

export const SuccessType: Story = {
  args: {
    type: "success",
  },
};

export const Duration: Story = {
  args: {
    type: "success",
    duration: 6000,
  },
};

export const AnimateSlide: Story = {
  args: {
    type: "success",
    duration: 6000,
    animation: "slide",
  },
};
