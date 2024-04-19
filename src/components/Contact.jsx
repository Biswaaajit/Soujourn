/* eslint-disable react/prop-types */

import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";

function Contact({ className, size = "" }) {
  return (
    <div className=" bg-zinc-900 text-zinc-200 divide-y-2 divide-gray-600/30 px-6">
      <div
        className={`py-8  flex flex-row flex-wrap lg:flex-nowrap lg:justify-around px-0 ${size}`}
      >
        <div>
          <p className="text-2xl font-semibold pb-5 lg:text-3xl lg:pb-7">
            Soujourn
          </p>
          <p className={`w-fit ${className}`}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus
            magnis dis parturient montes, nascetur ridiculus mus magnis
          </p>
          <div className="flex flex-row gap-5 pt-3 pb-12 lg:pt-4 lg:pb-0">
            <div>
              <FaCcPaypal color="white" size="40px" />
            </div>
            <div>
              <FaCcVisa color="white" size="40px" />
            </div>
            <div>
              <FaGooglePay color="white" size="40px" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold pb-5 lg:text-3xl lg:pb-7">
            Reach Out
          </p>
          <div>
            <p>Email: hotelSoujourn@gmail.com</p>
            <p>Tel No: +91 8745874659</p>
            <p>
              Address: Darjeeling Mall, Chauk Bazzar, Darjeeling, West Bengal
            </p>
          </div>
        </div>
      </div>
      <div className="block lg:flex lg:flex-row lg:justify-between px-1 lg:px-12 py-5">
        <div className="flex flex-row gap-8 justify-center">
          {["privacy", "terms of use", "policy"].map((item) => (
            <p
              key={item}
              className="uppercase hover:text-orange-300 cursor-pointer"
            >
              {item}
            </p>
          ))}
        </div>
        <p className="capitalize text-center py-3 lg:py-0">
          © Copyright Soujourn made by biswajeet
        </p>
      </div>
    </div>
  );
}

export default Contact;
