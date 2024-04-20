import { useGSAP } from "@gsap/react";
import Navbar from "../../components/Navbar";
import gsap from "gsap";
import { useRef } from "react";

function ContactHeading() {
  const contactheading = useRef();
  useGSAP(
    () => {
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
      t1.from("#tag  p", {
        y: 80,
        opacity: 0,
        stagger: 0.2,
      });
      t1.from("#contact p", {
        y: 80,
        opacity: 0,
        stagger: 0.2,
      });
    },
    { scope: contactheading }
  );
  return (
    <div
      ref={contactheading}
      className="w-full h-[90vh] sm:h-[100vh]  bg-red-400 contact flex flex-col"
    >
      <Navbar />
      <div
        className="grow  flex flex-col  justify-center items-center px-5 sm:px-0 gap-6 text-slate-100"
        id="contact"
      >
        <p className="text-5xl font-semibold">Contact Us</p>
        <p className="text-xl text-center">
          For bookings and enquiries, please call us or write to us.
        </p>
      </div>
    </div>
  );
}

export default ContactHeading;
