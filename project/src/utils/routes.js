import EditProduct from "../components/Products/EditProject";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders/Orders";
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
  {
    path: PRODUCTS_CREATE,
    element: productsCreate,
  },
  {
    path: PRODUCTS_DELETE,
    element: productsDelete,
  },
  {
    path: PRODUCTS_UPDATE,
    element: EditProduct,
  },
  {
    path: ORDERS,
    element: Orders,
  },
];
