import s from './PizzaCard.module.css';
import AddToCartButton from '../../AddToCartButton/AddToCartButton';
import CartCounter from '../../CartCounter/CartCounter';
import { useSelector } from 'react-redux';
export default function PizzaCard({ pizzas }) {
  const cart = useSelector((state) => state.pizzaStyle.cart);

  return pizzas.map(({ id, title, description, price, image }) => {
    const isInCart = cart.some((item) => item.id === id);

    return (
      <li key={id} className={s.card}>
        <img src={image} alt={title} />
        <div className={s.card__information}>
          <h3 className={s.card__name}>{title}</h3>
          <p>{description}</p>
          {isInCart ? <CartCounter id={id} /> : <AddToCartButton id={id} />}
          <span>{price}UAH</span>
        </div>
      </li>
    );
  });
}
