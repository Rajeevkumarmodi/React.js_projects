import React, { useEffect, useState } from "react";
import "./allProducts.css";
import Card from "../card/Card";
import Search from "../search/Search";
import Header from "../header/Header";
import productsData from "../../productsData/productsData";
function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [filterProducts, setFilterProducts] = useState();

  // filter data
  useEffect(() => {
    const filterData = allProducts.filter((product) => {
      return (
        product.title.toLowerCase().includes(inputValue.toLowerCase()) ||
        product.category.toLowerCase().includes(inputValue.toLowerCase())
      );
    });

    console.log(filterData);
    setAllProducts(inputValue ? filterData : productsData);
  }, [inputValue]);

  // useEffect(()=>{
  //   const data =
  // },[inputValue])

  return (
    <div className="">
      <Header />
      <Search inputValue={inputValue} setInputValue={setInputValue} />
      <div className="products_container">
        {allProducts.length == 0 ? (
          <h1>Product Not Found</h1>
        ) : (
          allProducts.map((data) => {
            return (
              <Card
                key={data.id}
                title={data.title}
                price={data.price}
                img={data.thumbnail}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default AllProducts;
