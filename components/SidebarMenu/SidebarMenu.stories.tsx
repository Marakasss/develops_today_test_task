import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof SidebarMenu>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="p-6">
        <button
          className="px-4 py-2 bg-cyan-600 text-white rounded-lg"
          onClick={() => setIsOpen(true)}
        >
          Open Menu
        </button>

        <SidebarMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  },
};

export const CustomMenu: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    const menuItemList = [
      { name: "Dashboard", href: "/dashboard" },
      {
        name: "Settings",
        children: [
          { name: "Profile", href: "/settings/profile" },
          { name: "Notifications", href: "/settings/notifications" },
        ],
      },
      { name: "Logout", href: "/logout" },
    ];

    return (
      <div className="p-6">
        <button
          className="px-4 py-2 bg-cyan-600 text-white rounded-lg"
          onClick={() => setIsOpen(true)}
        >
          Open Menu
        </button>

        <SidebarMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          menuItemList={menuItemList}
        />
      </div>
    );
  },
};
