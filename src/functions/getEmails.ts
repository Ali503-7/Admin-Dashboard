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
