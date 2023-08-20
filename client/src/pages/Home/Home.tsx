import { ProductPreviewCard } from "../../components";

function Home() {
  const products = [
    {
      title: "Product #1",
      description: "Test.",
    },
    {
      title: "Product #2",
      description: "Test.",
    },
  ];

  return (
    <>
      <h1 className="home-page__title">Hello World!</h1>
      <h2>Products:</h2>
      <div className="home-page__products">
        {products.map((product) => (
          <ProductPreviewCard
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
