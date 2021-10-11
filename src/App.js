import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/index';
import Spinner from './components/Spinner';
import Home from './views/Home/index';
import Products from './views/Products/index';
import Cart from './views/Cart/index';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function addProductToCart(id) {
    const product = products.find((item) => item.id === id);

    if (cart.includes(product)) {
      product.quantity += 1;
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  }

  function changeProductQuantity(amount, id) {
    const product = cart.find((item) => item.id === id);
    if (product.quantity + amount < 1) return;
    product.quantity = product.quantity + amount;
    setCart([...cart]);
  }

  function removeItemFromCart(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  // Fetch data from fakeAPI and store it when component mounts
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const menClothing = await fetch(
        "https://fakestoreapi.com/products/category/men's clothing"
      ).then((res) => res.json());

      const womenClothing = await fetch(
        "https://fakestoreapi.com/products/category/women's clothing"
      ).then((res) => res.json());

      setProducts([...menClothing, ...womenClothing]);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className='App'>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar logoText='Fake Store' itemNumber={cart.length} />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/products'>
            {isLoading ? (
              <Spinner />
            ) : (
              <Products list={products} onClick={addProductToCart} />
            )}
          </Route>
          <Route exact path='/cart'>
            <Cart
              items={cart}
              changeProductQuantity={changeProductQuantity}
              removeItemFromCart={removeItemFromCart}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
