// assets
import {IconHistory,IconId, IconUserCheck, IconShadow, IconFileCheck,IconReportMedical } from '@tabler/icons';
const icons = {
  IconId,
  IconUserCheck,
  IconReportMedical,
  IconShadow,
  IconFileCheck,
  IconHistory,
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: "utilities",
  title: "Utilities",
  type: "group",
  children: [
    {
      id: "util-typography",
      title: "VadiyaSetu Card ",
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
      id: "util-patient-history",
      title: "Patient History",
      type: "item",
      url: "/utils/patient-history",
      icon: icons.IconHistory,
      breadcrumbs: false,
    },
    {
      id: "util-curr-patient",
      title: "Current Patient Details",
      type: "item",
      url: "/utils/curr-patient",
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
          url: "/patient/pendingApprovals",
          breadcrumbs: false,
        },
        {
          id: "material-Approvals-History",
          title: "Approvals History",
          type: "item",
          url: "/icons/material-icons",
          breadcrumbs: false,
        },
      ],
    },
  ],
};

export default utilities;
