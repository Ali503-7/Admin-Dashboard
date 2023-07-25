import { Outlet } from "react-router-dom"
import EmailAside from "../components/EmailAside/EmailAside";

// here will create the layout of the email page
const EmailLayout = () => {
  return (
    <div className="bg-white rounded-md h-full dark:bg-Dark-Other-Paper_Card">
      <EmailAside />

      <Outlet />
    </div>
  );
}

export default EmailLayout