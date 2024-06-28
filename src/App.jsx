import "./css/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import NotFound from "./components/NotFound";
import { ItemListContainer } from "./components/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CheckOut } from "./components/CheckOut";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/finalizar-compra" element={<CheckOut />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

