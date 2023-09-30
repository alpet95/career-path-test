import { formatDate } from "../../utilities/helpers";
import { CompletedCardProps } from "../../types";

const CompletedCard = ({ date }: CompletedCardProps) => {
  return (
    <div className="border-2 border-gray-200 rounded-2xl shadow-sm">
      <div className="h-48 rounded-t-2xl bg-completed-image bg-orange-400 bg-cover bg-no-repeat bg-center"></div>
      <div className="p-6 text-left">
        <p className="my-2 font-bold">Completed on {formatDate(date)}</p>
        <p className="my-2">Well done on completing your test. You can view the result now.</p>
        <button className="my-4 py-2 px-4 rounded-md bg-orange-400 font-semibold">See your results</button>
      </div>
    </div>
  );
};

export default CompletedCard;
