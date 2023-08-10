export const ShopCard = (prop) => {
  const { card } = prop;
  
  return (
    <div className="card">
      <div className="card-name">{card.name}</div>
      <div className="card-color">{card.color}</div>
      <img className="card-img" src={card.img} alt={card.name} />
      <div className="card-info">
        <div className="card-price">${card.price}</div>
        <button className="button">ADD TO CART</button>
      </div>
    </div>
  )
}
