import { Outlet } from "react-router-dom"
import EmailAside from "../components/EmailAside/EmailAside";
import { useState } from "react";

// here will create the layout of the email page
const EmailLayout = () => {
  const [aside, setAside] = useState(false)

  return (
    <div className="bg-white rounded-md w-full dark:bg-Dark-Other-Paper_Card flex overflow-hidden">
      <EmailAside aside={aside} />

      <Outlet />
    </div>
  );
}

export default EmailLayout