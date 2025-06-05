import OrderItem from "./OrderItem";

function OrderList() {
  return (
    <table class="table">
      <thead>
        <th>№</th>
        <th>Клиент</th>
        <th>Дата и время заказа</th>
        <th>Действие</th>
      </thead>
      <tbody>
        <OrderItem />
      </tbody>
    </table>
  );
}

export default OrderList;
