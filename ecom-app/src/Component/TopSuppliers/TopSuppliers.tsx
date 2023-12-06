import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
type Props = {
  heading: string;
};
const TopSuppliers = ({ heading }: Props) => {
  return (
    <>
      <div className="flex justify-between align-middle content-center my-6">
        {" "}
        <h5 className="text-lg font-semibold px-4 md:px-0 ">{heading}</h5>{" "}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 mb-8 ">
        <div className="flex pt-2 flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
          <div className="mx-2  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="card-image"
              width={"100%"}
            />
          </div>
          <div className="flex flex-col px-3 py-3 gap-2 font-semibold">
            <p className="text-sm font-semibold">Bechtel Corporation</p>
            <div className="flex justify-between content-center align-middle">
              {" "}
              <p className="text-xs text-[#00a69e]">10096 of2347 </p>
              <p className="text-xs"> per 2 years</p>
            </div>
          </div>
        </div>
        <div className="flex pt-2 flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
          <div className="mx-2  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="card-image"
              width={"100%"}
            />
          </div>
          <div className="flex flex-col px-3 py-3 gap-2 font-semibold">
            <p className="text-sm font-semibold">Bechtel Corporation</p>
            <div className="flex justify-between content-center align-middle">
              {" "}
              <p className="text-xs text-[#00a69e]">10096 of2347 </p>
              <p className="text-xs"> per 2 years</p>
            </div>
          </div>
        </div>
        <div className="flex pt-2 flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
          <div className="mx-2  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="card-image"
              width={"100%"}
            />
          </div>
          <div className="flex flex-col px-3 py-3 gap-2 font-semibold">
            <p className="text-sm font-semibold">Bechtel Corporation</p>
            <div className="flex justify-between content-center align-middle">
              {" "}
              <p className="text-xs text-[#00a69e]">10096 of2347 </p>
              <p className="text-xs"> per 2 years</p>
            </div>
          </div>
        </div>
        <div className="flex pt-2 flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
          <div className="mx-2  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="card-image"
              width={"100%"}
            />
          </div>
          <div className="flex flex-col px-3 py-3 gap-2 font-semibold">
            <p className="text-sm font-semibold">Bechtel Corporation</p>
            <div className="flex justify-between content-center align-middle">
              {" "}
              <p className="text-xs text-[#00a69e]">10096 of2347 </p>
              <p className="text-xs"> per 2 years</p>
            </div>
          </div>
        </div>
        <div className="flex pt-2 flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
          <div className="mx-2  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="card-image"
              width={"100%"}
            />
          </div>
          <div className="flex flex-col px-3 py-3 gap-2 font-semibold">
            <p className="text-sm font-semibold">Bechtel Corporation</p>
            <div className="flex justify-between content-center align-middle">
              {" "}
              <p className="text-xs text-[#00a69e]">10096 of2347 </p>
              <p className="text-xs"> per 2 years</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSuppliers;
