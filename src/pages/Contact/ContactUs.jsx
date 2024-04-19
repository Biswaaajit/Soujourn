import { useReducer } from "react";
import ContactDetails from "./ContactDetails";
import ContactHeading from "./ContactHeading";
import Contact from "../../components/Contact";
const initial = { user: "", email: "", status: "unactive" };
function reducer(state, action) {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "error":
      return { ...initial, status: "error" };
    case "active":
      return { ...initial, status: "active" };
  }
}
function ContactUs() {
  const [form, dispatch] = useReducer(reducer, initial);
  return (
    <div>
      <ContactHeading />
      <ContactDetails form={form} dispatch={dispatch} />
      <Contact className="lg:w-[40vw]" />
    </div>
  );
}

export default ContactUs;
