import React from "react";

type Props = {
  variant?: "primary" | "secondary" | "outlined" | "ghost";
  size?: "large" | "small";
  onClick?: () => void;
  children?: string;
};

export default function Button({
  variant = "primary",
  size = "large",
  children,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`flex-none rounded-md py-2 font-bold text-white
      ${size === "large" ? "px-6" : "px-4 py-2 text-sm"} ${
        variant === "primary"
          ? "bg-red-600 hover:bg-red-500 active:bg-red-700"
          : variant === "secondary"
          ? "bg-stone-500 hover:bg-stone-400 active:bg-stone-600"
          : variant === "outlined"
          ? "border border-stone-600 bg-transparent text-stone-600 hover:bg-stone-100 active:bg-stone-200"
          : "text-stone-600 hover:bg-stone-100 active:bg-stone-200"
      }`}
    >
      {children}
    </button>
  );
}
