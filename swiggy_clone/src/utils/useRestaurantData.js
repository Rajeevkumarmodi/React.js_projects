import { useEffect, useState } from "react";
import { Resturant_Data_URL } from "../constrants";
import {
  FOOD_CAROUSEL,
  ITEM_CAROUSEL,
  RESTAURANT_CAROUSEL,
  RESTAURANT_DATA,
} from "../mocks/data";

const useRestaruntData = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [restaurantCarousel, setRestaurantCarousel] = useState([]);
  const [itemCarousel, setItemCarousel] = useState([]);

  useEffect(() => {
    getRestaurants();
    window.scrollTo(0, 0);
  }, []);

  async function getRestaurants() {
    const data = await fetch(Resturant_Data_URL);
    const json = await data.json();

    setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setItemCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setRestaurantCarousel(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // }
  }

  return {
    carousel,
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    setAllRestaurants,
    restaurantCarousel,
    itemCarousel,
  };
};

export default useRestaruntData;
