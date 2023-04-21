import { createSlice } from '@reduxjs/toolkit';
import { pizzas } from '../products/pizzas';
const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState: {
    pizzas,
  },
  reducers: {
    addPizza(state, action) {
      state.pizza.push(action.payload);
    },
    removePizza(state, action) {},
  },
});
export const { addPizza, removePizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
