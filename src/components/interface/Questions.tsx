import { useSelector } from "react-redux";
import QuestionCard from "./QuestionCard";
import { QuestionsProps, SubmissionStateProps } from "../../types";

const Questions = ({ questions, refetch }: QuestionsProps) => {
  const { currentQuestion } = useSelector((state: SubmissionStateProps) => state.submission);

  return (
    <ul>
      {questions && (
        <QuestionCard
          key={questions[currentQuestion - 1].id}
          question={questions[currentQuestion - 1]}
          questionsLength={questions.length}
          refetch={refetch}
        />
      )}
    </ul>
  );
};

export default Questions;
