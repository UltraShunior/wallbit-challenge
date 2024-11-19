import React from 'react';
import { useCart } from '../../context/CartContext';
import { CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart } = useCart();
  const subtotal = item.price * item.quantity;

  return (
    <tr>
      <td className="px-4 py-2 max-sm:hidden">
        <img src={item.image} alt={item.title} width="50" />
      </td>
      <td className="px-4 py-2 max-sm:text-sm max-sm:px-2">{item.title}</td>
      <td className="px-4 py-2 text-center max-sm:text-sm max-sm:px-2">
        ${item.price.toFixed(2)}
      </td>
      <td className="px-4 py-2 text-center max-sm:text-sm max-sm:px-2">
        {item.quantity}
      </td>
      <td className="px-4 py-2 text-center max-sm:hidden">
        ${subtotal.toFixed(2)}
      </td>
      <td className="px-4 py-2 text-center max-sm:text-sm max-sm:px-2">
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default CartItem;