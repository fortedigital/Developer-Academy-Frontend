import React from "react";

type Props = {
  variant?: "primary" | "secondary" | "outlined";
  onClick?: () => void;
  children?: string;
};

export default function Button({
  variant = "primary",
  children,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-6 py-2 font-bold text-white ${
        variant === "primary"
          ? "bg-red-600 hover:bg-red-500 active:bg-red-700"
          : variant === "secondary"
          ? "bg-stone-500 hover:bg-stone-400 active:bg-stone-600"
          : "border border-stone-600 bg-white text-stone-600 hover:bg-stone-100 active:bg-stone-200"
      }`}
    >
      {children}
    </button>
  );
}
