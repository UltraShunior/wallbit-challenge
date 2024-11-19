
import { CartProvider } from '../context/CartContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductForm from '../components/product/ProductForm';
import CartList from '../components/cart/CartList';

export function App() {
  return (
    <CartProvider>
      <main className="app w-[70%] min-h-[calc(90vh-3rem)] mx-auto my-[5vh] max-lg:w-full">
        <Header title='Tienda - El topo' />
        <ProductForm />
        <CartList />
      </main>
      <Footer/>
    </CartProvider>
  );
}

export default App;