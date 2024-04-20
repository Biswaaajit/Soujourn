import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

function BookingDone() {
  const navigate = useNavigate();
  const msg = "THANK YOU";
  useGSAP(() => {
    var t1 = gsap.timeline();
    t1.from("#msg span", {
      x: 50,
      opacity: 0,
      stagger: 0.2,
    });
  }, []);
  return (
    <div className="w-full h-[100vh] reserve flex flex-col justify-center items-center text-slate-100 px-4 gap-5">
      <div
        className="text-3xl sm:text-6xl tracking-widest font-logoType"
        id="msg"
      >
        {[...msg].map((chr, i) => (
          <span key={i}>{chr}</span>
        ))}
      </div>

      <p className="text-2xl text-center font-logoType">
        We have confirmed your reservation. Hopefully you have a safe journey.
      </p>
      <button
        className="border-2 border-slate-100 px-8 py-1 rounded-md"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
}

export default BookingDone;
