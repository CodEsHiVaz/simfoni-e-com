import React, { useEffect } from "react";
import Select from "react-select";
import CategoriesDropdown from "./categoriesDropdown";
import ScrollableCardGrid from "../../Component/ScrollableCardGrid/ScrollableCardGrid";
import TopSuppliers from "../../Component/TopSuppliers/TopSuppliers";
import PeopleSearch from "../../Component/PeopleSearch/PeopleSearch";

type OptionType = {
  value: string;
  label: string;
};
const Home = () => {
  const options: OptionType[] = [
    { value: "Option1", label: "Option1" },
    { value: "Option2", label: "Option2" },
    { value: "Option3", label: "Option3" },
    { value: "Option4", label: "Option4" },
    { value: "Option5", label: "Option5" },
  ];
  function updateText(text:string) {
    return {
      type: "UPDATE",
      text,
    };
  }


 
  useEffect(() => {
  
  }, []);
  return (
    <>
      <div className="flex flex-wrap mx-2  pt-4">
        {/* search bar */}
        <div className=" w-full my-3  mx-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 align-middle content-center">
          <div className="relative ">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900  rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 py-2.5 px-8 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-2 align-middle content-center mt-1">
            <div className="w-full">
              <Select className="h-fit" options={options} />
            </div>
            <div className="w-full">
              <Select className="h-fit" options={options} />
            </div>
          </div>
        </div>
        {/* catagories */}
        <div className="w-full mx-3 rounded-md p-1 px-2 mb-3 bg-white">
          <CategoriesDropdown />
        </div>
        {/* Slider */}
        <div className="w-full mx-3 rounded-md my-3 bg-white">
          <img src="/icon/slider.png" height={"100%"} width={"100%"} alt="" />
        </div>
        {/* catagory slider */}
        <div className="w-full mx-3  rounded-md my-3 bg-white">
          <div className="mx-0 md:mx-0 lg:mx-40 my-10 flex flex-col">
            <p className="text-xl font-semibold ">
              {" "}
              {" best selling catagories".toUpperCase()}
            </p>

            <div className="flex overflow-x-scroll justify-between mt-10 hidescroll">
              {/* <!-- card 1 --> */}
              <div className="p-3">
                <div className="flex rounded-lg h-full  p-4 flex-col justify-between">
                  <div className="flex items-center mb-3">
                    <img
                      src="/icon/foodandBeverage.png"
                      height={"100%"}
                      width={"200"}
                      alt=""
                    />
                  </div>
                  <h2 className="text-md font-medium">Food and Beverage</h2>
                </div>
              </div>

              {/* <!-- card 2 --> */}
              <div className="p-3">
                <div className="flex rounded-lg h-full  p-4 flex-col  justify-between">
                  <div className="flex items-center mb-3">
                    <img
                      src="/icon/officeFurniture.png"
                      height={"100%"}
                      width={"200"}
                      alt=""
                    />
                  </div>
                  <h2 className="text-md font-medium">Office Furniture</h2>
                </div>
              </div>

              {/* <!-- card 3 --> */}
              <div className="p-3">
                <div className="flex rounded-lg h-full  p-4 flex-col  justify-between">
                  <div className="flex items-center mb-3">
                    <img
                      src="/icon/cleaningProducs.png"
                      height={"100%"}
                      width={"200"}
                      alt=""
                    />
                  </div>
                  <h2 className="text-md font-medium">Cleaning Producs</h2>
                </div>
              </div>
              <div className="p-3">
                <div className="flex rounded-lg h-full  p-4 flex-col  justify-between">
                  <div className="flex items-center mb-3">
                    <img
                      src="/icon/computer.png"
                      height={"100%"}
                      width={"200"}
                      alt=""
                    />
                  </div>
                  <h2 className="text-md font-medium">
                    Electrical Engineering
                  </h2>
                </div>
              </div>
              <div className="p-3">
                <div className="flex rounded-lg h-full  p-4 flex-col  justify-between">
                  <div className="flex items-center mb-3">
                    <img
                      src="/icon/office-s.png"
                      height={"100%"}
                      width={"200"}
                      alt=""
                    />
                  </div>
                  <h2 className="text-md font-medium">Office Supplies</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* best selling section */}
        <div className="flex flex-col w-full mx-3 my-3 px-0 md:px-20 lg:px-40  rounded-md  bg-white">
          <ScrollableCardGrid
            heading={"BEST SELLING ITEMS"}
            isSeeMore={false}
            isFullDesc={true}
          />
        </div>
        {/* All Items */}
        <div className="flex flex-col w-full mx-3 my-3 px-0 md:px-20 lg:px-40  rounded-md  bg-white">
          <ScrollableCardGrid
            heading={"All ITEMS"}
            isSeeMore={true}
            isFullDesc={true}
          />
        </div>
        {/* New Ariveal */}
        <div className="flex flex-col w-full mx-3 my-3 px-0 md:px-20 lg:px-40  rounded-md  bg-white">
          <ScrollableCardGrid
            heading={"NEW ARRIVALS"}
            isSeeMore={true}
            isFullDesc={false}
          />
        </div>
        {/* top Suppliers */}
        <div className="flex flex-col w-full mx-3 my-3 px-0 md:px-20 lg:px-40  rounded-md  bg-white">
          <TopSuppliers heading={"TOP SUPPLIERS"} />
        </div>
        {/* people search for */}
        <div className="flex flex-col w-full mx-3 my-3 px-0 md:px-20 lg:px-40  rounded-md  bg-white">
          <PeopleSearch heading={"PEOPLE SEARCHING FOR"} />
        </div>

        <div className="my-20 flex text-center justify-center align-bottom content-center mx-auto">
          <p>© 2022 - Simfoni</p>
        </div>
      </div>
    </>
  );
};

export default Home;
