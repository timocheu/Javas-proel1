import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "@/pages/Login/LoginPage";
import { CheckoutPage } from "@/pages/Checkout/CheckoutPage";
import { SignupPage } from "@/pages/Signup/SignupPage";
import  NotFound from "@/pages/NotFound.tsx";

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
    </BrowserRouter>
  )
}

export default App
