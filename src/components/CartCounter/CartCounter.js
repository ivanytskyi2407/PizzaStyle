import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/pizzaSlice';

function CartCounter({ id, count, decrementCartCount }) {
  const dispatch = useDispatch();
  const add = () => dispatch(addToCart(id));
  return (
    <div>
      <button onClick={decrementCartCount}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
    </div>
  );
}

export default CartCounter;
