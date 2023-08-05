import { ShopItem } from "./ShopItem";

export const ListView = (props) => {
  const { items } = props;
  
  return (
    <div className="items-background">
      {items.map(item => <ShopItem key={crypto.randomUUID()} item={item} />)}
    </div>
  )
}
