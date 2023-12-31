import { useStateContext } from "@/Contexts/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type props={
    title: string,
    href: string,
    icon:ReactNode
} 

export default function NavLink(props: props) {
    const pathname = usePathname()
    const active = pathname.startsWith(props.title)
    const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  return (
    <Link
    href={"."+`${props.href}`}
    onClick={handleCloseSideBar}
    style={{
      backgroundColor: active  ? currentColor : "",
    }}
    className={
        active ? "activeLink" : "normalLink"
    }
  >
    {props.icon}
    <span className="">{props.title}</span>
  </Link>
  )
}