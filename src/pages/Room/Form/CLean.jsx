import { SlArrowDown } from "react-icons/sl";

function CLean() {
  return (
    <div>
      <div>
        <input type="checkbox" id="massage" />
        <label htmlFor="massage">Massage</label>
      </div>
      <div className="flex">
        <p>₹200 / Person</p>
        <div className="">
          <p className="flex items-center">
            <span>Person</span>
            <span>
              <SlArrowDown />
            </span>
          </p>
          <div>
            <button>➖</button>
            <p>Person</p>
            <button>➕</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CLean;
