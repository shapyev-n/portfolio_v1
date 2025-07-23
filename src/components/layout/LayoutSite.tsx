import React, { ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function LayoutSite({ children }: { children: ReactNode }) {
  return (
    <div className={scss.LayoutSite}>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
}
