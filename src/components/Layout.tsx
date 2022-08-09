import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children?: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <div className="h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-4">{children}</div>
    </div>
  );
}
