function RoomAmenities() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-28 my-8">
      <div className="space-y-8 amen">
        <div className="flex gap-5 items-center">
          <img className="w-[2.5rem]" src="Icon/wifi.png" />
          <p>Wifi & Internet</p>
        </div>
        <div className="flex gap-5 items-center">
          <img className="w-[2.5rem]" src="Icon/Slipper.png" />
          <p>Slippers</p>
        </div>
        <div className="flex gap-5 items-center">
          <img className="w-[2.5rem]" src="Icon/Pet.png" />
          <p>Pet Friendly</p>
        </div>
        <div className="flex gap-5 items-center">
          <img className="w-[2.5rem]" src="Icon/towel.png" />
          <p>Towels</p>
        </div>
      </div>
      <div className="space-y-8 amen">
        <div className="flex gap-5 items-center">
          <img className="w-[2.5rem]" src="Icon/AC.png" />
          <p>Air Conditioner</p>
        </div>
        <div className="flex gap-5 items-center">
          <img className="w-[2.5rem]" src="Icon/Shampoo.png" />
          <p>Shampoo</p>
        </div>
        <div className="flex gap-5 items-center">
          <img className="w-[2.3rem]" src="Icon/WashingMachine.png" />
          <p>Washing Machine</p>
        </div>
        <div className="flex gap-5 items-center">
          <img className="w-[2.5rem]" src="Icon/TV.png" />
          <p>Cable TV</p>
        </div>
      </div>
    </div>
  );
}

export default RoomAmenities;
