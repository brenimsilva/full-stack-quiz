import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="rounded-md shadow bg-white p-10">{children}</div>;
}
