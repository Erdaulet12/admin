import { Link } from "react-router-dom";
import {
  PRODUCTS_DETAIL,
  PRODUCTS_UPDATE,
  PRODUCTS_DELETE,
} from "../../utils/consts";

function ProductItem() {
  return (
    <tr>
      <td>id</td>
      <td>name</td>
      <td colspan="3" class="actions-products" style={{ border: "none" }}>
        <Link to={PRODUCTS_DETAIL} class="btn bg-success">
          Смотреть
        </Link>
        <Link to={PRODUCTS_UPDATE} class="btn bg-warning">
          Изменить
        </Link>
        <Link to={PRODUCTS_DELETE} class="btn bg-danger">
          Удалить
        </Link>
      </td>
    </tr>
  );
}

export default ProductItem;
