import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Product } from "../../types";

const API_URL = "https://fakestoreapi.com/products/";

export const ProductForm: React.FC = () => {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    setError("");
    const id = parseInt(productId);
    const qty = parseInt(quantity);

    if (isNaN(id) || isNaN(qty) || qty <= 0) {
      setError("ID o cantidad inválidos. Ingresa los valores en números.");
      return;
    }

    try {
      const response = await fetch(`${API_URL + id}`);
      if (!response.ok) {
        throw new Error("Producto no encontrado.");
      }
      const product: Product = await response.json();

      addToCart({ ...product, quantity: qty });

      // Reset form
      setProductId("");
      setQuantity("");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="w-[85%] mx-auto add-product text-center mb-8 flex justify-around items-baseline">
      <div>
        <input
          type="text"
          placeholder="ID del producto"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          className="border border-black/10 dark:border-white/10 p-2 mb-2 mx-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Cantidad"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border border-black/10 dark:border-white/10 p-2 mb-2 mx-2 rounded-lg"
        />
        <button
          onClick={handleAddToCart}
          className="bg-primary text-white px-4 py-2 ml-[5rem] rounded-lg hover:saturate-150 transition duration-300"
        >
          Agregar al carrito
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default ProductForm;
