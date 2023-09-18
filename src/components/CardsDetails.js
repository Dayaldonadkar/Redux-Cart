import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { DLT } from "../Redux/actions/action";
import { useDispatch } from "react-redux";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  // console.log(id);
  const history = useNavigate();
  const getData = useSelector((state) => state.cartreducer.carts);
  // console.log(getData);

  const dispatch = useDispatch();

  const compare = () => {
    const comparedata = getData.filter((e) => {
      return e.id == id;
    });

    console.log(comparedata);
    setData(comparedata);
  };

  const del = (e) => {
    dispatch(DLT(e));
    history("/");
  };

  useEffect(() => {
    compare();
  }, [id]);

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
            {data.map((element) => {
              return (
                <div className="w-[40%] key={id}">
                  <h1>Restaurant:{element.rname}</h1>
                  <div className="flex justify-between">
                    <div>
                      <p>Price: {element.price}</p>
                      <p>Dishes: {element.address}</p>
                      <p>Total: </p>
                    </div>

                    <div>
                      <p>Rating: {element.rating}</p>
                      <p>Order Review: {element.somedata}</p>
                      <button onClick={() => del(element.id)}>
                        Remove:del
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetails;
