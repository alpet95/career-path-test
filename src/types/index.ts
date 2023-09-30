import { ReactNode } from "react";
import { QueryObserverResult } from "@tanstack/react-query";

type QueryType = {
  user: string;
};

type ParamsType = {
  endpoint: string;
  query: string;
};

type AnswerType = {
  questionId: string;
  answer: number;
};

type QuestionType = {
  id: string;
  text: string;
};

type CardType = {
  id: number;
  title: string;
  description: string;
  icon: {
    src: string;
    alt: string;
  };
  borderColor: string;
};

interface SubmissionProps {
  answers: AnswerType[];
  currentQuestion: number;
  showResults: boolean;
  dateCompleted: string;
  progress: number;
}

interface SubmissionStateProps {
  submission: SubmissionProps;
}

interface QuestionsProps {
  questions: QuestionType[];
  refetch: () => Promise<QueryObserverResult>;
}

interface QuestionCardProps {
  question: QuestionType;
  questionsLength: number;
  refetch: () => Promise<QueryObserverResult>;
}

interface CompletedCardProps {
  date: string;
}

interface ContainerProps {
  children: ReactNode;
}

export type {
  AnswerType,
  QueryType,
  ParamsType,
  CardType,
  SubmissionProps,
  SubmissionStateProps,
  QuestionsProps,
  QuestionCardProps,
  CompletedCardProps,
  ContainerProps,
};
