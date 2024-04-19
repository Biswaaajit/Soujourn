/* eslint-disable react/prop-types */

import { useGSAP } from "@gsap/react";
import StayOption from "./StayOption";
import gsap from "gsap";

function Stay({ setShowStay, navigate }) {
  function handleStay(i) {
    if (i === "1") navigate("/double");
    if (i === "2") navigate("/deluxe");
    if (i === "3") navigate("/prestige");
    if (i === "4") navigate("/signature");
    setShowStay(false);
  }
  useGSAP(() => {
    gsap.from("#stay", {
      y: 250,
      opacity: 0,
      ease: "power2.in",
      duration: 0.5,
    });
  }, []);
  return (
    <div
      className="absolute top-14 w-full z-[9999] "
      onMouseEnter={() => setShowStay(true)}
      id="stay"
    >
      <div className="w-full h-[10vh] bg-transparent"></div>
      <div
        className="w-full h-[45vh] bg-black flex justify-around items-center "
        onMouseLeave={() => setShowStay(false)}
      >
        <StayOption
          img="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Double Room"
          no="1"
          handleStay={handleStay}
        />
        <StayOption
          img="deluxRoom.jpg"
          text="Deluxe Room"
          no="2"
          handleStay={handleStay}
        />
        <StayOption
          img="prestigeRoom.jpg"
          text="Prestige Room"
          no="3"
          handleStay={handleStay}
        />
        <StayOption
          img="signatureRoom.jpg"
          text="Signature Room"
          no="4"
          handleStay={handleStay}
        />
      </div>
    </div>
  );
}

export default Stay;
