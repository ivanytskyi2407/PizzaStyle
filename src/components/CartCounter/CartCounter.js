import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { addToCart, remove, removeFromCart } from '../../redux/pizzaSlice';

export default function CartCounter({ id }) {
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
          <Button aria-label="decrement" onClick={handleDecrement}>
            -
          </Button>
          <span>{count.quantity}</span>
          <Button aria-label="increment" onClick={handleIncrement}>
            +
          </Button>
        </>
      ) : (
        <Button onClick={handleIncrement}>Add to Cart</Button>
      )}
      {count.quantity >= 1 && <Button onClick={handleRemove}>Remove</Button>}
    </div>
  );
}
CartCounter.propTypes = { id: PropTypes.number.isRequired };
