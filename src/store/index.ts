import { configureStore } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubmissionProps, AnswerType } from "../types";

const submissionSlice = createSlice({
  name: "submission",
  initialState: {
    answers: [],
    currentQuestion: 1,
    showResults: false,
    dateCompleted: "",
    progress: 0,
  } as SubmissionProps,
  reducers: {
    addAnswer(state, action: PayloadAction<AnswerType>) {
      state.answers.push(action.payload);
    },
    setCurrentQuestion(state, action: PayloadAction<number>) {
      state.currentQuestion = action.payload;
    },
    setShowResults(state, action: PayloadAction<boolean>) {
      state.showResults = action.payload;
    },
    setDateCompleted(state, action: PayloadAction<string>) {
      state.dateCompleted = action.payload;
    },
    setProgress(state, action: PayloadAction<number>) {
      state.progress = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    submission: submissionSlice.reducer,
  },
});

export const {
  addAnswer,
  setCurrentQuestion,
  setShowResults,
  setDateCompleted,
  setProgress,
} = submissionSlice.actions;
export default store;
