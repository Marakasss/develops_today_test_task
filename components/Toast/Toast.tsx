"use client";

import { MdOutlineDoneOutline } from "react-icons/md";
import { MdError } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { HTMLAttributes, CSSProperties, useState, useEffect } from "react";

interface ToastProps {
  type?: "success" | "error" | "info";
  description?: string;
  style?: React.CSSProperties;
  duration?: number;
  animation?: "fade" | "slide";
}

const Toast = ({
  type = "info",
  description,
  style,
  duration = 3000,
  animation = "fade",
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const toastType = {
    success: {
      bg: "bg-green-700",
      icon: MdOutlineDoneOutline,
      description: description ?? "Here is your succes message",
    },
    error: {
      bg: "bg-red-700",
      icon: MdError,
      description: description ?? "Here is your error message",
    },
    info: {
      bg: "bg-cyan-950",
      icon: FaInfoCircle,
      description: description ?? "Here is your info message",
    },
  };

  const { bg, icon: Icon, description: text } = toastType[type];

  return (
    <div
      className={`absolute bottom-8 right-8 flex flex-col  border border-gray-500 rounded-xl min-w-[320px] p-2 
        ${bg}
        ${isVisible ? `${animation}-in` : `${animation}-out`}`}
      style={style}
    >
      <div className="self-start">
        <Icon />
      </div>
      <div className="self-center">{text}</div>
    </div>
  );
};

export default Toast;
