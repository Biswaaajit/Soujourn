import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
function RoomFeedback() {
  return (
    <div className="w-full h-[60vh] md:h-[80vh] flex flex-col justify-center px-5 gap-6 text-gray-200 feed">
      <div className="w-fit mx-auto">
        <img src="/serviceLogo.png" className="w-[3rem]" />
      </div>
      <p className="block sm:hidden text-center font-semibold text-2xl">
        &ldquo;Everything here was great: the staff, the room layout, the
        property amenities with indoor pool, and the quality of the food. But
        the high point is the view from the mountains.&rdquo;
      </p>
      <div className="hidden sm:flex sm:flex-col font-semibold sm:items-center sm:text-[3.5vw] md:text-[2.5vw]">
        <p>&ldquo;Everything here was great: the staff, the room</p>
        <p>layout, the property amenities with indoor pool,</p>
        <p>and the quality of the food. But the high point is</p>
        <p>the view from the mountains.&rdquo;</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className=" font-semibold text-xl md:text-2xl">
          Travis Scott — Random Dude
        </p>
        <div className="flex w-fit gap-1 md:gap-2">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>
              {i !== 4 && <FaStar size="20px" color="#FFB80F" />}
              {i === 4 && <FaRegStar size="20px" color="#FFB80F" />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomFeedback;
