'use server'
const { GoogleGenerativeAI } = require("@google/generative-ai");


const genAI = new GoogleGenerativeAI("AIzaSyDBF8PcsICb6f80ZvOtlaTiysqOfrgmHBg");

export async function run(question:any) {

  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = `${question}`

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
    return text ;
}
