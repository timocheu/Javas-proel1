import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "@/pages/Login/LoginPage";
import { Checkout } from "@/pages/Checkout/Checkout";
import { SignupPage } from "@/pages/Signup/SignupPage";
import { HomePage} from "./pages/Home/Home";
import { ProductPage } from "./pages/Product/ProductPage";
import { BrandPage } from "./pages/Brand/BrandPage";
import { CartPage } from "./pages/Cart/CartPage";

import  NotFound from "@/pages/NotFound.tsx";

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/cart" element={<CartPage/>} />
                <Route path="/brand" element={<BrandPage/> } />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
    </BrowserRouter>
  )
}

export default App
