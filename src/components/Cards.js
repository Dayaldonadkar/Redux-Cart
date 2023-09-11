import React, { useState } from "react";
import Cardsdata from "./CardsData";
console.log(Cardsdata);

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  return (
    <div className="flex justify-center py-10">
      <div className="grid grid-cols-2  w-[80%]">
        {data.map((currElem) => {
          return (
            <div>
              <div className="py-10">
                <img className="w-[80%] h-72" src={currElem.imgdata} alt="" />
                <div className="flex flex-col px-3 space-y-2">
                  <p>{currElem.rname}</p>
                  <p>Price:{currElem.price}</p>

                  <button className="bg-blue-500 text-white w-[70%] py-2">
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
