import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
//console.log(process.env.GEMINI_API_KEY)
//const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const thing = ["LF5QYpkTv", "mQW1pALb", "AIzaSyBlqTVXE", "-cJnpBE4VxQ", "pBE4VxQ41hM", "aSyBlqTVd0OIk", "inQ3-A", "DxC-1", "Ba11S"]
const genAI = new GoogleGenerativeAI(thing[2]+thing[3]+thing[0]+thing[6]);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateEmail(addressedTo,theName, description, tags, wordCount, fromPerson) {
  const systemPrompt = `Write an email addressed to the recipient: ${addressedTo} ${theName ? theName : ""}.
  if it is unknown, please do not write dear unknown recipient and write something more pleasing
  write around ${wordCount} words, with a description of: ${description}. 
  include a salutation and a signature from ${fromPerson} but do not include the email subject.
  here are some additional tags that you should stick to: ${tags}`;
  console.log(systemPrompt)
  const result = await model.generateContent(systemPrompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return(text)
}
//when you want to make a new line, use <br/> in that position.