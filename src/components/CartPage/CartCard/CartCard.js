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
function CartCart() {
  const cart = useSelector((state) => state.pizzaStyle.cart);

  return cart.map(({ id, title, description, price, image, quantity }) => {
    return (
      <Grid item xs={2} sm={4} md={4} key={id}>
        <Card
          sx={{
            height: '100%',
          }}
        >
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
            <Typography variant="body1">{price * quantity}UAH</Typography>
          </CardContent>
          <CardActions>
            <CartCounter id={id} />
          </CardActions>
        </Card>
      </Grid>
    );
  });
}

export default CartCart;
