import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "@/pages/Login/LoginPage";
import { Checkout } from "@/pages/Checkout/Checkout";
import { SignupPage } from "@/pages/Signup/SignupPage";
import  NotFound from "@/pages/NotFound.tsx";

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
    </BrowserRouter>
  )
}

export default App
