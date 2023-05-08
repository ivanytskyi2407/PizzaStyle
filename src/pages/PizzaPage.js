import PizzaCard from '../components/PizzaCard/PizzaCard';
import { useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@mui/material';

export default function Pizzas() {
  const pizzas = useSelector((state) => state.pizzaStyle.pizzas);
  return (
    <Container sx={{ mb: 5, mt: 10 }}>
      <Typography
        variant="h1"
        body1="span"
        align="center"
        sx={{
          fontSize: {
            lg: 54,
            md: 44,
            sm: 39,
            xs: 24,
          },
          mb: 3,
        }}
      >
        Pizza for today
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <PizzaCard pizzas={pizzas} />
      </Grid>
    </Container>
  );
}
