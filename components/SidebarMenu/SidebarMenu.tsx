"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoCloseCircleOutline } from "react-icons/io5";

interface SidebarMenuProps {
  isOpen: boolean;
  onClose?: () => void;
  menuItemList?: MenuItem[];
}

//-------------------------------------------------------------

interface MenuItem {
  name: string;
  href?: string;
  children?: MenuItem[];
}

//-------------------------------------------------------------

const defaultMenuItemList: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    children: [
      { name: "Web Development", href: "/services/web" },
      { name: "UI/UX Design", href: "/services/design" },
      { name: "Consulting", href: "/services/consulting" },
    ],
  },
  {
    name: "Products",
    children: [
      { name: "Starter Pack", href: "/products/starter" },
      { name: "Pro Suite", href: "/products/pro" },
      { name: "Enterprise", href: "/products/enterprise" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

//#############################################################

const SidebarMenu = ({
  onClose,
  isOpen = false,
  menuItemList = defaultMenuItemList,
}: SidebarMenuProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  //-------------------------------------------------------------

  const toggleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  //-------------------------------------------------------------

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  //-------------------------------------------------------------

  const renderMenuItem = (item: MenuItem, index: number) => {
    const hasSubmenu = item.children && item.children.length > 0;
    const isSubmenuOpen = openIndex === index;

    return (
      <li
        key={item.name}
        className="w-full p-2 border border-amber-50 rounded-xl "
      >
        {item.href ? (
          <Link
            href={item.href}
            className="block hover:text-cyan-400 transition"
            onClick={onClose}
          >
            {item.name}
          </Link>
        ) : (
          <div
            onClick={() => toggleSubmenu(index)}
            className="w-full  text-left hover:text-cyan-400 transition"
          >
            {item.name}

            {hasSubmenu && isSubmenuOpen && (
              <ul
                className=" mt-3 w-full
           rounded-lg 
             flex flex-col items-center   gap-2"
              >
                {item.children?.map((child, index) =>
                  renderMenuItem(child, index)
                )}
              </ul>
            )}
          </div>
        )}
      </li>
    );
  };

  //-------------------------------------------------------------

  return createPortal(
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-999 transition-opacity"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-96  bg-linear-to-bl
                  from-gray-950 to-slate-950 text-white shadow-2xl z-9999
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <button
          onClick={onClose}
          className="p-3 rounded  hover:bg-cyan-900/30 transition"
        >
          <IoCloseCircleOutline size={22} />
        </button>
        <ul className="overflow-y-auto h-full p-4 flex flex-col gap-2">
          {menuItemList.map((item, index) => renderMenuItem(item, index))}
        </ul>
      </div>
    </>,
    document.body
  );
};
export default SidebarMenu;
