import MenuOptions from "@/components/ui/sidebar/index";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <MenuOptions />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
