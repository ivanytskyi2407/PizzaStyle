import s from './PizzaCard.module.css';
export default function PizzaCard({ pizzas }) {
  console.log(pizzas);
  return pizzas.map(({ id, title, description, price, image }) => {
    return (
      <li key={id} className={s.card}>
        <img src={image} alt={title} />
        <div className={s.card__information}>
          <h2 className={s.card__name}>{title}</h2>
          <p>{description}</p>
          <button>Add to cart</button>
          <span>{price}UAH</span>
        </div>
      </li>
    );
  });
}
