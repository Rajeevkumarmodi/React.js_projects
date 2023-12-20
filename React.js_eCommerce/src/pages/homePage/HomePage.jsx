import React, { useEffect, useState } from "react";
import Carousel from "../../components/carousel/Carousel";
import SmallCard from "../../components/smallCard/SmallCard";
import { topRatedProducts } from "../../API/api";
function HomePage() {
  const [topRatedProductsData, setTopRatedProductsData] = useState([]);

  useEffect(() => {
    fetchTopRatedProductData();
  }, []);

  async function fetchTopRatedProductData() {
    const data = await topRatedProducts();
    setTopRatedProductsData(data);
  }

  return (
    <div className="mt-[130px] md:mx-[80px] mx-[10px]">
      <Carousel />

      {/* top rated products */}
      <div>
        <p className="border-b-2 border-gray-400 py-2 font-bodyFont font-bold text-xl">
          Top Rated Products
        </p>
        <div className="py-8 flex gap-7">
          <SmallCard topRatedProductsData={topRatedProductsData} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
