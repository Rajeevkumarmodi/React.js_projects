import React, { useEffect, useState } from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { singleProduct } from "../../API/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../../components/spinner/Spinner";
import { FaCartPlus } from "react-icons/fa";

function SingleProductPage() {
  const dispatch = useDispatch();
  const id = useParams().id;
  const [singleProductData, setSingleProductData] = useState({});
  const [images, setImages] = useState([]);
  const [singleImage, setSingleImage] = useState("");
  const [initialQuentity, setInitialQuentity] = useState(1);
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    fetchSingleProductData();
  }, [id]);

  async function fetchSingleProductData() {
    setLoding(true);
    const data = await singleProduct(id);
    setSingleProductData(data);
    setImages(data.images);
    setLoding(false);
  }

  // add to cart handel function

  function handelAddToCart() {
    dispatch(
      addToCart({
        id: singleProductData.id,
        title: singleProductData.title,
        price: singleProductData.price,
        discountPercentage: singleProductData.discountPercentage,
        rating: singleProductData.rating,
        category: singleProductData.category,
        thumbnail: singleProductData.thumbnail,
        quentity: initialQuentity,
      })
    );
    toast.success(singleProductData.title + " is added");
  }

  // handelquentity function

  function handelQuentity(val) {
    if (val === 1) {
      setInitialQuentity(initialQuentity + 1);
    } else {
      if (initialQuentity === 1) {
        setInitialQuentity(1);
      } else {
        setInitialQuentity(initialQuentity - 1);
      }
    }
  }
  console.log(singleProductData);

  return (
    <div className="mt-[150px] mb-[50px] md:px-[80px] px-[10px]">
      {loding ? (
        <div className="w-full h-[80vh] flex items-center justify-center">
          <Spinner />
        </div>
      ) : !singleProductData.hasOwnProperty("id") ? (
        <div className="w-full h-[30vh] items-center flex flex-col gap-3 justify-center">
          {" "}
          <p className="text-2xl font-bold"> Product Not Found 😒</p>
          <Link
            to="/shop"
            className="flex items-center gap-1 text-white bg-blue-600 px-5 py-1 rounded-lg "
          >
            {" "}
            <FaCartPlus /> Shop Now
          </Link>
        </div>
      ) : (
        <div className="flex md:flex-row flex-col items-center gap-6">
          {/* laptop view small image */}
          <div className="hidden md:flex flex-col gap-3">
            {images &&
              images.map((image, index) => {
                return (
                  <img
                    key={index}
                    className="w-[100px] h-[50px] cursor-pointer rounded-lg"
                    onClick={() => setSingleImage(image)}
                    src={image}
                    alt=""
                  />
                );
              })}
          </div>
          <div className="shadow-lg md:w-[60%] w-[80%]  md:h-[300px] h-[200px] shadow-gray-400 p-3 rounded-lg">
            <img
              className="rounded-lg h-full w-full"
              src={singleImage ? singleImage : singleProductData.thumbnail}
              alt=""
            />
          </div>

          {/* mobile view images */}

          <div className=" md:hidden overflow-auto flex flex-row gap-2">
            {images &&
              images.map((image, index) => {
                return (
                  <img
                    key={index}
                    className="w-[80px] h-[60px] cursor-pointer rounded-lg"
                    src={image}
                    onClick={() => setSingleImage(image)}
                    alt=""
                  />
                );
              })}
          </div>
          <div>
            <p className="font-bodyFont font-bold text-2xl">
              {singleProductData.title}
            </p>
            <div className="flex flex-col gap-4 py-3">
              <div className=" flex gap-3">
                <p className="text-white px-2 rounded-lg bg-green-500">
                  {singleProductData.discountPercentage}% off
                </p>
                <del className="text-red-500">${singleProductData.price}</del>
                <p className="font-bold">
                  $
                  {(
                    singleProductData.price -
                    (singleProductData.price *
                      singleProductData.discountPercentage) /
                      100
                  ).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex  items-center bg-green-600 px-2 rounded-lg text-white gap-1">
                  <p>{singleProductData.rating}</p>
                  <IoIosStar className="text-orange-400" />
                </div>
                <IoIosStar className="text-orange-500" />
                <IoIosStar className="text-orange-500" />
                <IoIosStar className="text-orange-500" />
                <IoIosStar className="text-orange-500" />
                <IoIosStarHalf className="text-orange-500" />
              </div>
            </div>
            <div>
              <p className="font-bold">Stock :- {singleProductData.stock}</p>
              <p className="font-bold pb-3">
                Brand :- {singleProductData.brand}
              </p>
              <p className="font-bodyFont py-3">
                {singleProductData.description}
              </p>
              <p className="font-bodyFont">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                in corrupti labore minima explicabo molestiae laudantium
                suscipit.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <p
                onClick={() => handelQuentity(-1)}
                className="border-2 border-gray-400 rounded-md px-2 py-1 cursor-pointer hover:bg-gray-100"
              >
                <FaMinus />
              </p>

              <p className="border-2 border-gray-400 rounded-md px-2 py-0 cursor-pointer hover:bg-gray-100">
                {initialQuentity}
              </p>
              <p
                onClick={() => handelQuentity(1)}
                className="border-2 border-gray-400 rounded-md px-2 py-1 cursor-pointer hover:bg-gray-100"
              >
                <FaPlus />
              </p>
              <button
                onClick={handelAddToCart}
                className="bg-green-600 hover:bg-green-700 px-4 rounded-lg py-1 text-white ml-5 hover:shadow-lg shadow-gray-400"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
}

export default SingleProductPage;
