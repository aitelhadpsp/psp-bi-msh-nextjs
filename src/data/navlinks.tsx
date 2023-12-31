import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import {
  FiShoppingBag,
  FiEdit,
  FiPieChart,
  FiBarChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import {
  BsKanban,
  BsBarChart,
  BsBoxSeam,
  BsCurrencyDollar,
  BsShield,
  BsChatLeft,
} from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { GiLouvrePyramid } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";
import product1 from "./product1.jpg";
import product2 from "./product2.jpg";
import product3 from "./product3.jpg";
import product4 from "./product4.jpg";
import product5 from "./product5.jpg";
import product6 from "./product6.jpg";
import product7 from "./product7.jpg";
import { GrUserSettings } from "react-icons/gr";
import product8 from "./product8.jpg";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        label: "Tableau de Bord",
        name: "home",
        icon: <FiShoppingBag />,
      },
      {
        label: "Gestion Utilisateurs",
        name: "customers",
        icon: <GrUserSettings />,
      },
    ],
  },

  {
    title: "Patients",
    links: [
      {
        label: "Liste Patients",
        name: "employees",
        icon: <IoMdContacts />,
      },

      {
        label: "Gestion Patients",
        name: "patients",
        icon: <GrUserSettings />,
      },
    ],
  },
  {
    title: "BLOGS",
    links: [
      {
        label: "Blog",
        name: "blog",
        icon: <AiOutlineCalendar />,
      },
      {
        label: "Liste Blog",
        name: "blog-list",
        icon: <BsKanban />,
      },
      {
        label: "Rédiger Blog",
        name: "add-blog",
        icon: <FiEdit />,
      },
      {
        label: "Catégories",
        name: "category",
        icon: <MdCategory />,
      },
      {
        label: "Ajouter Catégorie",
        name: "add-category",
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        label: "Messagerie",
        name: "chat",
        icon: <IoChatbubblesOutline />,
      },
      {
        label: "Rendez-vous",
        name: "calendar",
        icon: <AiOutlineCalendar />,
      },
      {
        label: "Notes",
        name: "kanban",
        icon: <BsKanban />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        label: "Ligne",
        name: "line",
        icon: <AiOutlineStock />,
      },
      {
        label: "Zone",
        name: "area",
        icon: <AiOutlineAreaChart />,
      },

      {
        label: "Barre",
        name: "bar",
        icon: <AiOutlineBarChart />,
      },
      {
        label: "Cercle",
        name: "pie",
        icon: <FiPieChart />,
      },
      {
        label: "Finance",
        name: "financial",
        icon: <RiStockLine />,
      },
      {
        label: "Couleurs",
        name: "color-mapping",
        icon: <BsBarChart />,
      },
      {
        label: "Pyramides",
        name: "pyramid",
        icon: <GiLouvrePyramid />,
      },
      {
        label: "Pile",
        name: "stacked",
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];
