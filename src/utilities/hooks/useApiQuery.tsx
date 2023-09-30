import { useQueries } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { fetchQuestions, setSubmission, fetchSubmission } from "../apiRequests";
import { QueryType, SubmissionStateProps } from "../../types";

function useAPIQuery(query: QueryType, user: string) {
  const answers = useSelector((state: SubmissionStateProps) => state.submission.answers);
  const queryParams = new URLSearchParams(query).toString();

  const params = {
    getQuestions: {
      endpoint: "questions",
      query: queryParams,
    },
    postSubmission: {
      endpoint: "submissions",
      query: queryParams,
    },
    getSubmission: {
      endpoint: "submissions",
      query: queryParams,
    },
  };

  const results = useQueries({
    queries: [
      {
        queryKey: ["questions", query],
        queryFn: () => fetchQuestions(user, params.getQuestions),
        enabled: false,
      },
      {
        queryKey: ["submissions", query, answers],
        queryFn: () => setSubmission(user, params.postSubmission, answers),
        enabled: false,
      },
      {
        queryKey: ["submissions", query],
        queryFn: () => fetchSubmission(user, params.getSubmission),
        enabled: false,
      },
    ],
  });

  const [getQuestionsQuery, postSubmissionQuery, getSubmissionQuery] = results;
  const isWaiting = {
    getQuestions: getQuestionsQuery.isLoading && getQuestionsQuery.isFetching,
    postSubmission:
      postSubmissionQuery.isLoading && postSubmissionQuery.isFetching,
    getSubmission:
      getSubmissionQuery.isLoading && getSubmissionQuery.isFetching,
  };
  const isError = {
    getQuestions: getQuestionsQuery.isError,
    postSubmission: postSubmissionQuery.isError,
    getSubmission: getSubmissionQuery.isError,
  };

  return {
    getQuestionsQuery,
    postSubmissionQuery,
    getSubmissionQuery,
    isWaiting,
    isError,
  };
}

export default useAPIQuery;
