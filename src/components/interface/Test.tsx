import React, { useState, useEffect, useRef, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDateCompleted } from "../../store";
import useAPIQuery from "../../utilities/hooks/useApiQuery";
import Container from "../layout/Container";
import Questions from "./Questions";
import CompletedCard from "./CompletedCard";
import { SubmissionStateProps } from "../../types";

const Test = () => {
  const userInputRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { showResults, dateCompleted } = useSelector((state: SubmissionStateProps) => state.submission);
  const [user, setUser] = useState<string>(searchParams.get("user") || "");
  const dispatch = useDispatch();
  const query = useMemo(() => ({ user }), [user]);

  // This custom hook is used to fetch the questions and submission info
  const {
    getQuestionsQuery,
    postSubmissionQuery,
    getSubmissionQuery,
    isWaiting,
    isError,
  } = useAPIQuery(query, user);

  // This function is used to submit the user's name and add it to the URL as a query parameter
  function submitNameHandler(e: React.FormEvent) {
    e.preventDefault();

    if (!userInputRef.current?.value) return;
    const user = userInputRef.current.value.toLowerCase();
    setUser(user);
    setSearchParams({ user });
    userInputRef.current.value = "";
  }

  // This side effect is used to fetch the questions or submission info when the user's name changes
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const submissionResponse = await getSubmissionQuery.refetch();
        if (!submissionResponse.data.ok) {
          await getQuestionsQuery.refetch();
        }
      }
    };
  
    fetchData();
  }, [user]);

  // This side effect is used to set the date when the test was completed
  useEffect(() => {
    const submissionData = getSubmissionQuery.data;
    const dateCompleted = submissionData?.latestSubmission;
    dispatch(setDateCompleted(dateCompleted));
  }, [getSubmissionQuery.data, dispatch]);

  const submissionDate: string = postSubmissionQuery.data?.submissionDate;

  // Conditional rendering based on the state of the queries
  if (
    isWaiting.getQuestions ||
    isWaiting.postSubmission ||
    isWaiting.getSubmission
  ) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError.getQuestions || isError.postSubmission || isError.getSubmission) {
    return <div className="text-center">Ooops, something went wrong</div>;
  }

  return (
    <section className="pb-12">
      <Container>
        <p className="my-2 text-left">
          We've analysed data from thousands of our members who work in graduate
          roles across a range of sectors to understand which personalities,
          skills and values best fit each other career path.
        </p>
        <p className="my-2 text-left">
          Take this test to understand what career path you might be suited to
          and how to get started.
        </p>
        {!user && (
          <form className="my-12 text-center" onSubmit={submitNameHandler}>
            <input
              className="py-2 w-[350px] border-b outline-none"
              type="text"
              name="user"
              placeholder="Enter your name..."
              autoComplete="off"
              ref={userInputRef}
            />
            <button
              className="mx-4 py-2 px-4 rounded-md bg-orange-400 font-semibold"
              type="submit"
            >
              Start Test
            </button>
          </form>
        )}
        {user && (
          <h4 className="my-8 text-center font-semibold capitalize">Hello {user}!</h4>
        )}
        {showResults || dateCompleted ? (
          <CompletedCard date={submissionDate || dateCompleted} />
        ) : (
          <Questions
            questions={getQuestionsQuery.data?.questions}
            refetch={postSubmissionQuery.refetch}
          />
        )}
      </Container>
    </section>
  );
};

export default Test;
