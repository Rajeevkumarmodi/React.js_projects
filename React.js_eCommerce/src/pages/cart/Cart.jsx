import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useSelector } from "react-redux";
function Cart() {
  const data = useSelector((state) => state.allCartData.cart);
  const [cartData, setCartData] = useState(data);

  console.log(data);
  return (
    <div className="mt-[150px] md:mx-[80px] mx-[10px] ">
      <div className="flex  md:flex-row flex-col justify-between ">
        {/* left side */}
        <div>
          <div className="flex items-center justify-between py-3 border-b-2">
            <p className="font-bold text-3xl">Your Cart</p>
            <p className="font-bold">{cartData && cartData.length} items</p>
          </div>
          {cartData.map((product) => {
            return (
              <div
                key={product.id}
                className="w-[90vw] md:w-[60vw] flex-col my-3 py-2 md:px-[20px] bg-gray-50 rounded-lg"
              >
                <div className="flex gap-2 py-5 border-b-2 relative">
                  <img
                    className="md:w-[100px] w-[80px]  rounded-md "
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <div className="flex flex-col gap-2 ">
                    <p className="font-bold">{product.title}</p>
                    <AiOutlineDelete className="  absolute right-[0px] text-2xl cursor-pointer hover:scale-110 duration-300" />
                    <div className="md:w-[35vw] w-[50vw] gap-2 flex justify-between">
                      <p className="font-bold">${product.price}</p>
                      <div className="flex gap-2 items-center cursor-pointer">
                        <FaMinus className="cursor-pointer" />
                        <p className="border px-2 rounded-md">
                          {product.quentity}
                        </p>
                        <FaPlus className="cursor-pointer" />
                      </div>
                      <p className="font-bold">
                        ${product.price * product.quentity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* right side  */}

        <div className=" h-[320px] md:w-[20vw] w-[90vw] px-8 py-7 bg-gray-200 rounded-lg">
          <h1 className="font-semibold text-2xl border-b pb-5">
            Order Summary
          </h1>
          <div className="flex justify-between mt-2 mb-2">
            <span className="font-semibold text-base ">Total Item</span>
            <span className="font-bold text-sm ">3</span>
          </div>
          <div className="flex justify-between font-semibold">
            <p>Shipping charges</p>
            <p>$10</p>
          </div>

          <div className="border-t mt-4 ">
            <div className="flex font-bold justify-between py-6 text-base ">
              <span>Total cost</span>
              <span>$600</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
