import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home";
import PrivateRoute from "./auth/PrivateRoute";
import { CART, ROOT } from "./CONSTANTS";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={ROOT} index element={<Home />} />
      {/* <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}

      <Route
        path={CART}
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};
