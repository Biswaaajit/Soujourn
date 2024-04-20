import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function HomeFooter() {
  const navigate = useNavigate();
  useGSAP(() => {
    var t1 = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: "#HFooter",
        start: "top 90%",
      },
    });
    t1.from(".header", {
      y: 80,
      opacity: 0,
      stagger: 0.3,
    });
    t1.from("#title p", {
      y: 80,
      opacity: 0,
      stagger: 0.3,
    });
    t1.from("#btn", {
      scale: 0,
    });
  });
  function handleRoom() {
    navigate("/booking", { scroll: false, replace: true });
    window.scrollTo(0, 0);
  }
  return (
    <div
      className="bg-[url('/bookingcover2.jpg')] px-4 bg-left bg-no-repeat bg-fixed bg-cover sm:py-5"
      id="HFooter"
    >
      <p className="text-center text-[#DD871B] font-bold text-xl py-5 header">
        Book Your Stay Now
      </p>
      <p className="block sm:hidden text-center text-2xl text-white header">
        Escape to the beautiful mountains where dreams comes true. Immerse
        yourself in the restorative qualities of nature far from the disturbance
        of everyday life.
      </p>
      <div
        className="hidden sm:flex sm:flex-col text-[3vw] text-white py-3 sm:items-center md:text-[2.5vw] transition-all"
        id="title"
      >
        <p>Escape to the the beautiful mountains where dreams comes true.</p>
        <p>Immerse yourself in the restorative qualities of nature</p>
        <p>far from the disturbance</p>
        <p>of everyday life.</p>
      </div>
      <button
        className="w-fit relative left-[50%] -translate-x-1/2 my-8 bg-[#f0ad4e] hover:bg-[#ec971f] text-yellow-50 px-4 py-2 text-xl rounded-md"
        onClick={handleRoom}
        id="btn"
      >
        Explore our Accomodations
      </button>
    </div>
  );
}

export default HomeFooter;
