import React from "react";

const CardsDetails = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-[80%]">
        <div className="">
          <div className="flex">
            <div className="w-[20%]">
              <img
                src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
                alt=""
              />
            </div>
            <div className="w-[40%]">
              <h1>Restaurant:</h1>
              <div className="flex justify-between">
                <div>
                  <p>Price:</p>
                  <p>Dishes:</p>
                  <p>Total:</p>
                </div>

                <div>
                  <p>Rating:</p>
                  <p>Order Review:</p>
                  <p>Remove:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetails;
