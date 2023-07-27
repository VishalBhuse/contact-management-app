import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className=" shadow-xl h-screen w-64 p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Mgmt</h1>
      <div className="flex flex-col">
        <ul className="whitespace-pre  py-5 flex flex-col font-medium">
          <NavLink
            to={"/"}
            className="w-full mb-1 py-3 px-2 flex flex-row items-center gap-5 justify-between"
          >
            <span className="w-full flex flex-row items-center gap-5">
              <p className="bg-[#7AC555] rounded-full w-[8px] h-[8px]"></p>
              <p className="text-[16px]">Contact</p>
            </span>
          </NavLink>
          <NavLink
            to={"/charts-and-maps"}
            className="w-full mb-1 py-3 px-2 flex flex-row  items-center gap-5 "
          >
            <p className="bg-[#FFA500] rounded-full w-[8px] h-[8px]"></p>
            <p className="text-[16px]"> Charts &amp; Maps</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
