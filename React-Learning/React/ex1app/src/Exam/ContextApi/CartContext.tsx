import{ createContext, useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  updateQuantity: (id: number, delta: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        { id: 1, name: 'tshirt', price: 1000, quantity: 1 },
        { id: 2, name: 'jeans', price: 500, quantity: 1 },
    ]);

    const updateQuantity = (id: number, delta: number): void => {
        setCartItems((items: CartItem[]) =>
            items.map((item: CartItem) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};