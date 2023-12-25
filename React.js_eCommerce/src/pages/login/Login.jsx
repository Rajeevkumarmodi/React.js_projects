import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login_img.png";
import toast, { Toaster } from "react-hot-toast";
import { FaEyeSlash, FaEye, FaGoogle } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig/firebase";
import Spinner from "../../components/spinner/Spinner";
import { addUser } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState("password");
  const [loading, setLoading] = useState(false);
  const [loaderForGoogle, setLoaderForGoogle] = useState(false);

  async function loginForm(e) {
    e.preventDefault();
    const { email, password } = inputVal;

    if (!email || !password) {
      toast.error("All fields are required 😒");
    } else if (!email.includes("." && "@")) {
      toast.error("please enter valid email ⚠️");
    } else {
      try {
        setLoading(true);
        const res = await signInWithEmailAndPassword(auth, email, password);

        console.log(res);
        if (res.user.refreshToken) {
          localStorage.setItem("auth-token", res.user.refreshToken);
          dispatch(
            addUser({
              email: res.user.email,
              userId: res.user.uid,
              name: res.user.displayName,
              photoUrl: res.user.photoURL,
            })
          );
          toast.success("successfully login 👍");
          navigate("/");
        }
        setInputVal({
          name: "",
          email: "",
          password: "",
        });
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  }

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  async function handelGoogleLogin(e) {
    e.preventDefault();

    try {
      setLoaderForGoogle(true);
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      if (user.accessToken) {
        toast.success("User login successfully");
        dispatch(
          addUser({
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            userId: user.uid,
          })
        );
        localStorage.setItem("auth-token", user.refreshToken);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    } finally {
      setLoaderForGoogle(false);
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
            <div className="bg-blue-500 w-full rounded-lg flex justify-center  text-white text-lg py-1">
              {loading ? (
                <Spinner />
              ) : (
                <button
                  onClick={(e) => loginForm(e)}
                  className=" hover:shadow-md"
                >
                  Login
                </button>
              )}
            </div>
            <p className="font-bold my-[-5px] text-xl">-- or --</p>
            <div className="w-full bg-red-600 py-2 rounded-lg text-white flex justify-center">
              {loaderForGoogle ? (
                <Spinner />
              ) : (
                <button
                  onClick={handelGoogleLogin}
                  className="flex items-center gap-1 "
                >
                  <FaGoogle />
                  Login with Google
                </button>
              )}
            </div>
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
