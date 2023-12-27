import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { FaPlus, FaMinus, FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { removeAllItems } from "../../redux/cartSlice";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import PaymentForm from "../../components/paymentForm/PaymentForm";
import toast, { Toaster } from "react-hot-toast";

function Cart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allCartData.cart);
  const userInfo = useSelector((state) => state.allCartData.userInfo);

  const [cartData, setCartData] = useState(data);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOpenPay, setisOpenPay] = useState(false);

  useEffect(() => {
    setCartData(data);

    if (data.length > 0) {
      setTotalQuantity(data.reduce((obj, obj1) => obj + obj1.quentity, 0));
      setTotalPrice(
        data.reduce((obj, obj1) => obj + obj1.quentity * obj1.price, 0)
      );
    }
  }, [data]);

  function checkOutHandel() {
    if (!userInfo) {
      toast.error("Please login to checkout");
    } else {
      setisOpenPay(true);
      setPaymentLoading(true);
    }
  }

  if (cartData.length === 0) {
    return (
      <div className="flex flex-col justify-center h-[100vh] text-center">
        <p className="font-bold text-3xl">Your card is empty 😒</p>
        <Link
          to="/"
          className="flex items-center gap-1 justify-center mt-3 text-xl text-blue-700 font-bold"
        >
          <FaArrowLeftLong /> Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-[150px] md:mx-[80px] mx-[10px] ">
      <div className="flex  md:flex-row flex-col justify-between ">
        {/* left side */}
        <div>
          <div className="flex items-center justify-between py-3 border-b-2">
            <p className="font-bold text-3xl">Your Cart</p>
            <p className="font-bold">{cartData && cartData.length} items</p>
          </div>
          {cartData &&
            cartData.map((product) => {
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
                      <AiOutlineDelete
                        onClick={() => dispatch(removeItem(product.id))}
                        className="  absolute right-[0px] text-2xl cursor-pointer hover:scale-110 duration-300"
                      />
                      <div className="md:w-[35vw] w-[50vw] gap-2 flex justify-between">
                        <p className="font-bold">${product.price}</p>
                        <div className="flex gap-2 items-center cursor-pointer">
                          <FaMinus
                            onClick={() =>
                              dispatch(decreaseQuantity(product.id))
                            }
                            className="cursor-pointer"
                          />
                          <p className="border px-2 rounded-md">
                            {product.quentity}
                          </p>
                          <FaPlus
                            onClick={() =>
                              dispatch(increaseQuantity(product.id))
                            }
                            className="cursor-pointer"
                          />
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
          <div className="flex gap-8 my-4">
            <button
              onClick={() => dispatch(removeAllItems())}
              className="bg-red-600 px-4 py-1 text-white rounded-lg"
            >
              Reset Cart
            </button>
            <Link
              to="/"
              className="flex items-center gap-1 text-blue-600 font-bold"
            >
              <FaArrowLeftLong /> Shopping Continue
            </Link>
          </div>
        </div>
        {/* right side  */}

        <div className=" h-[320px] md:w-[20vw] w-[90vw] px-8 py-7 bg-gray-200 rounded-lg">
          <h1 className="font-semibold text-2xl border-b pb-5">
            Order Summary
          </h1>
          <div className="flex justify-between mt-2 mb-2">
            <span className="font-semibold text-base ">Total Item</span>
            <span className="font-bold text-sm ">{totalQuantity}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <p>Shipping charges</p>
            <p>$10</p>
          </div>

          <div className="border-t mt-4 relative">
            <div className="flex font-bold justify-between py-6 text-base ">
              <span>Total cost</span>
              <span>${totalPrice + 10}</span>
            </div>
            <button
              onClick={checkOutHandel}
              className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
            >
              Checkout
            </button>
            {isOpenPay && (
              <div className="absolute md:top-[-200px] top-[-500px] right-[-60px] ">
                <PaymentForm totalPrice={totalPrice} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Cart;
