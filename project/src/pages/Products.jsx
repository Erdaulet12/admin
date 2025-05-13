import ProductList from "../components/Products/ProductList";

function Products() {
  return (
    <section class="block">
      <div class="container">
        <div class="block-header">
          <h1 class="title">Товары</h1>
          <span class="btn bg-primary">Создать</span>
        </div>
        <ProductList />
      </div>
    </section>
  );
}

export default Products;
