import Menu from "@/app/components/Menu";
import React from "react";
const buttons = [
  { iconClass: "fa-solid fa-house", route: "/", name: "HOME" },
  { iconClass: "fa-solid fa-file", route: "new", name: "new item" },
  { iconClass: "fa-solid fa-magnifying-glass", route: "/", name: "HOME" },
];
export default function page() {
  return (
    <div>
      <Menu buttons={buttons} base="/admin/dashboard" />
    </div>
  );
}
