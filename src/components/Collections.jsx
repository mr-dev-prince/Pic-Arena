import React from "react";

const Collections = () => {
  return (
    <div className="min-h-screen h-screen px-32 bg-gray-900 pt-8">
      <div className="w-full h-full gap-5 flex flex-col">
        <div className="flex h-[80%] w-full gap-10">
          <div className="h-inherit w-[30%] outline"></div>
          <div className="h-full w-[30%] flex flex-col gap-4">
            <div className="outline h-[50%]"></div>
            <div className="outline h-[50%]"></div>
          </div>
          <div className="h-full w-[40%] flex flex-col gap-4">
            <div className="outline h-[50%]"></div>
            <div className="outline h-[50%]"></div>
          </div>
        </div>
        <div className="outline h-[20%] w-full "></div>
      </div>
    </div>
  );
};

export default Collections;
