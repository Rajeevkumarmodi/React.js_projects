import React, { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constrants";
const useRestaruntMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRetaurantMenu();
    window.scrollTo(0, 0);
  }, []);

  const getRetaurantMenu = async () => {
    let data = await fetch(FETCH_MENU_URL + resId);
    let json = await data.json();
    let menuData =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const info =
      json?.data?.cards[0].card?.card.info ||
      json?.data?.cards[2].card?.card.info;

    setRestaurantInfo(info);
    setRestaurantMenu(menuData);
  };

  return { restaurantInfo, restaurantMenu };
};

export default useRestaruntMenu;
