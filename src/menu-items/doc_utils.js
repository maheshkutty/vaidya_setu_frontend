// assets
import {
  IconHistory,
  IconId,
  IconUserCheck,
  IconShadow,
  IconFileCheck,
  IconReportMedical,
} from "@tabler/icons";

// constant
const icons = {
  IconId,
  IconUserCheck,
  IconReportMedical,
  IconShadow,
  IconFileCheck,
  IconHistory,
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const docUtil = {
  id: "docUtil",
  title: "docUtil",
  type: "group",
  children: [
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
  ],
};

export default docUtil;
