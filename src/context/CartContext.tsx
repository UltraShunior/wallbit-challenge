import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { CartItem } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  cartCreationDate: Date | null;
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  totalQuantity: number;
  totalCost: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', []);
  const [cartCreationDate, setCartCreationDate] = useLocalStorage<Date | null>('cartDate', null);

  const addToCart = (product: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      if (!cartCreationDate) setCartCreationDate(new Date());
      return [...prev, product];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    if (cartItems.length === 1) setCartCreationDate(null);
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCreationDate,
      addToCart,
      removeFromCart,
      totalQuantity,
      totalCost
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};