import { ProductPreviewCard } from "../../components";

function Home() {
  const products = [
    {
      title: "Example",
      description: "Test.",
    },
  ];

  return (
    <>
      <h1 className="home-page__title">Hello World!</h1>
      <div className="home-page__products">
        {products.map((product) => (
          <>
            <ProductPreviewCard
              title={product.title}
              description={product.description}
            />
          </>
        ))}
      </div>
    </>
  );
}

export default Home;
