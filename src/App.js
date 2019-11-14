import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContexts.js';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
    // add the given item to the cart
    setCart(cart + item);
    console.log(cart);
	};

	return (
    <ProductContext.Provider value={{products, setCart}}>
      <div className="App">
        <Navigation cart={cart} />

        {/* Routes */}
        <Route
          exact
          path="/"
          render={() => (
            <Products
              products={products}
              addItem={addItem}
            />
          )}
        />

        <Route
          path="/cart"
          render={() => <ShoppingCart cart={cart} />}
        />
      </div>
    </ProductContext.Provider>
	);
}

export default App;
