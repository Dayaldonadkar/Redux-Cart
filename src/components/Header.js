import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

const Header = () => {
  const getData = useSelector((state) => state.cartreducer);
  console.log(getData);
  const [active, setActive] = useState(false);

  const handleActiveCart = () => {
    setActive(!active);
  };

  return (
    <div className="flex justify-center bg-black">
      <div className="w-[80%] text-white text-lg flex items-center justify-between">
        <div className="flex space-x-10  py-3">
          <NavLink to="/" className="">
            Home
          </NavLink>
          <NavLink to="/">Add to Cart</NavLink>
        </div>

        <div className="relative">
          <button className="" onClick={() => handleActiveCart()}>
            Cart
          </button>

          {active && (
            <div className="absolute top-6 -right-3  flex justify-center items-center  bg-red-500 text-sm w-44">
              <div className="px-3 py-4">
                <div
                  className="flex justify-end relative left-4"
                  onClick={() => handleActiveCart()}
                >
                  <CloseIcon fontSize="small" />
                </div>
                <div className="-mt-2">
                  <p>Your Cart is empty</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
