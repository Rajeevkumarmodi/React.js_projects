import React, { useState } from "react";
import signupImg from "../../assets/signup_img.png";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { auth } from "../../firebaseConfig/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState("password");

  function signupForm(e) {
    e.preventDefault();
    fetchSignupData();
  }

  async function fetchSignupData() {
    const { name, email, password } = inputVal;

    if (!name || !email || !password) {
      toast.error("All fields are required");
    } else if (!email.includes("@" && ".")) {
      toast.error("Please enter valid email");
    } else {
      // toast.success("signup successfull 👍");
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
          name
        );
        console.log(res);
      } catch (error) {
        console.log("error", error);
      }
    }
  }

  function handlerChange(e) {
    const { name, value } = e.target;

    setInputVal({ ...inputVal, [name]: value });
  }

  return (
    <div className=" mt-[100px] md:mt-[50px]  md:mb-0 h-[90vh] flex items-center justify-center">
      <div className="shadow-lg shadow-gray-400 rounded-lg">
        <h2 className="text-center py-2 text-2xl font-bold">Signup</h2>
        <div className="w-[80vw] flex items-center justify-between p-4">
          <div className="hidden md:block">
            <img className="w-[80%]" src={signupImg} alt="" />
          </div>
          <form className="flex flex-col items-center gap-4">
            <div className="flex flex-col ">
              <label htmlFor="name">Name</label>
              <input
                className=" py-1 md:w-[35vw] w-[70vw] border-2 border-gray-300 rounded-lg px-2 focus:outline-none shadow-md shadow-gray-200"
                type="text"
                placeholder="enter name"
                id="name"
                name="name"
                value={inputVal.name}
                onChange={(e) => handlerChange(e)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className=" py-1 md:w-[35vw] w-[70vw] border-2 border-gray-300 rounded-lg px-2 focus:outline-none shadow-md shadow-gray-200"
                type="email"
                placeholder="enter email"
                id="email"
                name="email"
                value={inputVal.email}
                onChange={(e) => handlerChange(e)}
              />
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="pass">Password</label>
              <input
                className=" py-1 md:w-[35vw] w-[70vw] border-2 border-gray-300 rounded-lg px-2 focus:outline-none shadow-md shadow-gray-200"
                type={showPassword}
                placeholder="enter password"
                id="pss"
                name="password"
                value={inputVal.password}
                onChange={(e) => handlerChange(e)}
              />
              {showPassword === "password" ? (
                <FaEye
                  className="cursor-pointer absolute right-3 top-8 text-xl"
                  onClick={() => setShowPassword("text")}
                />
              ) : (
                <FaEyeSlash
                  className="cursor-pointer absolute right-3 top-8 text-xl"
                  onClick={() => setShowPassword("password")}
                />
              )}
            </div>
            <button
              onClick={(e) => signupForm(e)}
              className="w-full bg-blue-500 py-1 px-3 rounded-lg text-white text-lg hover:shadow-md"
            >
              Signup
            </button>
            <p className="font-bodyFont text-xs md:text-lg">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-blue-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Signup;
