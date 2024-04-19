import { useGSAP } from "@gsap/react";
import Navbar from "../../components/Navbar";
import gsap from "gsap";

function Heading() {
  useGSAP(() => {
    let t1 = gsap.timeline();

    t1.from("#logo", {
      y: -150,
      opacity: 0,
      duration: 0.8,
    });
    t1.from("#navi p", {
      y: -150,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    });
    t1.from("#menu,#book", {
      y: -150,
      opacity: 0,
      duration: 0.5,
      stagger: 0.5,
    });
    t1.from("#homeCatchy", {
      opacity: 0,
      scale: 2,
      fontWeight: 999,
    });
    t1.from("#homeInfo p", {
      y: 360,
      duration: 0.5,
      stagger: 0.4,
    });
  }, []);
  return (
    <div className="w-full h-screen headingCover text-gray-200 flex flex-col">
      <Navbar />
      <div className="text-center flex flex-col justify-center items-center h-full gap-4">
        <p className="font-semibold text-lg tracking-wider" id="homeCatchy">
          Boutique Resort Offers Queenlike Stay
        </p>
        <div
          className="font-extrabold text-[4vmax] space-y-1 overflow-hidden"
          id="homeInfo"
        >
          <p>BOUTIQUE RESORT IN </p>
          <p>QUEEN OF HILLS </p>
          <p>DARJEELING</p>
        </div>
      </div>
    </div>
  );
}

export default Heading;
