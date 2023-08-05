import { ShopCard } from "./ShopCard";

export const CardsView = (props) => {
  const { cards } = props;
  
  return (
    <div className="card-background">
      {cards.map(card => <ShopCard key={crypto.randomUUID()} card={card} />)}
    </div>
  )
}
