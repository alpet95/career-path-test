// This function calculates the progress of the test
function calculateProgress(
  currentQuestion: number,
  totalQuestions: number
): number {
  const answeredQuestions = currentQuestion - 1;
  const percentage = (answeredQuestions / totalQuestions) * 100;
  return parseInt(percentage.toFixed(0));
}

// This function is used to format the date
function formatDate(date: string) {
  if (date === undefined) return;
  const d = new Date(date);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export { calculateProgress, formatDate };
