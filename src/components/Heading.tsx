import React from "react";

type Props = {
  children?: string;
};

export default function Heading({ children }: Props) {
  return <h1 className="mb-8 text-4xl font-bold">{children}</h1>;
}
