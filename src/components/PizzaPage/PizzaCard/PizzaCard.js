import AddToCartButton from '../../AddToCartButton/AddToCartButton';
import CartCounter from '../../CartCounter/CartCounter';
import { useSelector } from 'react-redux';
import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';
export default function PizzaCard({ pizzas }) {
  const cart = useSelector((state) => state.pizzaStyle.cart);
  return pizzas.map(({ id, title, description, price, image }) => {
    const isInCart = cart.some((item) => item.id === id);

    return (
      <Grid item xs={2} sm={4} md={4} key={id}>
        <Card sx={{ height: '100%' }}>
          <CardMedia
            image={image}
            alt={title}
            title={title}
            sx={{
              height: 350,
            }}
          />
          <CardContent sx={{ height: 100 }}>
            <Typography variant="h6" component="h3">
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
            <Typography variant="body1">{price}UAH</Typography>
          </CardContent>
          <CardActions>
            {isInCart ? <CartCounter id={id} /> : <AddToCartButton id={id} />}
          </CardActions>
        </Card>
      </Grid>
    );
  });
}