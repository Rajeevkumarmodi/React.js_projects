import React, { useState } from "react";
import empty_cart_img from "../assets/empty_cart_img.avif";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

function Cart() {
  const [cartData, setCartData] = useState([1, 2, 3, 4]);
  return (
    <div>
      {cartData.length <= 0 ? (
        <div className="flex flex-col items-center gap-4 my-3">
          <img
            className="md:w-[30%] w-[60%]"
            src={empty_cart_img}
            alt="cart empty image"
          />
          <h3 className="font-bold text-xl">Your Cart is Empty</h3>
          <p className="text-center">
            You can go to home page to view more restaurants
          </p>
          <Link
            to="/"
            className="bg-[#FC8019] px-10 py-3 mt-2 text-white font-bold rounded-sm"
          >
            See Restaurants Near You
          </Link>
        </div>
      ) : (
        <div className="max-w-[700px] mx-auto">
          <div className="shadow-md m-2 rounded-sm px-2 md:px-5 py-4 border-b-2 ">
            <div className="flex justify-between border-b-2 pb-4 border-gray-300">
              <p className="font-bold">Cart Items</p>
              <button className="bg-black text-white px-4  py-1 rounded-sm">
                Clear Cart
              </button>
            </div>
            <div>
              <div className="flex items-center justify-between md:gap-5 gap-3 my-2 w-full">
                <div>
                  <img
                    className="md:w-[150px] w-[100px]"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/FOOD_CATALOG/IMAGES/CMS/2024/3/15/b943fe56-212d-4366-a085-4e24d3532b30_3776df33-e18d-46c9-a566-c697897f1d16.png"
                    alt=""
                  />
                </div>
                <div className="flex md:flex-row  flex-col items-center md:w-[80%] md:justify-between justify-center gap-2">
                  <p>Alphonso Mango Stick</p>
                  <div className="flex items-center md:gap-5 gap-3">
                    <button className="bg-[#F7F9FB] px-5 py-1 space-x-3">
                      <span className="text-xl font-bold">-</span>
                      <span className="text-xl">1</span>
                      <span className="text-xl font-bold">+</span>
                    </button>
                    <p className="font-bold text-xl">₹59.32</p>
                  </div>
                </div>
                <MdDelete className="text-red-600  text-2xl cursor-pointer " />
              </div>
            </div>
            <div className="flex justify-between border-t-2 mt-3 pt-3 font-bold text-xl">
              <p>Total</p>
              <p>₹899</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
