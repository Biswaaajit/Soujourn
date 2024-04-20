import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function ActivitiesInfo({ heading, children, image }) {
  const navigate = useNavigate();
  function handleBtn() {
    navigate("/contact");
    window.scrollTo(0, 0);
  }
  return (
    <div className="flex flex-col gap-4 activity">
      <img
        src={image}
        className="w-auto lg:w-[45vh] lg:self-center transition-all"
      />
      <p className="text-center font-semibold text-xl">{heading}</p>
      <p className="mx-3">{children}</p>
      <button
        onClick={handleBtn}
        className="self-end relative font-medium px-2 after:content-[''] after:absolute after:bg-[#DD871B] after:w-full after:h-[3px] after:left-0 after:-bottom-[3px] hover:after:w-0 after:transition-all after:duration-300 after:rounded-full"
      >
        Discover More
      </button>
    </div>
  );
}

export default ActivitiesInfo;
