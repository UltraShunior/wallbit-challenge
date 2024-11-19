
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";


const CartList = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return <p className="text-center">No hay productos en el carrito.</p>;
  }

  return (
    <div className="cart">
      <div className="w-[85%] mx-auto mb-8 rounded-lg overflow-hidden border border-white/10 max-md:w-full">
        <table className="w-[100%] bg-black/5 dark:bg-[#0a0a0a] rounded-t-lg overflow-hidden">
          <thead className="bg-black/10 dark:bg-white/10">
            <tr>
              <th className="px-4 py-2 max-sm:hidden">Imagen</th>
              <th className="px-4 py-2 max-sm:text-sm max-sm:px-2">Título</th>
              <th className="px-4 py-2 max-sm:text-sm max-sm:px-2">Precio por unidad</th>
              <th className="px-4 py-2 max-sm:text-sm max-sm:px-2">Cantidad</th>
              <th className="px-4 py-2 max-sm:hidden">Subtotal</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
      <CartSummary />
    </div>
  );
};

export default CartList;
