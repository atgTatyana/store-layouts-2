import { ShopItem } from "./ShopItem";

export const ListView = (props) => {
  const { items } = props;
  
  return (
    <>
      {items.map(item => <ShopItem key={crypto.randomUUID()} item={item} />)}
    </>
  )
}
