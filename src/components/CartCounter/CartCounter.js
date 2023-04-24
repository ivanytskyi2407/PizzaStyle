import { useDispatch, useSelector } from 'react-redux';
import { addToCart, remove, removeFromCart } from '../../redux/pizzaSlice';

function CartCounter({ id }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.pizzaStyle.cart);
  const count = cart.find((item) => item.id === id);

  const handleIncrement = () => {
    dispatch(addToCart(id));
  };

  const handleDecrement = () => {
    if (count.quantity === 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(remove(id));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      {count.quantity > 0 ? (
        <>
          <button onClick={handleDecrement}>-</button>
          <span>{count.quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </>
      ) : (
        <button onClick={handleIncrement}>Add to Cart</button>
      )}
      {count.quantity >= 1 && <button onClick={handleRemove}>Remove</button>}
    </div>
  );
}

export default CartCounter;
