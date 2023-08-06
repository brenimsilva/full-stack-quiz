import Menu from "@/app/components/Menu";
import "../../globals.css";

const buttons = [
  { iconClass: "fa-solid fa-house", route: "/", name: "HOME" },
  { iconClass: "fa-solid fa-file", route: "new", name: "new item" },
  { iconClass: "fa-solid fa-magnifying-glass", route: "/", name: "HOME" },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-background flex">
      <Menu base="/admin/dashboard" buttons={buttons} />
      {children}
    </div>
  );
}
