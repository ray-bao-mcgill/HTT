import { useEffect, useState } from "react";
import { ProductPreviewCard } from "../../components";
import { fetchProducts } from "../../infrastructure";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data["products"]);
    };

    fetchData();
  }, [products]);

  return (
    <>
      <h1 className="home-page__title">Hello World!</h1>
      <h2>Products:</h2>
      <div className="home-page__products">
        {products.map((product) => (
          <ProductPreviewCard
            title={product.title}
            description={product.description}
            key={`${product.title}`}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
