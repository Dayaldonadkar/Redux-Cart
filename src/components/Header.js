import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../Redux/actions/action";

const Header = () => {
  const getData = useSelector((state) => state.cartreducer.carts);
  console.log(getData);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const handleActiveCart = () => {
    setActive(!active);
  };

  const del = (e) => {
    dispatch(DLT(e));
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

          <p className="absolute -right-0 -top-2">{getData.length}</p>

          {active && (
            <div className="absolute top-6 -right-3  flex items-center  bg-red-500 text-sm px-3 ">
              <div className="px-3 py-4">
                <div
                  className="flex justify-end relative left-4"
                  onClick={() => handleActiveCart()}
                >
                  <CloseIcon fontSize="small" />
                </div>
                {getData.length === 0 ? (
                  <div className="-mt-2 w-32">
                    <p>Your Cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-2 w-60 h-40 overflow-auto">
                    {getData.map((currItem) => {
                      return (
                        <div className="flex items-start space-x-5">
                          <div className="w-20 h-20">
                            <NavLink to={`/cart/${currItem.id}`}>
                              <img src={currItem.imgdata} alt="" />
                            </NavLink>
                          </div>
                          <div className="w-[60%]">
                            <p>{currItem.rname}</p>
                            <p>{currItem.price}</p>
                          </div>
                          <button onClick={() => del(currItem.id)}>Del</button>
                        </div>
                      );
                    })}

                    <p>Total: {}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
