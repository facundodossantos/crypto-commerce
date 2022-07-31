import "./App.scss";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import CartProvider from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="*" element={<div>404</div>} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      </CartProvider>
      
    </>
  );
}

export default App;
