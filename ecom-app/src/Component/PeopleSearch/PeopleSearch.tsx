import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
type Props = {
  heading: string;
};
const data: string[] = [
  "Construction Helmet",
  "Cider",
  "Saws",
  "Apple Juice",
  "Construction Costume blue",
  "Tapes",
  "Construction suit",
  "Pullers",
  "Pullers",
  "Pickaxes and Crowbars",
  "Carrots",
  "Construction hammer",
  "Wrenches",
  "Screwdrivers",
  "Construction Shovels",
  "Construction Costume blue",
  "Kinoa",
  "Banana",
];
const PeopleSearch = ({ heading }: Props) => {
  return (
    <>
      <div className="flex justify-between align-middle content-center my-6">
        {" "}
        <h5 className="text-lg font-semibold px-4 md:px-0 ">{heading}</h5>{" "}
      </div>
      <div className="flex flex-wrap  gap-3 mb-8 ">
        {data.map((elem) => (
          <div className="relative grid select-none items-center whitespace-nowrap rounded-md border bg-[#eef7f6] border-[#d0eae8] py-1.5 px-3 font-sans text-xs font-bold  text-gray-700">
            <span className="text-slate-700"> {elem} </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default PeopleSearch;
