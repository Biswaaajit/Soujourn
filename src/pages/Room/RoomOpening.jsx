/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import Navbar from "../../components/Navbar";
import "./Room.css";
import gsap from "gsap";
function RoomOpening({ text }) {
  useGSAP(() => {
    var t1 = gsap.timeline();
    t1.from("#logo", {
      y: -150,
      opacity: 0,
      duration: 0.5,
    });
    t1.from("#navi p", {
      y: -150,
      opacity: 0,
      stagger: 0.2,
    });
    t1.from("#menu,#book", {
      y: -150,
      opacity: 0,
      stagger: 0.1,
    });
  });
  return (
    <div
      className={`w-full h-[65vh] ${text} sm:h-[75vh] md:h-[85vh] transition-all`}
    >
      <Navbar />
    </div>
  );
}

export default RoomOpening;
