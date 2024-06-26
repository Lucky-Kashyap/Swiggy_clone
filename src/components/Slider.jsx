import React, { useState } from "react";

const Slider = ({ data }) => {
  const [val, setVal] = useState(0);

  const handlePrev = () => {
    val >= 124 ? "" : setVal((prev) => prev + 31);
  };

  const handleNext = () => {
    val <= 0 ? "" : setVal((prev) => prev - 31);
  };
  // console.log(data);
  return (
    <div>
      <div className="flex justify-between mt-5">
        <h1 className="text-[#282c3f] text-4xl font-bold">
          What's on your mind?
        </h1>
        <div className="flex gap-2">
          <div
            onClick={handlePrev}
            className={
              `rounded-full cursor-pointer w-8 h-8 flex justify-center items-center ` +
              (val <= 0 ? "bg-gray-100" : "bg-gray-200")
            }
          >
            <i
              className={
                `fi text-2xl mt-1 fi-rr-arrow-small-left ` +
                (val <= 0 ? "text-gray-300" : "text-gray-800")
              }
            ></i>
          </div>
          <div
            onClick={handleNext}
            className={
              `rounded-full cursor-pointer w-8 h-8 flex justify-center items-center ` +
              (val >= 124 ? "bg-gray-100" : "bg-gray-200")
            }
          >
            <i
              className={
                `fi text-2xl mt-1 fi-rr-arrow-small-right ` +
                (val >= 124 ? "text-gray-300" : "text-gray-800")
              }
            ></i>
          </div>
        </div>
      </div>
      <div
        style={{ translate: `-${val}%` }}
        className={`flex mt-2 duration-1000`}
      >
        {data?.map((item, index) => (
          <img
            key={index}
            className="w-40"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
            alt="card"
          />
        ))}
      </div>

      <hr className="border my-4" />
    </div>
  );
};

export default Slider;
