export const ShopCard = (prop) => {
  const { card } = prop;
  
  return (
    <div style={{ backgroundImage: `url(${card.img})` }} className="card">
      <h2 style={{ fontWeight: 400 }}>{card.name}</h2>
      <h4 style={{ fontWeight: 400 }}>{card.color}</h4>
      <div className="card-info">
        <div className="card-price">${card.price}</div>
        <button className="button">ADD TO CART</button>
      </div>
    </div>
  )
}
