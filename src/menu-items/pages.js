// assets
import { IconKey, IconNurse, IconUsers } from "@tabler/icons";

// constant
const icons = {
  IconKey,
  IconNurse,
  IconUsers,
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: "pages",
  type: "group",
  children: [
    {
      id: "authentication",
      title: "Authentication",
      type: "collapse",
      icon: icons.IconKey,

      children: [
        {
          id: "login3",
          title: "Login",
          type: "item",
          url: "/login",
          target: true,
        },
        {
          id: "register3",
          title: "Register User",
          type: "item",
          url: "/register/user-register",
          icon: icons.IconUsers,
          target: true,
        },
        {
          id: "registerDoc3",
          title: "Register Doctor",
          type: "item",
          url: "/register/Doctor-register",
          icon: icons.IconNurse,
          target: true,
        },
      ],
    },
  ],
};

export default pages;
