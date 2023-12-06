import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
type Props = {
  heading: string;
  isSeeMore: boolean;
  isFullDesc: boolean;
};
const ScrollableCardGrid = ({ heading, isSeeMore, isFullDesc }: Props) => {
  return (
    <>
      <div className="flex justify-between align-middle content-center my-6">
        {" "}
        <h5 className="text-lg font-semibold px-4 md:px-0 ">{heading}</h5>{" "}
        {isSeeMore && (
          <div className="text-[#00a69e] font-semibold text-sm flex align-middle content-center ">
            See More <BiChevronRight className="mt-1" />{" "}
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 mb-8 ">
        <div className="flex pt-4 flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
          <div className="mx-4  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="card-image"
              width={"100%"}
            />
          </div>
          <div className="px-6 pt-3">
            <h5 className="block mb-2 font-sans text-sm md:text-md antialiased font-semibold leading-snug tracking-normal text-slate-600">
              Robinsons Summer Fruits No Added Sugar 1 Litre
            </h5>
            <p className="text-slate-500 text-sm mb-3 ">64455247458</p>{" "}
            <span className="text-2xl md:text-3xl font-bold text-slate-600 ">
              $0.83
            </span>
            <span className="text-slate-700 text-base">/each</span>
            {isFullDesc && (
              <div className="hidden md:flex flex-col lg:flex">
                {" "}
                <p className="text-[#00a69e] mt-3">
                  {" "}
                  <span className="font-semibold">Saving % </span>{" "}
                  <span>4.60</span>
                </p>
                <p>
                  <span className="font-semibold">Supplier: </span>{" "}
                  <span>Supplier</span>
                </p>
                <p>
                  <span className="font-semibold">Delivery by: </span>{" "}
                  <span>24-Jan-2022</span>
                </p>
              </div>
            )}
            <div className="flex mt-3 gap-2">
              <div className="border-slate-400 border-2 border-solid rounded-md px-4 py-3 w-full  flex justify-between">
                <div className="cursor-pointer">-</div>
                <div>1</div>
                <div className="cursor-pointer">+</div>
              </div>
              <div className="border-[#00a69e] border-2 border-solid rounded-md p-3 flex justify-center align-middle content-center ">
                <FaRegHeart
                  className="mt-1 cursor-pointer"
                  style={{ fontSize: "20px", color: "#00a69e" }}
                />
              </div>
            </div>
            <button className=" cursor-pointer rounded-md px-4 py-3 w-full my-4 flex justify-center align-middle content-center bg-[#00a69e] text-white">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex pt-4 flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
          <div className="mx-4  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="card-image"
              width={"100%"}
            />
          </div>
          <div className="px-6 pt-3">
            <h5 className="block mb-2 font-sans text-sm md:text-md antialiased font-semibold leading-snug tracking-normal text-slate-600">
              Robinsons Summer Fruits No Added Sugar 1 Litre
            </h5>
            <p className="text-slate-500 text-sm mb-3 ">64455247458</p>{" "}
            <span className="text-2xl md:text-3xl font-bold text-slate-600 ">
              $0.83
            </span>
            <span className="text-slate-700 text-base">/each</span>
            {isFullDesc && (
              <div className="hidden md:flex flex-col lg:flex">
                {" "}
                <p className="text-[#00a69e] mt-3">
                  {" "}
                  <span className="font-semibold">Saving % </span>{" "}
                  <span>4.60</span>
                </p>
                <p>
                  <span className="font-semibold">Supplier: </span>{" "}
                  <span>Supplier</span>
                </p>
                <p>
                  <span className="font-semibold">Delivery by: </span>{" "}
                  <span>24-Jan-2022</span>
                </p>
              </div>
            )}
            <div className="flex mt-3 gap-2">
              <div className="border-slate-400 border-2 border-solid rounded-md px-4 py-3 w-full  flex justify-between">
                <div className="cursor-pointer">-</div>
                <div>1</div>
                <div className="cursor-pointer">+</div>
              </div>
              <div className="border-[#00a69e] border-2 border-solid rounded-md p-3 flex justify-center align-middle content-center ">
                <FaRegHeart
                  className="mt-1 cursor-pointer"
                  style={{ fontSize: "20px", color: "#00a69e" }}
                />
              </div>
            </div>
            <div className=" cursor-pointer rounded-md px-4 py-3 w-full my-4 flex justify-center align-middle content-center bg-[#00a69e] text-white">
              Add to Cart
            </div>
          </div>
        </div>
        <div className="flex pt-4 flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
          <div className="mx-4  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="card-image"
              width={"100%"}
            />
          </div>
          <div className="px-6 pt-3">
            <h5 className="block mb-2 font-sans text-sm md:text-md antialiased font-semibold leading-snug tracking-normal text-slate-600">
              Robinsons Summer Fruits No Added Sugar 1 Litre
            </h5>
            <p className="text-slate-500 text-sm mb-3 ">64455247458</p>{" "}
            <span className="text-2xl md:text-3xl font-bold text-slate-600 ">
              $0.83
            </span>
            <span className="text-slate-700 text-base">/each</span>
            {isFullDesc && (
              <div className="hidden md:flex flex-col lg:flex">
                {" "}
                <p className="text-[#00a69e] mt-3">
                  {" "}
                  <span className="font-semibold">Saving % </span>{" "}
                  <span>4.60</span>
                </p>
                <p>
                  <span className="font-semibold">Supplier: </span>{" "}
                  <span>Supplier</span>
                </p>
                <p>
                  <span className="font-semibold">Delivery by: </span>{" "}
                  <span>24-Jan-2022</span>
                </p>
              </div>
            )}
            <div className="flex mt-3 gap-2">
              <div className="border-slate-400 border-2 border-solid rounded-md px-4 py-3 w-full  flex justify-between">
                <div className="cursor-pointer">-</div>
                <div>1</div>
                <div className="cursor-pointer">+</div>
              </div>
              <div className="border-[#00a69e] border-2 border-solid rounded-md p-3 flex justify-center align-middle content-center ">
                <FaRegHeart
                  className="mt-1 cursor-pointer"
                  style={{ fontSize: "20px", color: "#00a69e" }}
                />
              </div>
            </div>
            <div className=" cursor-pointer rounded-md px-4 py-3 w-full my-4 flex justify-center align-middle content-center bg-[#00a69e] text-white">
              Add to Cart
            </div>
          </div>
        </div>
        <div className="flex pt-4 flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
          <div className="mx-4  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="card-image"
              width={"100%"}
            />
          </div>
          <div className="px-6 pt-3">
            <h5 className="block mb-2 font-sans text-sm md:text-md antialiased font-semibold leading-snug tracking-normal text-slate-600">
              Robinsons Summer Fruits No Added Sugar 1 Litre
            </h5>
            <p className="text-slate-500 text-sm mb-3 ">64455247458</p>{" "}
            <span className="text-2xl md:text-3xl font-bold text-slate-600 ">
              $0.83
            </span>
            <span className="text-slate-700 text-base">/each</span>
            {isFullDesc && (
              <div className="hidden md:flex flex-col lg:flex">
                {" "}
                <p className="text-[#00a69e] mt-3">
                  {" "}
                  <span className="font-semibold">Saving % </span>{" "}
                  <span>4.60</span>
                </p>
                <p>
                  <span className="font-semibold">Supplier: </span>{" "}
                  <span>Supplier</span>
                </p>
                <p>
                  <span className="font-semibold">Delivery by: </span>{" "}
                  <span>24-Jan-2022</span>
                </p>
              </div>
            )}
            <div className="flex mt-3 gap-2">
              <div className="border-slate-400 border-2 border-solid rounded-md px-4 py-3 w-full  flex justify-between">
                <div className="cursor-pointer">-</div>
                <div>1</div>
                <div className="cursor-pointer">+</div>
              </div>
              <div className="border-[#00a69e] border-2 border-solid rounded-md p-3 flex justify-center align-middle content-center ">
                <FaRegHeart
                  className="mt-1 cursor-pointer"
                  style={{ fontSize: "20px", color: "#00a69e" }}
                />
              </div>
            </div>
            <div className=" cursor-pointer rounded-md px-4 py-3 w-full my-4 flex justify-center align-middle content-center bg-[#00a69e] text-white">
              Add to Cart
            </div>
          </div>
        </div>
        <div className="flex pt-4 flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
          <div className="mx-4  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="card-image"
              width={"100%"}
            />
          </div>
          <div className="px-6 pt-3">
            <h5 className="block mb-2 font-sans text-sm md:text-md antialiased font-semibold leading-snug tracking-normal text-slate-600">
              Robinsons Summer Fruits No Added Sugar 1 Litre
            </h5>
            <p className="text-slate-500 text-sm mb-3 ">64455247458</p>{" "}
            <span className="text-2xl md:text-3xl font-bold text-slate-600 ">
              $0.83
            </span>
            <span className="text-slate-700 text-base">/each</span>
            {isFullDesc && (
              <div className="hidden md:flex flex-col lg:flex">
                {" "}
                <p className="text-[#00a69e] mt-3">
                  {" "}
                  <span className="font-semibold">Saving % </span>{" "}
                  <span>4.60</span>
                </p>
                <p>
                  <span className="font-semibold">Supplier: </span>{" "}
                  <span>Supplier</span>
                </p>
                <p>
                  <span className="font-semibold">Delivery by: </span>{" "}
                  <span>24-Jan-2022</span>
                </p>
              </div>
            )}
            <div className="flex mt-3 gap-2">
              <div className="border-slate-400 border-2 border-solid rounded-md px-4 py-3 w-full  flex justify-between">
                <div className="cursor-pointer">-</div>
                <div>1</div>
                <div className="cursor-pointer">+</div>
              </div>
              <div className="border-[#00a69e] border-2 border-solid rounded-md p-3 flex justify-center align-middle content-center ">
                <FaRegHeart
                  className="mt-1 cursor-pointer"
                  style={{ fontSize: "20px", color: "#00a69e" }}
                />
              </div>
            </div>
            <div className=" cursor-pointer rounded-md px-4 py-3 w-full my-4 flex justify-center align-middle content-center bg-[#00a69e] text-white">
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollableCardGrid;
