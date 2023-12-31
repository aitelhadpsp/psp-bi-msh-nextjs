import React from "react";
import "@/styles/Globals.css";
import { ThemeProvider } from "@/Contexts/ThemeContext";
export default function layout({ children }: any) {
  return (
    <div>
      <ThemeProvider>{children}</ThemeProvider>
    </div>
  );
}
