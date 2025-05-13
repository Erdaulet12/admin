import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <table class="table">
      <thead>
        <th>№</th>
        <th>Название</th>
        <th>Действие</th>
      </thead>
      <tbody>
        <ProductItem />
      </tbody>
    </table>
  );
}

export default ProductList;
