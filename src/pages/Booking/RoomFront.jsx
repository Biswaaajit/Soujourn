/* eslint-disable react/prop-types */

import { useGSAP } from "@gsap/react";
import Navbar from "../../components/Navbar";
import { useRef } from "react";
import gsap from "gsap";

function RoomFront() {
  const roomFront = useRef();
  useGSAP(
    () => {
      var t1 = gsap.timeline();
      t1.from("#logo", {
        y: -150,
        opacity: 0,
        duration: 0.8,
      });
      t1.from("#navi p", {
        y: -150,
        opacity: 0,
        stagger: 0.2,
      });
      t1.from("#menu,#book", {
        y: -150,
        opacity: 0,
        stagger: 0.5,
      });
      t1.from("#tag  p", {
        y: 80,
        opacity: 0,
        stagger: 0.4,
      });
    },
    { scope: roomFront }
  );
  return (
    <div
      ref={roomFront}
      className="w-full h-[80vh] bg-[url('/roomCover1.jpg')] bg-center bg-cover flex flex-col"
    >
      <Navbar />
      <div
        className="grow flex flex-col justify-center items-center text-white "
        id="tag"
      >
        <p className="text-4xl md:text-[4vw] pb-1 md:pb-[2vw]">Room & Suites</p>
        <p className="text-xl md:text-[2vw]">Warmth. Care. Peace.</p>
      </div>
    </div>
  );
}

export default RoomFront;
