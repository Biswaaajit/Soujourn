import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

/* eslint-disable react/prop-types */
function MobileNavbar({ setShowNav, navigate, showNav }) {
  const [stay, setStay] = useState(false);
  useGSAP(
    () => {
      gsap.from("#nav", {
        x: -400,
        opacity: 0,
        ease: "power2.in",
        duration: 0.7,
      });
    },
    { dependencies: [showNav], revertOnUpdate: true }
  );
  function handleHome(x) {
    if (x === 1) navigate("/");
    if (x === 2) navigate("/contact");
    if (x === 3) navigate("/booking");
    setShowNav(false);
  }
  function handleRoom(x) {
    if (x === 1) navigate("/deluxe");
    if (x === 2) navigate("/double");

    if (x === 3) navigate("/prestige");
    if (x === 4) navigate("/signature");
    setShowNav(false);
  }
  return (
    <div
      className="w-full bg-zinc-900/60 h-[110vh] absolute top-0 flex z-[9999]"
      id="nav1"
    >
      <div
        id="nav"
        className="w-[60%] md:w-[40%] xl:w-[30%] bg-zinc-600 h-[110vh] px-2 xl:px-4"
      >
        <div className="flex flex-row py-5 text-slate-100 items-center pl-3">
          <button
            className="h-fit text-2xl px-2 "
            onClick={() => setShowNav(false)}
          >
            x
          </button>
          <p className="text-[7vw] sm:text-[5.5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2.5vw] grow text-center transition-all">
            Soujourn
          </p>
        </div>
        <hr />
        <ul className="text-slate-100 bg-transparent my-5  bg-slate-500 pl-3 cursor-default">
          <li
            onClick={() => handleHome(1)}
            className=" text-2xl font-semibold py-3 "
          >
            Home
          </li>
          <li className=" text-2xl font-semibold py-2 flex">
            <span className=" grow py-1" onClick={() => handleHome(3)}>
              Stay
            </span>
            <button className=" px-2 pr-4" onClick={() => setStay(!stay)}>
              {!stay && <SlArrowRight size="15px" />}
              {stay && <SlArrowDown size="15px" />}
            </button>
          </li>
          {stay && (
            <li className="ml-[8%] my-3 text-lg  cursor-pointer space-y-1">
              <p onClick={() => handleRoom(1)}>Deluxe Room</p>
              <p onClick={() => handleRoom(2)}>Double Room</p>
              <p onClick={() => handleRoom(3)}>Prestige Room</p>
              <p onClick={() => handleRoom(4)}>Signature Room</p>
            </li>
          )}
          <li
            className=" text-2xl font-semibold py-3"
            onClick={() => handleHome(2)}
          >
            Contact
          </li>
        </ul>
      </div>
      <div className="grow" onClick={() => setShowNav(false)}></div>
    </div>
  );
}

export default MobileNavbar;
