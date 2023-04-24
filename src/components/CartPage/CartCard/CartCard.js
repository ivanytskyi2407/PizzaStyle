import s from './CartCard.module.css';
import CartCounter from '../../CartCounter/CartCounter';
function CartCart({ cart }) {
  return cart.map(({ id, title, description, price, image, quantity }) => {
    return (
      <li key={id} className={s.card}>
        <img src={image} alt={title} />
        <div className={s.card__information}>
          <h3 className={s.card__name}>{title}</h3>
          <p>{description}</p>
          <CartCounter id={id} />
          <span>{price * quantity}UAH</span>
        </div>
      </li>
    );
  });
}

export default CartCart;
