export const ShopItem = (props) => {
  const { item } = props;
  
  return (
    <div className="item">
      <div style={{ backgroundImage: `url(${item.img})` }} className="item-img"></div>
      <h2 style={{ fontWeight: 400 }}>{item.name}</h2>
      <h4 style={{ fontWeight: 400 }}>{item.color}</h4>
      <div className="item-price">${item.price}</div>
      <button className="button">ADD TO CART</button>
    </div>
  )
}
