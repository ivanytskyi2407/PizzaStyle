import PizzaList from './PizzaList/PizzaList';
import PizzaCard from './PizzaCard/PizzaCard';
import { useSelector } from 'react-redux';

export default function Pizzas() {
  const pizzas = useSelector((state) => state.pizzas);
  return (
    <PizzaList>
      <PizzaCard pizzas={pizzas} />
    </PizzaList>
  );
}
