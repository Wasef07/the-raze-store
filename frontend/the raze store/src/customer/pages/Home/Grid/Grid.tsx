import React from "react";

const Grid = () => {
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className="col-span-3 row-span-12 text-white rounded-md">
        <img
          className="w-full h-full object-cover rounded-md"
          src="https://img.freepik.com/premium-photo/handsome-male-model-new-suit-beautiful-room_94707-5250.jpg?w=360"
          alt=""
        />
      </div>
      <div className="col-span-2 row-span-6 text-white rounded-md">
        <img
          className="w-full h-full object-cover rounded-md"
          src="https://cdn.shopify.com/s/files/1/0709/6129/9721/files/Untitled_design_68_8e7951a2-c1ad-4a43-ae5b-3c52647a6e8c_480x480.jpg?v=1706227965"
          alt=""
        />
      </div>
      <div className="col-span-4 row-span-6 text-white rounded-md">
        <img
          className="w-full h-full object-cover rounded-md"
          src="https://www.dhresource.com/webp/m/0x0/f2/albu/g22/M00/74/D8/rBVaEmLr6GCAW_enAANRjxhDyv8121.jpg"
          alt=""
        />
      </div>
      <div className="col-span-3 row-span-12 text-white rounded-md">
        <img
          className="w-full h-full object-cover rounded-md"
          src="https://img.freepik.com/premium-photo/beautiful-girl-model-posing-dress_713163-2.jpg?w=360"
          alt=""
        />
      </div>
      <div className="col-span-4 row-span-6 text-white rounded-md">
        <img
          className="w-full h-full object-cover rounded-md"
          src="https://media.istockphoto.com/id/2155498776/photo/woman-walking-with-shopping-bags-on-city-street.jpg?s=612x612&w=0&k=20&c=PZhKt-Y9Mq1CaJEGm-GvKS9L0ty0phtk_7d_SQP2nFQ="
          alt=""
        />
      </div>
      <div className="col-span-2 row-span-6 text-white rounded-md">
        <img
          className="w-full h-full object-cover rounded-md"
          src="https://www.manyavar.com/dw/image/v2/BJZV_PRD/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw3253c2aa/Trending%20Designs%20in%20Gold%20for%20Your%20Wedding%20Jewellery%20Ranging%20from%20Mangtika%20to%20Payal_Blog%201.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Grid;
