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
  updateItem: (id: number, updatedItem: Partial<CartItem>) => void;
  clearCart: () => void;
}

const dataCartMock: CartItem[] = [
  {
    title: 'Suíte Master',
    daily: '2',
    stay: '08/12/2023 - 10/12/2023',
    numberGuests: '2',
    quantity: 3,
    price: 320,
    id: 1
  },
  {
    title: 'Luxo Casal',
    daily: '4',
    stay: '08/12/2023 - 10/12/2023',
    numberGuests: '3',
    quantity: 4,
    price: 480,
    id: 2
  }
];

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(dataCartMock);

  const updateItem = (id: number, updatedItem: Partial<CartItem>) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  const addItem = (item: CartItem) => {
    const itemExists = cart.some(cartItem => cartItem.id === item.id);
    if (itemExists) {
      updateItem(item.id, item);
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
