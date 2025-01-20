import { createContext, useState } from 'react';
import { type Product } from '../lib';

// Define the type for the cart context value
export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

// Default value for the CartContext
const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
};

// Create the CartContext
export const CartContext = createContext(defaultCartValue);

// CartProvider component to wrap around components that need cart context
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // set status of product
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Return CartContext.Provider
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
