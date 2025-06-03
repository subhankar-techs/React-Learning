import { useState, createContext, useContext, PropsWithChildren } from 'react';

interface Item {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface CartContext {
    cart: Item[];
    addToCart: (item: Item) => void;
}

const CartContext = createContext<CartContext | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};

export function CartProvider({ children }: PropsWithChildren<{}>) {
    const [cart, setCart] = useState<Item[]>([]);

    const addToCart = (item: Item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(i => i.id === item.id);
            if (existingItem) {
                return prevCart.map(i =>
                    i.id === item.id ? { ...i, quantity: item.quantity } : i
                );
            }
            return [...prevCart, item];
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

const items = [
    { id: 1, name: 'Tshirt', price: 1000 },
    { id: 2, name: 'Jeans', price: 500 },
    { id: 3, name: 'Cap', price: 200 },
    { id: 4, name: 'Shoes', price: 1500 },
];

const Items = () => {
    const { addToCart } = useCart();  
    const [quantities, setQuantities] = useState<{ [id: number]: number }>({});

    const QuantityChange = (id: number, del: number) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) + del),
        }));
    };

    return (
        <table border={1} cellPadding={5} style={{ marginBottom: '20px' }}>
            <thead>
                <tr>
                    <th>SL NO.</th>
                    <th>ITEM NAME</th>
                    <th>Item Price(per item)</th>
                    <th>ITEM QUANTITY</th>
                    <th>ACTION BUTTON</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                            <button onClick={() => QuantityChange(item.id, 1)}>+</button>
                            {' '}{quantities[item.id] || 1}{' '}
                            <button onClick={() => QuantityChange(item.id, -1)}>-</button>
                        </td>
                        <td>
                            <button onClick={() =>
                                    addToCart({ ...item, quantity: quantities[item.id] || 1 })
                                }>
                                BUY NOW
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Items;