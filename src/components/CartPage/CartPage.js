import { useSelector } from 'react-redux';
import CartList from './CartList/CartList';
import CartCard from './CartCard/CartCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeAnOrder } from '../../redux/pizzaSlice';

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.pizzaStyle.cart);
  const totalSum = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <>
      {cart.length === 0 ? (
        <h2>
          Please, choose pizza <Link to="/">here</Link>
        </h2>
      ) : (
        <>
          <CartList>
            <CartCard cart={cart} />
          </CartList>
          <h3>Total: {totalSum} UAH</h3>
          <button onClick={() => dispatch(makeAnOrder())}>Make an order</button>
        </>
      )}
    </>
  );
}
