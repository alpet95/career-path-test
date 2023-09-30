import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addAnswer,
  setCurrentQuestion,
  setShowResults,
  setProgress,
} from "../../store";
import { calculateProgress } from "../../utilities/helpers";
import { QuestionCardProps, SubmissionStateProps } from "../../types";

const QuestionCard = ({
  question,
  questionsLength,
  refetch,
}: QuestionCardProps) => {
  const { currentQuestion, progress } = useSelector((state: SubmissionStateProps) => state.submission);
  const [showFinishButton, setShowFinishButton] = useState<boolean>(false);
  const [nextQuestion, setNextQuestion] = useState<number>(currentQuestion + 1);

  const totalQuestions = questionsLength;
  const dispatch = useDispatch();

  const answerButtonHandler = (answer: number) => {
    if (nextQuestion < questionsLength + 1) {
      setTimeout(() => {
        dispatch(setCurrentQuestion(nextQuestion));
      }, 300);
      dispatch(addAnswer({ questionId: question.id, answer }));
    }

    if (nextQuestion === questionsLength + 1) {
      setShowFinishButton(true);
      dispatch(setProgress(100));
      dispatch(addAnswer({ questionId: question.id, answer }));
      setNextQuestion(nextQuestion + 1);
    }

    if (nextQuestion > questionsLength + 1) {
      return;
    }
  };

  // This side effect is used to set the progress bar
  useEffect(() => {
    const progress = calculateProgress(currentQuestion, totalQuestions);
    dispatch(setProgress(progress));
  }, [currentQuestion, totalQuestions]);

  return (
    <li>
      <div className="flex items-center py-6 px-6 border border-b-0 border-gray-300 shadow-sm">
        <p className="mr-2 font-medium text-left">
          Your progress - {progress}%
        </p>
        <div className="mx-2 w-48 h-4 rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-blue-400"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="py-10 px-24 border border-gray-300 shadow-sm">
        <span className="my-1 block font-semibold text-left text-orange-400">
          Q{currentQuestion}/{totalQuestions}
        </span>
        <p className="my-1 text-left">In a job I would be motivated by</p>
        <h4 className="my-1 text-left font-semibold">{question.text}</h4>

        <div className="my-16">
          <div className="relative flex justify-between">
            {Array.from({ length: 8 }, (_, index) => index).map((index) => (
              <button
                className="w-10 h-10 border border-blue-400 rounded-full bg-white z-10 hover:bg-blue-400 hover:border-white hover:border-2 transition-all duration-300 ease-in-out"
                key={index}
                onClick={() => answerButtonHandler(index)}
              ></button>
            ))}
            <hr className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-0.5 bg-blue-400" />
          </div>
          <div className="my-4 flex justify-between font-medium">
            <p>Strongly disagree</p>
            <p>Strongly agree</p>
          </div>
        </div>

        {showFinishButton ? (
          <button
            className="block py-1 px-6 my-0 mx-auto rounded-md bg-orange-400 font-semibold"
            onClick={() => {
              refetch();
              dispatch(setShowResults(true));
            }}
          >
            Finish
          </button>
        ) : (
          <span className="block text-center font-medium">
            To review your previous answers, scroll back before selecting
            "finish".
          </span>
        )}
      </div>
    </li>
  );
};

export default QuestionCard;
