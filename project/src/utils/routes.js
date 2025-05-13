import Dashboard from "../pages/dashboard";
import Products from "../pages/Products";
import {
  DASHBOARD,
  PRODUCTS,
  PRODUCTS_CREATE,
  PRODUCTS_DELETE,
  PRODUCTS_DETAIL,
  PRODUCTS_UPDATE,
  ORDERS,
  ORDER_DELETE,
  ORDER_DETAIL,
} from "./consts";

export const routes = [
  {
    path: DASHBOARD,
    element: Dashboard,
  },
  {
    path: PRODUCTS,
    element: Products,
  },
];
