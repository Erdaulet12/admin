import { ORDER_DELETE, ORDER_DETAIL } from "../../utils/consts";

function OrderItem() {
  return (
    <tr>
      <td>id</td>
      <td>name, phone</td>
      <td>date</td>
      <td colspan="3" class="actions-category" style={{ border: "none" }}>
        <Link to={ORDER_DETAIL} class="btn bg-success">
          Смотреть
        </Link>
        <Link to={ORDER_DELETE} class="btn bg-danger">
          Удалить
        </Link>
      </td>
    </tr>
  );
}

export default OrderItem;
