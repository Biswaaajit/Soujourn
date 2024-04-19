import { FaRegClock } from "react-icons/fa";

function RoomInfo() {
  return (
    <div className="my-16">
      <div className="">
        <h1 className="text-center font-bold text-xl text-heading mb-4 ">
          Comfortable rooms and services
        </h1>
        <p className="block sm:hidden text-center text-2xl ">
          Explore our refined accomodation options and find the perfect space
          for your stay.
        </p>
        <div className="hidden sm:flex sm:flex-col text-[3vw]  sm:items-center md:text-[2.5vw] transition-all">
          <p>Explore our refined accomodation options and</p>
          <p>find the perfect space for your</p>
          <p>stay.</p>
        </div>
      </div>
      <div className="mt-6" id="">
        <p className="block sm:hidden text-center">
          All rooms have a bathroom with bathtub and/or shower, cable
          television/radio, free WIFI and mini bar. In addition, all rooms are
          equipped with a Nespresso coffee machine. Most rooms are carpeted,
          some have parquet flooring.
        </p>
        <div className="hidden sm:flex sm:flex-col sm:items-center ">
          <p>
            All rooms have a bathroom with bathtub and/or shower, cable
            television/radio, free WIFI
          </p>
          <p>
            and mini bar. In addition, all rooms are equipped with a Nespresso
            coffee machine. Most
          </p>

          <p>rooms are carpeted, some have parquet flooring.</p>
        </div>
        <div className="flex flex-row divide-x-[3px] divide-[#DD871B] justify-center text-sm sm:text-lg my-4 md:my-6">
          <div className="flex flex-row justify-center items-center px-4 md:px-8 gap-2 py-2">
            <FaRegClock color="#DD871B" size="24px" />
            <p className="text-heading font-semibold">Check In : 3:00 PM</p>
          </div>
          <div className="flex flex-row justify-center items-center px-4 md:px-8 gap-2">
            <FaRegClock color="#DD871B" size="24px" />
            <p className="text-heading font-semibold">Check Out : 12:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomInfo;
