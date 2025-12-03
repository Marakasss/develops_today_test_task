"use client";

import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  clearable?: boolean;
  iconSize?: string;
  iconColor?: string;
  className?: string;
}
const Input = ({
  type = "text",
  clearable = false,
  iconSize = "24",
  iconColor = "#00838F",
  className,
  ...rest
}: InputProps) => {
  const [pswIsVisible, setPswIsVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const isPassword = type === "password";
  const inputType = isPassword && pswIsVisible ? "text" : type;

  const defaultInputClasses = `min-w-[280px] border border-cyan-700 text-cyan-700 rounded-2xl p-2.5 pr-12
              focus:ring bg-transparent outline-none transition-all duration-300
              focus:ring-cyan-800 focus:border-cyan-800
              focus:shadow-[0_0_12px_rgba(34,211,238,0.4)]`;

  return (
    <div className="relative w-fit">
      <input
        className={`${defaultInputClasses} ${className ?? ""}`}
        type={inputType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      />

      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
        {clearable && (
          <button className="  text-red-600 " onClick={() => setValue("")}>
            <AiOutlineCloseCircle size={12} />
          </button>
        )}
        {isPassword && (
          <button onClick={() => setPswIsVisible(!pswIsVisible)}>
            {pswIsVisible ? (
              <FaRegEye size={iconSize} color={iconColor} />
            ) : (
              <FaEyeLowVision size={iconSize} color={iconColor} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
