import React, { useState } from "react";
import Cardsdata from "./CardsData";
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/actions/action";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
  };

  return (
    <div className="flex justify-center py-10">
      <div className="grid grid-cols-2  w-[80%]">
        {data.map((element) => {
          return (
            <div key={element.id}>
              <div className="py-10">
                <img className="w-[80%] h-72" src={element.imgdata} alt="" />
                <div className="flex flex-col px-3 space-y-2">
                  <p>{element.rname}</p>
                  <p>Price:{element.price}</p>

                  <button
                    onClick={() => send(element)}
                    className="bg-blue-500 text-white w-[70%] py-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
