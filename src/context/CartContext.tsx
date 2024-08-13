import { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  title: string;
  daily: string;
  stay: string;
  numberGuests: string;
  quantity: number;
  price: number;
  id: number;
}

interface CartContextProps {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateItem: (id: number, newQuantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const updateItem = (id: number, newQuantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity
            }
          : item
      )
    );
  };

  const addItem = (item: CartItem) => {
    const itemExists = cart.some(cartItem => cartItem.id === item.id);
    if (itemExists) {
      updateItem(item.id, item.quantity + 1);
    } else {
      setCart(prevCart => [...prevCart, item]);
    }
  };

  const removeItem = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('Erro: use CartProvider');
  }
  return context;
};
