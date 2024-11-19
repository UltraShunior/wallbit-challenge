
import { useCart } from '../../context/CartContext';

const CartSummary = () => {
  const { totalQuantity, totalCost, cartCreationDate } = useCart();

  return (
    <div className="w-[85%] mx-auto">
      <p>Total de productos: {totalQuantity}</p>
      <p>Costo total: ${totalCost.toFixed(2)}</p>
      {cartCreationDate && (
        <p>
          Fecha de creación del carrito:{' '}
          {new Date(cartCreationDate).toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default CartSummary;