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
    
	};

	return (
    <ProductContext.Provider 
      value={{products, addItem}}
    >
      <CartContext.Provider
        value={cart}
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
