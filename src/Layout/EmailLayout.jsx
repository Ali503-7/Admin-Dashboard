// EmailLayout.js
import { Outlet, useSearchParams } from "react-router-dom";
import EmailAside from "../components/EmailAside/EmailAside";
import { useState, useEffect } from "react";
import { getEmails } from "../functions/getEmails";

const EmailLayout = () => {
  const [filtered, setFiltered] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("type");

  useEffect(() => {
    getEmails(search) // Pass the typeFilter as a parameter
      .then((result) => setFiltered(result))
      .catch((error) => {
        // Handle the error
        console.error("Error in fetching emails:", error);
      });
  }, [search]);

  return (
    <div className="bg-white rounded-md w-full h-full dark:bg-Dark-Other-Paper_Card flex overflow-hidden">
      <EmailAside />
      <Outlet context={[filtered, setFiltered]} />
    </div>
  );
};

export default EmailLayout;
