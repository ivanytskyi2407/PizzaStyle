import s from './PizzaCard.module.css';
import { useState } from 'react';
import AddToCartButton from '../../AddToCartButton/AddToCartButton';
import CartCounter from '../../CartCounter/CartCounter';
import RemoveFromCartButton from '../../RemoveFromCartButton/RemoveFromCartButton';
import { useSelector } from 'react-redux';
export default function PizzaCard({ pizzas }) {
  const cartCount1 = useSelector((state) => state.pizzaStyle.cart);
  console.log(cartCount1);
  const [cartCount, setCartCount] = useState(0);

  function decrementCartCount() {
    if (cartCount > 1) {
      setCartCount(cartCount - 1);
    } else {
      setCartCount(0);
    }
  }

  function removeFromCart() {
    setCartCount(0);
  }

  return pizzas.map(({ id, title, description, price, image }) => {
    return (
      <li key={id} className={s.card}>
        <img src={image} alt={title} />
        <div className={s.card__information}>
          <h3 className={s.card__name}>{title}</h3>
          <p>{description}</p>
          {cartCount === 0 ? (
            <AddToCartButton id={id} />
          ) : (
            <div>
              <CartCounter
                count={cartCount}
                id={id}
                decrementCartCount={decrementCartCount}
              />
              <RemoveFromCartButton removeFromCart={removeFromCart} />
            </div>
          )}
          <span>{price}UAH</span>
        </div>
      </li>
    );
  });
}
