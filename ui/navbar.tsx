import { FC, useRef } from "react";

interface NavBarProps {
  maxWidth?: string | number;
  position?: "static" | "sticky" | "floating";
  isBlurred?: boolean;
}

const NavBar: FC<NavBarProps> = ({ maxWidth, position, isBlurred }) => {
  return <div className="w-screen h-16 bg-slate-800 static"></div>;
};

export default NavBar;
