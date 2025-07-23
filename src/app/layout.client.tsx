import LayoutSite from "@/components/layout/LayoutSite";
import { FC, ReactNode } from "react";

interface LayoutClientProps {
  children: ReactNode;
}

const LayoutClient: FC<LayoutClientProps> = ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default LayoutClient;
