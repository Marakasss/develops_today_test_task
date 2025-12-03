import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Input from "./Input";

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PasswordType: Story = {
  args: {
    type: "password",
  },
};

export const TextType: Story = {
  args: {
    type: "text",
  },
};

export const NumberType: Story = {
  args: {
    type: "number",
  },
};

export const TextTypeClearable: Story = {
  args: {
    type: "text",
    clearable: true,
  },
};

export const PasswordTypeClearable: Story = {
  args: {
    type: "password",
    clearable: true,
  },
};
