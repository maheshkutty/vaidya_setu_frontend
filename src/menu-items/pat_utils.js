// assets
import {
  IconHistory,
  IconId,
  IconUserCheck,
  IconShadow,
  IconFileCheck,
  IconReportMedical,
} from "@tabler/icons";
const icons = {
  IconId,
  IconUserCheck,
  IconReportMedical,
  IconShadow,
  IconFileCheck,
  IconHistory,
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const patUtils = {
  id: "patUtils",
  title: "patUtils",
  type: "group",
  children: [
    {
      id: "util-typography",
      title: "VaidyaSetu Card ",
      type: "item",
      url: "/utils/vadiyasetu-card",
      icon: icons.IconId,
      breadcrumbs: false,
    },
    {
      id: "util-Medical-Records",
      title: "Medical Records",
      type: "item",
      url: "/utils/Medical-Records",
      icon: icons.IconReportMedical,
      breadcrumbs: false,
    },

    {
      id: "approvals",
      title: "Approvals",
      type: "collapse",
      icon: icons.IconFileCheck,
      children: [
        {
          id: "tabler-Pending-Approvals",
          title: "Pending Approvals",
          type: "item",
          url: "/utils/pending-approval",
          breadcrumbs: false,
        },
        {
          id: "material-Approvals-History",
          title: "Approvals History",
          type: "item",
          url: "/utils/approval-history",
          breadcrumbs: false,
        },
      ],
    },
  ],
};

export default patUtils;
