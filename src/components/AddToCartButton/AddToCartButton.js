import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/pizzaSlice';
function AddToCartButton({ id }) {
  const dispatch = useDispatch();
  const add = () => dispatch(addToCart(id));
  return <button onClick={add}>Add to cart</button>;
}

export default AddToCartButton;
