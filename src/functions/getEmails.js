// getEmails.js
import fakeemails from "../assets/Api/FakeEmailApi";

export const getEmails = async (typeFilter) => {
  try {
    // Check if typeFilter is null or "Inbox"
    if (!typeFilter || typeFilter === "Inbox") {
      return fakeemails;
    }

    // Now, you can safely filter the emails based on typeFilter
    const filteredEmails = fakeemails.filter(
      (massage) => massage.status === typeFilter || massage.type === typeFilter
    );

    return filteredEmails;
  } catch (error) {
    console.error("Error fetching emails:", error);
    // Handle the error as needed
    return [];
  }
};

export const getMessageById = async (messageId) => {
    try {
      // Find the message with the specified ID
      const message = fakeemails.find((email) => email.id === messageId);

      if (message) {
        return message;
      } else {
        throw new Error("Message not found");
      }
    } catch (error) {
      console.error("Error fetching message by ID:", error);
      // Handle the error as needed, e.g., show an error message
      throw error;
    }
};
