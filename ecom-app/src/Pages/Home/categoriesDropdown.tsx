import React, { useState } from "react";

const CategoriesDropdown = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handlClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="border-2 rounded-md w-full md:w-32 relative ">
        <div className="p-2 flex justify-between align-middle items-center" onClick={() => setOpen(!open)}>
          {" "}
          Categories{" "} 
          <img src="/icon/triangle-down-svgrepo-com.svg" height={15} width={15} alt="" />
        </div>
      </div>
      {open && (
        <div className="flex  flex-col rounded-lg dropShadow absolute bg-white left-36">
          <div className="py-2 border-b-2 px-2 w-full md:w-32 "  onClick={handlClose}>option1</div>
          <div className="py-2 border-b-2 px-2 w-full md:w-32" onClick={handlClose}>option2</div>
          <div className="py-2 border-b-2 px-2 w-full md:w-32" onClick={handlClose}>option3</div>
          <div className="py-2 px-2 w-full md:w-32"onClick={handlClose}>option4</div>
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;
