// EmailLayout.js
import { Outlet } from "react-router-dom";
import EmailAside from "../components/EmailAside/EmailAside";
import { useState, useEffect } from "react";
import { getEmails } from "../functions/getEmails";
import { EmailFilterAtom } from "../atoms/EmailAtomFilter";

const EmailLayout = () => {
  const [filtered, setFiltered] = useState([]);
  const typeFilter = EmailFilterAtom.useValue();

  useEffect(() => {
    getEmails(typeFilter) // Pass the typeFilter as a parameter
      .then((result) => setFiltered(result))
      .catch((error) => {
        // Handle the error
        console.error("Error in fetching emails:", error);
      });
  }, [typeFilter]);

  return (
    <div className="bg-white rounded-md w-full dark:bg-Dark-Other-Paper_Card flex overflow-hidden">
      <EmailAside />
      <Outlet context={[filtered, setFiltered]} />
    </div>
  );
};

export default EmailLayout;
