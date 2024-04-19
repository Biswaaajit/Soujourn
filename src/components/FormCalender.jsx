/* eslint-disable react/prop-types */
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "styled-components";
import dayjs from "dayjs";
import { useState } from "react";
const StyledDatePickerContainer = styled.div`
  .MuiPickersBasePicker-pickerView {
    background-color: transparent;
  }
  .MuiPickersDay-day {
    color: black;
  }
  @media only screen and (max-width: 640px) {
    .MuiInputBase-root {
      width: 90vw;
      border: 2px solid #dc8409;
      color: black;
    }
  }

  /* Media query for medium screens */
  @media only screen and (min-width: 641px) and (max-width: 1279px) {
    .MuiInputBase-root {
      width: 70vw;
      border: 2px solid #dc8409;
      color: black;
    }
  }

  /* Media query for large screens */
  @media only screen and (min-width: 1280px) {
    .MuiInputBase-root {
      width: 30vw;
      border: 2px solid #dc8409;
      color: black;
    }
  }

  .MuiSvgIcon-root {
    fill: #dc8409; // Set fill color to white for the calendar icon
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: transparent !important;
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border: solid 1px #dc8409;
  }
`;
function FormCalender({ label }) {
  const [value, setValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDatePickerContainer>
        <DatePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          minDate={dayjs()}
          label={label}
        />
      </StyledDatePickerContainer>
    </LocalizationProvider>
  );
}

export default FormCalender;
