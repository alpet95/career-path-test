import Container from "../layout/Container";
import Card from "./Card";
import { cards } from "../../data";

const Cards = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-3 grid-rows-1 gap-x-2">
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Cards;
