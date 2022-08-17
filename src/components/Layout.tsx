import React from "react";
import Header from "./Header";

type Props = {
  children?: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <div className="absolute inset-0 flex flex-col bg-stone-50">
      <Header />
      <div className="flex h-full overflow-y-hidden">{children}</div>
    </div>
  );
}
