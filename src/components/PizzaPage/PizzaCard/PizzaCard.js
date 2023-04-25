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
  Box,
} from '@mui/material';
export default function PizzaCard({ pizzas }) {
  const cart = useSelector((state) => state.pizzaStyle.cart);

  return pizzas.map(({ id, title, description, price, image }) => {
    const isInCart = cart.some((item) => item.id === id);

    return (
      <Grid item xs={2} sm={4} md={4} key={id}>
        <Card sx={{ height: '100%' }}>
          <Box sx={{ flexDirection: 'row' }}>
            <CardMedia
              image={image}
              alt={title}
              title={title}
              sx={{
                height: 307,
              }}
            />
            <CardContent>
              <Typography variant="h6" component="h3">
                {title}
              </Typography>
              <Typography variant="body2">{description}</Typography>
              <Typography variant="body1">{price}UAH</Typography>
            </CardContent>
            <CardActions>
              {isInCart ? <CartCounter id={id} /> : <AddToCartButton id={id} />}
            </CardActions>
          </Box>
        </Card>
      </Grid>
    );
  });
}
