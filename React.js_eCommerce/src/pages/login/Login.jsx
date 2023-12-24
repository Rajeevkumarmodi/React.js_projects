import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/login_img.png";
import toast, { Toaster } from "react-hot-toast";
import { FaEyeSlash, FaEye, FaGoogle } from "react-icons/fa";

function Login() {
  const [inputVal, setInputVal] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState("password");

  async function loginForm(e) {
    e.preventDefault();
    const { email, password } = inputVal;

    if (!email || !password) {
      toast.error("All fields are required 😒");
    } else if (!email.includes("." && "@")) {
      toast.error("please enter valid email ⚠️");
    } else {
      toast.success("login successfully 👍");
    }
  }

  function handlerChange(e) {
    const { name, value } = e.target;

    setInputVal({ ...inputVal, [name]: value });
  }

  return (
    <div className=" mt-[50px] h-[100vh] flex items-center justify-center">
      <div className="shadow-lg shadow-gray-400 rounded-lg p-5">
        <h2 className="text-center py-2 text-2xl font-bold">Login</h2>
        <div className="w-[80vw] flex items-center justify-between p-4">
          <div className="hidden md:block">
            <img className="w-[80%]" src={loginImg} alt="login image" />
          </div>
          <form className="flex flex-col items-center gap-4">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className="md:w-[35vw] w-[70vw] py-2 border-2 border-gray-300 rounded-lg px-2 focus:outline-none shadow-md shadow-gray-200"
                type="email"
                placeholder="enter email"
                id="email"
                name="email"
                value={inputVal.email}
                onChange={(e) => handlerChange(e)}
              />
            </div>
            <div className="flex flex-col relative ">
              <label htmlFor="pass">Password</label>
              <input
                className="md:w-[35vw] w-[70vw] py-2 border-2 border-gray-300 rounded-lg px-2 focus:outline-none shadow-md shadow-gray-200"
                type={showPassword}
                placeholder="enter password"
                id="pss"
                name="password"
                value={inputVal.password}
                onChange={(e) => handlerChange(e)}
              />
              {showPassword === "password" ? (
                <FaEye
                  className="cursor-pointer absolute right-3 top-9 text-xl"
                  onClick={() => setShowPassword("text")}
                />
              ) : (
                <FaEyeSlash
                  className="cursor-pointer absolute right-3 top-9 text-xl"
                  onClick={() => setShowPassword("password")}
                />
              )}
            </div>
            <button
              onClick={(e) => loginForm(e)}
              className="bg-blue-500 w-full py-1 px-10 rounded-lg text-white text-lg hover:shadow-md"
            >
              Login
            </button>
            <p className="font-bold my-[-5px] text-xl">-- or --</p>
            <button className="bg-red-600  text-white justify-center w-full py-2 rounded-lg flex items-center gap-1 ">
              <FaGoogle />
              Login with Google
            </button>
            <p className="font-bodyFont md:text-lg text-xs">
              Dont`t have an account?{" "}
              <Link to="/signup" className="text-blue-600 font-bold">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Login;
