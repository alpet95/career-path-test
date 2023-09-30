import { CardType } from "../../types";

type VariantsType = {
  [key: string]: string;
};

const variants: VariantsType = {
  orange: "border-orange-400",
  purple: "border-purple-400",
  yellow: "border-yellow-400",
};

const Card = ({ title, description, icon, borderColor }: CardType) => {
  return (
    <div className="relative my-0 mx-auto py-6 px-12 flex flex-col justify-center items-start max-w-[340px] border border-solid border-gray-300 rounded-xl shadow-sm text-left">
      <div className={`absolute p-4 items-center top-1/2 -left-8 -translate-y-1/2 w-16 h-16 border-2 border-solid ${variants[borderColor]} rounded-full bg-gray-100 z-10`}>
        <img className="w-full h-full" src={icon.src} alt={icon.alt} />
      </div>
      <h4 className="my-1 font-bold">{title}</h4>
      <p className="my-1 text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
