/* eslint-disable react/prop-types */
function EssentialInfo({ icon, children, heading }) {
  return (
    <div className="flex flex-row items-center gap-4 my-4 justify-center sm:justify-start w-fit sm:w-[50%] item">
      <div>{icon}</div>
      <div className="w-[70%]">
        <p className="font-semibold w-fit mb-3 ">{heading}</p>

        <p>{children}</p>
      </div>
    </div>
  );
}

export default EssentialInfo;
