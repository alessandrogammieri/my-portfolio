import { NavItem } from "@/lib/types";
import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineSquares2X2,
  HiOutlineBookOpen,
  HiOutlineEnvelope
} from "react-icons/hi2";

export const menu: NavItem[] = [
  {
    href: "/",
    label: "",
    icon: HiOutlineHome,
  },
  {
    href: "/profilo",
    label: "Profilo",
    icon: HiOutlineUserCircle,
  },
  {
    href: "/progetti",
    label: "Progetti",
    icon: HiOutlineSquares2X2,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: HiOutlineBookOpen,
  },
  {
    href: "/contatti",
    label: "Contatti",
    icon: HiOutlineEnvelope,
  },
];

export default menu;
