import './Bottle.css'
const Bottle = ({bottle,handleCard}) => {
    return (
        <div className="productCard">
            <img className="bottle_img" src={bottle.img} alt="" />
            <h3>{bottle.name}</h3>
            <h4>{bottle.price} $</h4>
            <button onClick={()=>handleCard(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;