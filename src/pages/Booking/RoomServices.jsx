import { useNavigate } from "react-router-dom";

function RoomServices() {
  const navigate = useNavigate();
  return (
    <div className="py-20 px-8 flex flex-col lg:flex-row lg:justify-around bg-zinc-900 text-zinc-200 mt-8">
      <div>
        <p className="text-heading font-bold text-xl mb-6">
          Comfortable stay experience
        </p>
        <p className="text-4xl font-light tracking-wide mb-5">
          Most Popular Facilities
        </p>
        <p className="w-fit lg:w-[36vw]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className=" mt-8 mb-12 relative after:content-[''] after:absolute after:w-full after:bg-heading after:left-0 after:-bottom-[1.1px] hover:after:w-0 after:h-[2px] after:transition-all after:duration-300 after:rounded-full px-1 font-semibold text-lg"
        >
          More About Services
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-0 md:gap-44 lg:gap-28">
        <div>
          {[
            "High Quality Bed",
            "Flat TV Screen",
            "Bathrobes",
            "Bathroom With Geyser",
            "Furnished Balcony",
            "Free WiFi",
          ].map((item) => (
            <p key={item} className="text-lg mb-2 md:mb-4">
              <span className="text-heading font-extrabold text-xl">+</span>{" "}
              {item}
            </p>
          ))}
        </div>
        <div>
          {[
            "Air Conditioning",
            "Mini Bar",
            "Laundry",
            "Dining Table",
            "Safety deposite Box",
            "24/7 Security",
          ].map((item) => (
            <p key={item} className="text-lg mb-2 md:mb-4">
              <span className="font-extrabold text-heading text-xl">+</span>{" "}
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomServices;
