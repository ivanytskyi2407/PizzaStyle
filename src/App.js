import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Pizzas from './components/PizzaPage/PizzaPage';
import CartPage from './components/CartPage/CartPage';
import Page404 from './components/Page404/Page404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index exact="true" element={<Pizzas />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
