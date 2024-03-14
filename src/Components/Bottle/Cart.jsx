import PropTypes from 'prop-types'; 
const Cart = ({bottle, handleRemoveFromCart}) => {
    return (
        <div>
            <img className="cart-img" src={bottle.img} alt="" />
            <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
        </div>
    );
};
Cart.propTypes = {
    bottle: PropTypes.array,
    handleRemoveFromCart: PropTypes.func,
}
export default Cart;