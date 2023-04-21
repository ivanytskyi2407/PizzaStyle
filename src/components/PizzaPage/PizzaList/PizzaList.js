import s from './PizzaList.module.css';
export default function PizzaList({ children }) {
  return <ul className={s.cards}>{children}</ul>;
}
