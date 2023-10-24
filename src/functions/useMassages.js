// useMessages.js
import { useState, useEffect } from "react";
import { getEmails, getMessageById } from "./getEmails";

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

export const useMessageById = (messageId) => {
  const [message, setMessage] = useState(null);
  const [massageState, setMassageState] = useState("loading");

  useEffect(() => {
    getMessageById(messageId)
      .then((result) => {
        setMessage(result);
        setMassageState("success");
      })
      .catch((err) => {
        setError(err);
        setMassageState("error");
      });
  }, [messageId]);

  return { message, massageState };
};
