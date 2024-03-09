import React from "react";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import { ToggleTheme } from "./ToggleTheme";

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-800 text-black dark:bg-black dark::text-white">
      <ToggleTheme />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <div className="container mx-auto">
            <Navbar />
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
