import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
/* eslint-disable react/prop-types */
function ContactDetails({ form, dispatch }) {
  const { user, email, status } = form;

  useGSAP(() => {
    var t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#Cdetail",
        start: "top 70%",
      },
    });
    t1.from("#Cdetail .Ctitle", {
      x: 50,
      opacity: 0,
      stagger: 0.2,
    });
    t1.from("#Cdetail .Cform", {
      scale: 0,
      opacity: 0,
    });
  }, []);
  function handleContact(e) {
    e.preventDefault();
    if (!user || !email) {
      dispatch({ type: "error" });
    } else {
      dispatch({ type: "active" });
    }
  }
  return (
    <div
      className="w-full h-[fit] lg:h-[100vh] py-8 flex flex-col lg:flex-row lg:justify-evenly px-4"
      id="Cdetail"
    >
      <img
        src="https://images.unsplash.com/photo-1579590848758-a9cc83bc219f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-[80%] sm:w-[70%] lg:w-[60%] xl:w-[50%] self-center transition-all"
      />
      <div className="w-full md:w-[70%] lg:w-[35%] mt-10 space-y-4 text-center self-center">
        <p className="font-semibold text-lg text-[#dc8409] tracking-wide uppercase Ctitle">
          Contact us to get more details
        </p>
        <p className="text-3xl font-[400] uppercase Ctitle">
          Let&apos;s start a conversation
        </p>
        <p className="Ctitle">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
        </p>
        <form className="flex flex-col gap-4 Cform" onSubmit={handleContact}>
          <input
            type="text"
            placeholder="Your Name"
            value={user}
            onChange={(e) =>
              dispatch({ type: "setUser", payload: e.target.value })
            }
            className={`Cinput w-[full] lg:w-full text-lg py-1 px-2 border-2 rounded-sm  focus:outline-none focus:border-none focus:ring-[1.5px] focus:ring-[#dc8409] placeholder:text-slate-700 transition-all duration-200 ${
              status === "error" ? "border-red-500" : ""
            }`}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) =>
              dispatch({ type: "setEmail", payload: e.target.value })
            }
            className={`Cinput w-[full] lg:w-full text-lg py-1 px-2 border-2 rounded-sm  focus:outline-none focus:border-none focus:ring-[1.5px] focus:ring-[#dc8409] placeholder:text-slate-700 transition-all duration-200 ${
              status === "error" ? "border-red-500" : ""
            }`}
          />
          <textarea
            placeholder="Your Message"
            className="Cinput w-[full] lg:w-full text-lg py-1 px-2 border-2 rounded-sm  focus:outline-none focus:border-none focus:ring-[1.5px] focus:ring-[#dc8409] placeholder:text-slate-700 transition-all duration-200"
          ></textarea>
          <button
            type="submit"
            className="bg-zinc-900 text-[#dc8409]  text-xl font-semibold w-[70%] self-center px-6 py-2 rounded-md"
          >
            Send Your Message
          </button>
          {status === "error" && (
            <p className="border-[2.2px] py-3 border-red-400 ">
              Please fill up the required fields.
            </p>
          )}
          {status === "active" && (
            <p className="border-[2.2px] py-3 border-green-500">
              Thank you for the message. We will contact you soon.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactDetails;
