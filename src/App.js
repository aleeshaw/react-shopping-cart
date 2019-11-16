import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
//Contexts
import { ProductContext } from './contexts/ProductContexts.js';
import { CartContext } from './contexts/CartContext.js';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
    // add the given item to the cart
    setCart(cart => [...cart, item]);
    //take cart original state, add new item to the entirety of cart contents...
    //console.log(item);
  };
  
  const removeItem = removedItem => {
    const altCart = cart.filter(item => item.id !== removedItem.id);
    //console.log(altCart);
    setCart(altCart);
  };
//TODO fix bug with removing multiple items...has to do with identical item ids when adding multiples of the same product.

	return (
    <ProductContext.Provider 
      value={{ products, addItem }}
    >
      <CartContext.Provider
        value={{ cart, removeItem }}
      >
        <div className="App">
          <Navigation cart={cart} />

          {/* Routes */}
          <Route
            exact
            path="/"
            component={Products}
          />

          <Route
            path="/cart"
            render={() => <ShoppingCart cart={cart} />}
          />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
	);
}

export default App;
