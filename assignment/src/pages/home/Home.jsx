import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";

function Home() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const jsonData = await res.json();
      setAllProducts(jsonData.products);
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div>
      <h2 style={{ padding: "20px" }}>All Products</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {allProducts &&
          allProducts.map((product) => {
            return <ProductCard />;
          })}
      </div>
    </div>
  );
}

export default Home;
