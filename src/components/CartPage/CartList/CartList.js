import s from './CartList.module.css';
export default function CartList({ children }) {
  return <ul className={s.cards}>{children}</ul>;
}
