// useMessages.js
import { useState, useEffect } from "react";
import { getEmails } from "./getEmails";

const useMessages = (typeFilter) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getEmails(typeFilter)
      .then((result) => setMessages(result))
      .catch((error) => {
        // Handle the error, e.g., show an error message
        console.error("Error fetching emails:", error);
      });
  }, [typeFilter]);

  return messages;
};

export default useMessages;
