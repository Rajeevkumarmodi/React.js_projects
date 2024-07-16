import React, { useState } from "react";
import Spinner from "../../components/spinner/Spinner";
import { useSelector } from "react-redux";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineNumber, AiOutlineMail } from "react-icons/ai";
import avatar from "../../assets/avatar.png";
import { useLocation } from "react-router-dom";

function Profile() {
  const userData = useSelector((state) => state.allCartData.userInfo);
  const [loader, setLoader] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="px-3 mt-[50px] w-[100vw] h-[90vh] flex flex-col items-center justify-center">
      <h2 className="text-center py-4 text-3xl font-bold underline">Profile</h2>

      <div className="md:w-[400px] w-[300px]">
        {userData ? (
          <div className="flex flex-col  items-center gap-3 shadow-lg shadow-gray-400 rounded-lg py-6 px-2">
            <div className="flex flex-col items-center">
              <img
                className="md:w-[130px] w-[100px] rounded-full"
                src={userData.photoUrl ? userData.photoUrl : avatar}
                alt="avatar image"
              />
              <p className="flex items-center gap-2">
                <span>
                  <RxAvatar className="text-3xl" />
                </span>
                <span className=" font-bold text-xl text text-blue-600">
                  Name : {userData.name}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2">
                <span>
                  <AiOutlineMail className="md:text-3xl text-2xl" />
                </span>
                <span>Email : {userData.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <AiOutlineNumber className="md:text-3xl text-xl" />
                </span>
                <span className="text-sm">ID : {userData.userId}</span>
              </p>
            </div>
          </div>
        ) : (
          <h2>User not found</h2>
        )}
      </div>
    </div>
  );
}

export default Profile;
