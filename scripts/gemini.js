import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)

const apiKEY = "you wish"

const genAI = new GoogleGenerativeAI(apiKEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateEmail(addressedTo,theName, description, tags, wordCount) {
  const systemPrompt = `Write an email addressed to to the recipient: ${addressedTo} ${theName ? data.theName : ""} in around ${wordCount} words, with the description: ${description}. just give me the main body of the email, nothing else. not the subject, not the signature, not the salutation, just the main body of the email. here are some additional tags to help you out: ${tags}`;

  const result = await model.generateContent(systemPrompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return(text)
}

// Example usage:
generateEmail("John Doe", 100, "I'm writing to inform you about the upcoming event.");