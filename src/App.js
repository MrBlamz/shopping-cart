import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/index';
import Products from './components/Products/index';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  function addProductToCart({ name, id, price, quantity }) {
    setCart([...cart, '']);
  }

  function fetchProducts() {
    const data = [];

    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => data.push(...json));

    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((json) => data.push(...json));

    return data;
  }

  // Fetch data from fakeAPI and store it when component mounts
  useEffect(() => {
    const data = fetchProducts();
    setProducts(data);
  }, []);

  return (
    <div className='App'>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar logoText='Fake Store' itemNumber={cart.length} />
        <Switch>
          <Route exact path='/products'>
            <Products list={products} onClick={addProductToCart} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
