import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { addToCart } from '../../redux/pizzaSlice';

export default function AddToCartButton({ id }) {
  const dispatch = useDispatch();
  const add = () => dispatch(addToCart(id));
  return <Button onClick={add}>Add to cart</Button>;
}
AddToCartButton.propTypes = { id: PropTypes.number.isRequired };
