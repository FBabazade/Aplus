import "./Xususi.css";

function Carditems({ item }) {
  return (
    <>
      <div className="product-card-content" key={item.id}>
        <img src={item?.picture} alt="" />
        <div className="pricetag">
          <h4>{item?.price}₼</h4>
          <h5>{item?.sale_price}₼</h5>
        </div>
        <div className="sale">22%</div>
        <h3>{item?.title?.az}</h3>
      </div>
    </>
  );
}

export default Carditems;
