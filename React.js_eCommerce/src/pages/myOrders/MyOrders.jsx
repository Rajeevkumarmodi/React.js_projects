import React, { useEffect, useState } from "react";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase";
import { useSelector } from "react-redux";
import { LuCheckCircle } from "react-icons/lu";
import { Link } from "react-router-dom";

function MyOrders() {
  const userInfo = useSelector((state) => state.allCartData.userInfo);
  const [myProductData, setMyProductData] = useState([]);
  useEffect(() => {
    fetchOrderData();
  }, []);

  async function fetchOrderData() {
    await getDocs(collection(db, "allusers")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setMyProductData(
        newData && newData.filter((data) => data.userId === userInfo.userId)
      );
    });
  }
  return (
    <div className="bg-gray-200 py-4 md:px-10 px-2 rounded-lg md:mx-[80px] mx-10px mt-[150px] mb-5">
      {console.log(myProductData)}
      <div className="">
        <h3 className=" border-b-2 border-gray-400 pb-3 font-bodyFont  font-bold md:text-3xl text-xl">
          Order History
        </h3>
        {myProductData &&
          myProductData.map((item, index) => {
            return (
              <>
                <div className="">
                  <p className="py-5 text-xl">Date :- wed dec 27 2023</p>
                </div>
                {item &&
                  item.orders.map((data, index) => {
                    return (
                      <div className="flex  items-center gap-2 border-b-2 border-gray-500 pb-3">
                        <Link to={`/product/${data.id}`}>
                          <img
                            className="md:w-[120px] w-[100px] cursor-pointer rounded-md  pt-3"
                            src={data.thumbnail}
                            alt=""
                          />
                        </Link>
                        <div>
                          <p className="font-bodyFont  text-xl font-bold">
                            {data.title}
                          </p>
                          <div className="w-[50vw] flex md:flex-row flex-wrap justify-between">
                            <p>Qty : {data.quentity}</p>
                            <p>Price :- ${data.quentity * data.price}</p>
                            <p className="flex gap-2">
                              Status :-
                              <span className="flex items-center gap-1">
                                Successful{" "}
                                <LuCheckCircle className="text-green-700" />
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </>
            );
          })}
      </div>
    </div>
  );
}

export default MyOrders;

{
  /* <div className="">
<p className="py-5 text-xl">Date :- wed dec 27 2023</p>
</div>
<div className="flex  items-start gap-2">
<img
  className="md:w-[150px] w-[100px] rounded-md"
  src="https://i.dummyjson.com/data/products/1/1.jpg"
  alt=""
/>
<div>
  <p className="font-bodyFont text-base">iPhone 9</p>
  <div className="w-[50vw] flex md:flex-row flex-wrap justify-between">
    <p>Qty : 3</p>
    <p>Price :- $600</p>
    <p className="flex gap-2">
      Status :-
      <span className="flex items-center gap-1">
        Successful <LuCheckCircle className="text-green-700" />
      </span>
    </p>
  </div>
</div>
</div> */
}
