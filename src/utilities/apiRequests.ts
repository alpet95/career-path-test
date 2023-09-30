import { ParamsType, AnswerType } from "../types";
const API_URL = "https://fhc-api.onrender.com";

// This function is used to fetch questions from the API /questions?user={user} endpoint
async function fetchQuestions(user: string, params: ParamsType) {
  if (user === "") return [];

  try {
    const response = await fetch(
      `${API_URL}/${params.endpoint}?${params.query}`
    );
    const data = await response.json();

    const newSearchParams: Record<string, string> = {};
    if (user !== "") newSearchParams.user = user;

    return data;
  } catch (error) {
    throw new Error("Failed to fetch questions");
  }
}

// This function is used to post a submission to the API /submissions?user={user} endpoint
async function setSubmission(
  user: string,
  params: ParamsType,
  answers: AnswerType[]
) {
  if (user === "") return [];

  try {
    const response = await fetch(
      `${API_URL}/${params.endpoint}?${params.query}`,
      {
        method: "POST",
        body: JSON.stringify({ answers }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to post submissions");
  }
}

// This function is used to fetch a submission from the API /submissions?user={user} endpoint
async function fetchSubmission(user: string, params: ParamsType) {
  if (user === "") return [];

  try {
    const response = await fetch(
      `${API_URL}/${params.endpoint}?${params.query}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch submissions");
  }
}

export { fetchQuestions, setSubmission, fetchSubmission };
