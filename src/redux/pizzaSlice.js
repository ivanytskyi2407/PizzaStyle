import { createSlice } from '@reduxjs/toolkit';
import { pizzas } from '../products/pizzas';
const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState: {
    pizzas,
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      console.log(state);
      console.log(action);
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {},
  },
});
export const { addToCart, removeFromCart } = pizzaSlice.actions;
export default pizzaSlice.reducer;
