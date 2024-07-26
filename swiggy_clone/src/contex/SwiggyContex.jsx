import { createContext, useContext, useEffect, useState } from "react";

export const swiggyContex = createContext();

export function contexProvider() {
  return useContext(swiggyContex);
}

function saveData(cartData) {
  window.localStorage.setItem("swiggy_cart_data", JSON.stringify(cartData));
}

function AppContex({ children }) {
  const [cartData, setCartData] = useState([]);

  function addToCart(name, id, price, imgId) {
    let chackIsPresent = cartData.find((obj) => obj.id == id);
    if (chackIsPresent) {
      const newData = cartData.map((data) => {
        if (data.id === chackIsPresent.id) {
          return { ...data, qty: data.qty + 1 };
        } else {
          return data;
        }
      });
      setCartData(newData);
      saveData(newData);
    } else {
      setCartData([...cartData, { name, id, price, imgId, qty: 1 }]);
      saveData([...cartData, { name, id, price, imgId, qty: 1 }]);
    }
  }

  function increaseQty(pId) {
    const updatedData = cartData.map((item) => {
      if (item.id === pId) {
        return { ...item, qty: item.qty + 1 };
      } else {
        return item;
      }
    });
    setCartData(updatedData);
    saveData(updatedData);
  }

  function deleteProduct(pId) {
    const updatedData = cartData.filter((data) => data.id != pId);
    setCartData(updatedData);
    saveData(updatedData);
  }

  function decreaseQty(pId) {
    const updatedData = cartData.map((item) => {
      if (item.id === pId) {
        return { ...item, qty: item.qty - 1 };
      } else {
        return item;
      }
    });
    setCartData(updatedData);
    saveData(updatedData);
  }

  useEffect(() => {
    let localStorageData =
      JSON.parse(window.localStorage.getItem("swiggy_cart_data")) || [];
    setCartData(localStorageData);
  }, []);

  return (
    <swiggyContex.Provider
      value={{
        cartData,
        setCartData,
        addToCart,
        increaseQty,
        decreaseQty,
        deleteProduct,
      }}
    >
      {children}
    </swiggyContex.Provider>
  );
}

export default AppContex;
