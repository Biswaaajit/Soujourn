/* eslint-disable react/prop-types */
import { FiMaximize2 } from "react-icons/fi";
import { PiUsersFill } from "react-icons/pi";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
function RoomIcon({ view }) {
  return (
    <div className=" flex flex-row items-center gap-5 flex-wrap justify-center lg:text-xl md:gap-8">
      <div className=" flex items-center gap-1 md:gap-3">
        <div className="border-2 border-white w-fit p-[1px]">
          <FiMaximize2 />
        </div>
        <p>
          {view?.space}m<sup>2</sup>
        </p>
      </div>
      <div className=" flex items-center gap-1 md:gap-3">
        <PiUsersFill size="25px" />
        <p>{view.guest} Guests</p>
      </div>
      <div className=" flex items-center gap-1 md:gap-3">
        <IoBed size="22px" />
        <p>{view.bed} Beds</p>
      </div>
      <div className=" flex items-center gap-1 md:gap-3">
        <FaBath size="20px" />
        <p>{view.bathroom} Bathroom</p>
      </div>
    </div>
  );
}

export default RoomIcon;
