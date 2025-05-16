function DetailProduct() {
  return (
    <section class="block">
      <div class="container">
        <Link to={PRODUCTS} class="btn bg-danger">
          Назад
        </Link>
        <h1 class="title">Детали товара</h1>
        <div class="product-detail">
          <img src="https://fakeimg.pl/500x500" alt="" class="product-img" />
          <div class="product-detail__content">
            <h2 class="product-detail__title">name</h2>
            <p>Цена: price &#8376;</p>
            <p>Описание: description</p>
            <p>
              Категория: <span class="category-badge">category</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailProduct;
