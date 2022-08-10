import React from "react";
import Header from "./Header";

type Props = {
  children?: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex h-screen flex-col bg-stone-50">
      <Header />
      <div className="grow">{children}</div>
    </div>
  );
}
