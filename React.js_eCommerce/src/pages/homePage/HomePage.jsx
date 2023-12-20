import React, { useEffect, useState } from "react";
import Carousel from "../../components/carousel/Carousel";
import SmallCard from "../../components/smallCard/SmallCard";
import { topDiscountProducts, topRatedProducts } from "../../API/api";
function HomePage() {
  const [topRatedProductsData, setTopRatedProductsData] = useState([]);
  const [topDiscountProductsData, setTopDiscountProductsData] = useState([]);

  useEffect(() => {
    fetchTopRatedProductData();
    fetchTopDiscountProductData();
  }, []);

  async function fetchTopRatedProductData() {
    const data = await topRatedProducts();
    setTopRatedProductsData(data);
  }

  async function fetchTopDiscountProductData() {
    const data = await topDiscountProducts();
    setTopDiscountProductsData(data);
  }

  return (
    <div className="mt-[130px] md:mx-[80px] mx-[10px]">
      <Carousel />
      {/* top rated products */}
      <div>
        <p className="border-b-2 border-gray-400 py-2 font-bodyFont font-bold text-xl">
          Top Rated Products
        </p>
        <div className="py-8 flex flex-wrap justify-center sm:justify-start gap-6">
          <SmallCard data={topRatedProductsData} />
        </div>
      </div>

      {/* top discount products */}
      <div>
        <p className="border-b-2 border-gray-400 py-2 font-bodyFont font-bold text-xl">
          Top Discount Products
        </p>
        <div className="py-8 flex flex-wrap justify-center sm:justify-start  gap-6">
          <SmallCard data={topDiscountProductsData} />;
        </div>
      </div>
    </div>
  );
}

export default HomePage;
