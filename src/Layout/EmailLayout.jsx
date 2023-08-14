import { Outlet, useSearchParams } from "react-router-dom";
import EmailAside from "../components/EmailAside/EmailAside";
import { useState, useEffect } from "react";
import fakeEmails from "../assets/Api/FakeEmailApi";

// here will create the layout of the email page
const EmailLayout = () => {
  const [aside, setAside] = useState(false);
  const [emails, setEmails] = useState(fakeEmails);
  const [fillterd, setFillterd] = useState([]);
  

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  
  // filltring the massages
  useEffect(() => {
    setFillterd(
      emails.filter(
        (massage) =>
          massage.status === typeFilter ||
          massage.type === typeFilter 
      )
    );
    if (!typeFilter || typeFilter == "Inbox") {
      return setFillterd(emails);
    }
  }, [typeFilter]);
  

  return (
    <div className="bg-white rounded-md w-full dark:bg-Dark-Other-Paper_Card flex overflow-hidden">
      <EmailAside
        aside={aside}
        setAside={setAside}
        emails={emails}
        setEmails={setEmails}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <Outlet context={[fillterd, setFillterd, emails]} />
    </div>
  );
};

export default EmailLayout;
