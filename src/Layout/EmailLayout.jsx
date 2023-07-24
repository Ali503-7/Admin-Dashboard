import { Outlet } from "react-router-dom"
import EmailAside from "../components/EmailAside/EmailAside";

// here will create the layout of the email page
const EmailLayout = () => {
  return (
    <div>
      <EmailAside />

      <Outlet />
    </div>
  );
}

export default EmailLayout