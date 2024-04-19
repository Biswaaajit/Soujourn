function FamilyAmenities() {
  return (
    <div className="flex flex-col flex-wrap gap-4 sm:flex-row my-8 Famen">
      <div className="flex items-center bg-heading/10 gap-3 py-3 pl-2 pr-0 basis-0 sm:basis-[300px] sm:justify-center sm:gap-8 rounded-md ">
        <img src="/Icon/kidPool.png" className="w-[2.5rem]" />
        <p className="text-lg">Kids Swimming Pool</p>
      </div>
      <div className="flex items-center bg-heading/10 gap-3 py-3 pl-2 pr-0 basis-0 sm:basis-[300px] sm:justify-center sm:gap-8 rounded-md">
        <img src="/Icon/babyCrib.png" className="w-[2.5rem]" />
        <p className="text-lg">Baby Crib</p>
      </div>
      <div className="flex items-center bg-heading/10 gap-3 py-3 pl-2 pr-0 basis-0 sm:basis-[300px] sm:justify-center sm:gap-8 rounded-md">
        <img src="/Icon/WashingMachine.png" className="w-[2.5rem]" />
        <p className="text-lg">Washing Machine</p>
      </div>
    </div>
  );
}

export default FamilyAmenities;
