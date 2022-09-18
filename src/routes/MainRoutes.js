import { lazy } from "react";
import RequireAuth from "RequireAuth";
// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";

// dashboard routing
const DashboardDefault = Loadable(
  lazy(() => import("views/dashboard/Default"))
);


// utilities routing
const UtilsTypography = Loadable(
  lazy(() => import("views/utilities/vadiyaSetu.js"))
);
const UtilsMedicalRecord = Loadable(
  lazy(() => import("views/utilities/MedicalRecord"))
);
const Utilspastpatient = Loadable(
  lazy(() => import("views/utilities/pastpatient"))
);
const Utilscurrpatient = Loadable(
  lazy(() => import("views/utilities/currPatient"))
);
const UtilsShadow = Loadable(lazy(() => import("views/utilities/Shadow")));
const UtilsPastApproval = Loadable(
  lazy(() => import("views/utilities/PastApprovals"))
);
const UtilsPendingApprovals = Loadable(
  lazy(() => import("views/utilities/PendApprov"))
);
const Test = Loadable(lazy(() => import("views/utilities/test.js")));
const UtilsScanner = Loadable(lazy(() => import("views/utilities/Scanner")));
const UtilsPatientRecord = Loadable(
  lazy(() => import("views/utilities/PatientRecord"))
);



// sample page routing
const SamplePage = Loadable(lazy(() => import("views/sample-page")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: "utils",
      children: [
        {
          path: "vadiyasetu-card",
          element: <RequireAuth><UtilsTypography /></RequireAuth>,
        },
      ],
    },

    {
      path: "utils",
      children: [
        {
          path: "Medical-Records",
          element: <UtilsMedicalRecord />,
        },
      ],
    },
    {
      path: "utils",
      children: [
        {
          path: "patient-history",
          element: <Utilspastpatient />,
        },
      ],
    },
    {
      path: "utils",
      children: [
        {
          path: "curr-patient",
          element: <Utilscurrpatient />,
        },
      ],
    },
    {
      path: "utils",
      children: [
        {
          path: "scanner",
          element: <UtilsScanner />,
        },
      ],
    },
    {
      path: "utils",
      children: [
        {
          path: "util-shadow",
          element: <UtilsShadow />,
        },
      ],
    },
    {
      path: "utils",
      children: [
        {
          path: "patient-record",
          element: <UtilsPatientRecord />,
        },
      ],
    },
    {
      path: "utils",
      children: [
        {
          path: "pending-approval",
          element: <RequireAuth><UtilsPendingApprovals /></RequireAuth>,
        },
      ],
    },
    {
      path: "utils",
      children: [
        {
          path: "approval-history",
          element: <UtilsPastApproval />,
        },
      ],
    },
    {
      path: "sample-page",
      element: <SamplePage />,
    },
  ],
};

export default MainRoutes;
