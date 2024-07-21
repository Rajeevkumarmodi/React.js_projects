import React from "react";
import FoodCategories from "../components/FoodCategories";
import TopRestaurant from "../components/TopRestaurant";
import useRestaruntData from "../utils/useRestaurantData";
function Home() {
  const { restaurantCarousel, itemCarousel } = useRestaruntData();
  console.log("res", restaurantCarousel);
  return (
    <div className="mt-5 md:mx-20 mx-10">
      <h2 className="font-bold text-2xl">Hey, what's on your mind?</h2>

      <FoodCategories />
      <TopRestaurant restaurantCarousel={restaurantCarousel} />
    </div>
  );
}

export default Home;
