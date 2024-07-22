import React from "react";
import FoodCategories from "../components/FoodCategories";
import TopRestaurant from "../components/TopRestaurant";
import useRestaruntData from "../utils/useRestaurantData";
import RestaurantCard from "../components/RestaurantCard";
import ButtonList from "../components/ButtonList";
import { Link } from "react-router-dom";
import LoaderSkeleton from "../components/LoaderSkeleton";
import CardSkeletons from "../components/CardSkeletons";

function Home() {
  const { restaurantCarousel, filteredRestaurants } = useRestaruntData();

  if (restaurantCarousel.length == 0 || filteredRestaurants.length == 0) {
    return (
      <div>
        <LoaderSkeleton />
        <CardSkeletons />
      </div>
    );
  }

  console.log("res", filteredRestaurants);
  return (
    <div className="mt-5 md:mx-20 mx-10">
      <h2 className="font-bold text-2xl">Hey, what's on your mind?</h2>

      <FoodCategories />
      <TopRestaurant restaurantCarousel={restaurantCarousel} />

      <div className="my-5">
        <h1 className="font-bold text-2xl pb-4">
          Restaurants with online food delivery
        </h1>
        <div>
          <ButtonList />
        </div>
        <div
          className="grid grid-cols-1 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-8 mt-8"
          data-testid="res-list"
        >
          {/* You have to write logic for NO restraunt fount here */}
          {filteredRestaurants &&
            filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.info.id}
                  key={restaurant.info.id}
                  className="pr-4"
                >
                  {/* {restaurant.info.id} */}
                  <RestaurantCard {...restaurant.info} />
                </Link>
              );
            })}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
