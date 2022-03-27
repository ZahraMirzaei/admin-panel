import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import CustomerEdit from "./pages/CustomerEdit";
import Products from "./pages/Products";
import ProductEdit from "./pages/ProductEdit";
import NotFound from "./pages/NotFound";
import BlankPage from "./pages/BlankPage";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";
import LoginContext from "./store/loginContext";

import "./scss/App.scss";
function App() {
  const loginCtx = useContext(LoginContext);
  return (
    <BrowserRouter>
      <Routes>
        {!loginCtx.isLogin ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/:customerId" element={<CustomerEdit />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductEdit />} />
            <Route path="/orders" element={<BlankPage />} />
            <Route path="/analytics" element={<BlankPage />} />
            <Route path="/discount" element={<BlankPage />} />
            <Route path="/inventory" element={<BlankPage />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
