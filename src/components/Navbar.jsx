import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import Stay from "./Stay";
import { SlArrowDown } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showStay, setShowStay] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex flex-row flex-wrap justify-between items-center text-gray-100 px-2 md:px-12 py-2 pb-4 border-b-2 border-gray-300/10 relative">
        <div>
          <div
            className="flex flex-col lg:hidden relative text-3xl bottom-3 cursor-pointer"
            id="menu"
            onClick={() => setShowNav(true)}
          >
            <span className="font-extrabold">—</span>
            <span className="font-extrabold absolute top-2">—</span>
            <span className="font-extrabold absolute top-4">—</span>
          </div>
          <div
            className="hidden lg:flex  flex-row gap-[4vw] lg:items-center"
            id="navi"
          >
            <p
              className="cursor-pointer text-lg relative after:content-[''] after:absolute after:bg-slate-200 after:w-0 after:h-[1.5px] after:left-0 after:-bottom-[3px] hover:after:w-full after:transition-all after:duration-300 after:rounded-full"
              onClick={() => navigate("/")}
            >
              Home
            </p>
            <p
              className=" px-2 py-2 flex items-center text-lg  gap-2 cursor-pointer  relative after:content-[''] after:absolute after:bg-slate-200 after:w-0 after:h-[1.5px] after:left-[4.5px] after:bottom-[4px] hover:after:w-[60%] after:transition-all after:duration-300 after:rounded-full"
              onMouseEnter={() => setShowStay(true)}
              onMouseLeave={() => setShowStay(false)}
            >
              <span>Stay</span>
              <span className="relative top-[2px]">
                <SlArrowDown size="11px" />
              </span>
            </p>
            <p
              className="cursor-pointer text-lg relative after:content-[''] after:absolute after:bg-slate-200 after:w-0 after:h-[1.5px] after:left-0 after:-bottom-[3px] hover:after:w-full after:transition-all after:duration-300 after:rounded-full"
              onClick={() => navigate("/contact")}
            >
              Contact
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center" id="logo">
          <img src="/Logo1.png" className="w-[6rem]" />
          <p className="text-5xl  logo font-logoType">Soujourn</p>
        </div>
        <div>
          <button
            id="book"
            className=" px-3 py-1 border-2"
            onClick={() => navigate("/booking")}
          >
            Book Now
          </button>
        </div>
      </div>
      {showNav && (
        <MobileNavbar
          setShowNav={setShowNav}
          navigate={navigate}
          showNav={showNav}
        />
      )}
      {showStay && <Stay setShowStay={setShowStay} navigate={navigate} />}
    </>
  );
}

export default Navbar;
