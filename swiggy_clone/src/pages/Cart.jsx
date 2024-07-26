import React, { useEffect, useState } from "react";
import empty_cart_img from "../assets/empty_cart_img.avif";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { contexProvider } from "../contex/SwiggyContex";
import { IMG_CDN_URL } from "../constrants";

function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartData } = contexProvider();

  useEffect(() => {
    let addedPrice = cartData.reduce(
      (prevPrice, currentPrice) => prevPrice + currentPrice.price,
      0
    );
    setTotalPrice(addedPrice);
  }, []);

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

            <div className="space-y-8">
              {cartData?.map((data) => (
                <div>
                  <div className="flex items-center justify-between md:gap-5 gap-3 my-2 w-full">
                    <div>
                      <img
                        className="md:w-[150px] w-[100px] rounded-md"
                        src={IMG_CDN_URL + data.imgId}
                        alt="cart product image"
                      />
                    </div>
                    <div className="flex md:flex-row  flex-col items-center md:w-[80%] md:justify-between justify-center gap-2">
                      <p>{data.name}</p>
                      <div className="flex items-center md:gap-5 gap-3">
                        <button className="bg-[#F7F9FB] px-5 py-1 space-x-3">
                          <span className="text-xl font-bold">-</span>
                          <span className="text-xl">{data.qty}</span>
                          <span className="text-xl font-bold">+</span>
                        </button>
                        <p className="font-bold text-xl">₹{data.price}</p>
                      </div>
                    </div>
                    <MdDelete className="text-red-600  text-2xl cursor-pointer " />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between border-t-2 mt-3 pt-3 font-bold text-xl">
              <p>Total</p>
              <p>₹{totalPrice}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
