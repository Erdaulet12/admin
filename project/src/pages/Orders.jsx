function Orders() {
  return (
    <section class="block">
      <div class="container">
        <div class="block-header">
          <h1 class="title">Заказы</h1>
        </div>
        <table class="table">
          <thead>
            <th>№</th>
            <th>Клиент</th>
            <th>Дата и время заказа</th>
            <th>Действие</th>
          </thead>
          <tbody>
            <tr>
              <td>id</td>
              <td>name, phone</td>
              <td>date</td>
              <td colspan="3" class="actions-category" style="border: none;">
                <span class="btn bg-success">Смотреть</span>
                <span class="btn bg-danger">Удалить</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Orders;
