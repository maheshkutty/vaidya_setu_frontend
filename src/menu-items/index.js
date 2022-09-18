import { useEffect, useState } from "react";
import dashboard from "./dashboard";
import pages from "./pages";
import utilities from "./utilities";
import docUtil from "./doc_utils";
import patUtils from "./pat_utils";
import other from "./other";
// ==============================|| MENU ITEMS ||============================== //

export function GetMenuItems(props) {
  var Mn_items = [];
  if (props.role === "doc") {
    Mn_items = [dashboard, docUtil, other];
  } else if (props.role === "pat") {
    Mn_items = [dashboard, patUtils, other];
  } else {
    Mn_items = [dashboard, pages, utilities, other];
  }
  return { items: Mn_items };
}

export default GetMenuItems;
