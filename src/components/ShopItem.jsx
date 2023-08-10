export const ShopItem = (props) => {
  const { item } = props;
  
  return (
    <div className="item">
      <img className="item-img" src={item.img} alt={item.name} />
      <div className="item-name">{item.name}</div>
      <div className="item-color">{item.color}</div>
      <div className="item-price">${item.price}</div>
      <button className="button">ADD TO CART</button>
    </div>
  )
}
