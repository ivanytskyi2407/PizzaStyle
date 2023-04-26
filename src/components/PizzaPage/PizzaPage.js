import PizzaCard from './PizzaCard/PizzaCard';
import { useSelector } from 'react-redux';
import { Container, Grid } from '@mui/material';

export default function Pizzas() {
  const pizzas = useSelector((state) => state.pizzaStyle.pizzas);
  return (
    <Container>
      <Grid
        container
        sx={{ mb: 2 }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <PizzaCard pizzas={pizzas} />
      </Grid>
    </Container>
  );
}
