import React, { useState } from "react";
import payment2 from "../../assets/2nd payment-method.png";
import { FaCreditCard } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import Spinner from "../../components/spinner/Spinner";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { removeAllItems } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
function PaymentForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    cardNo: "",
    expiryData: "",
    cvvNo: "",
    cardHolderName: "",
  });

  function changeHandler(e) {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  }

  function paymentHandel(e) {
    e.preventDefault();
    const { cardNo, cardHolderName, cvvNo, expiryData } = inputValue;

    if (!cardHolderName || !cardNo || !cvvNo || !expiryData) {
      toast.error("All fields are requied 😒");
    } else {
      toast.success("Your Order is Successfully Don");
      dispatch(removeAllItems());
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }

  return (
    <div className=" w-[100vw] h-[100vh] bg-gray-100 bg-opacity-80 flex items-center justify-center">
      <div className="w-[300px] bg-gray-200 px-4 py-3 rounded-lg">
        <form>
          <div className=" mt-3 flex items-center justify-between">
            <div className="flex gap-1">
              <input type="radio" checked />
              <p>Devit/Cradit card</p>
            </div>
            <div>
              <img className="w-[70px]" src={payment2} alt="" />
            </div>
          </div>
          <div className="mb-5 mt-4 relative">
            <label
              for="input-number"
              className="block text-sm font-medium mb-2"
            >
              Card number
            </label>
            <input
              name="cardNo"
              value={inputValue.cardNo}
              onChange={changeHandler}
              type="number"
              id="input-number"
              className="py-2 px-3 block w-full border-2  border-gray-300 rounded-lg text-sm focus:outline-none"
              placeholder="0000 0000 0000 0000"
            />
            <img
              className="w-[70px] absolute top-[42px] right-1"
              src={payment2}
              alt=""
            />
          </div>
          <div className="flex gap-2">
            <div className="mb-5 mt-3">
              <label
                for="input-number"
                className="block text-sm font-medium mb-2"
              >
                Expiration date
              </label>
              <input
                name="expiryData"
                value={inputValue.expiryData}
                onChange={changeHandler}
                type="month"
                id="input-number"
                className="py-2 px-3 block w-full border-2  border-gray-300 rounded-lg text-sm focus:outline-none"
                placeholder="eg-10/20"
              />
            </div>
            <div className="mb-5 mt-3 relative">
              <label
                for="input-number"
                className="block text-sm font-medium mb-2"
              >
                CVV
              </label>
              <input
                name="cvvNo"
                value={inputValue.cvvNo}
                onChange={changeHandler}
                type="number"
                id="input-number"
                className="py-2 px-3 block w-full border-2  border-gray-300 rounded-lg text-sm focus:outline-none"
                placeholder="123"
              />
              <FaCreditCard className="absolute top-[39px] right-2 text-xl" />
            </div>
          </div>
          <div>
            <div className="mb-5 mt-3">
              <label
                for="input-number"
                className="block text-sm font-medium mb-2"
              >
                Card holder name
              </label>
              <input
                name="cardHolderName"
                value={inputValue.cardHolderName}
                onChange={changeHandler}
                type="input"
                id="input-number"
                className="py-2 px-3 block w-full border-2  border-gray-300 rounded-lg text-sm focus:outline-none"
                placeholder="Rajeev kumar"
              />
            </div>
          </div>
          <div>
            <div>
              <button
                onClick={paymentHandel}
                className="flex items-center gap-1 bg-blue-600 w-full py-2 justify-center text-white font-bold rounded-lg"
              >
                <CiLock className="text-xl" />
                Pay $1000
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default PaymentForm;
