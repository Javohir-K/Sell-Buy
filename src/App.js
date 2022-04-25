import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";
import { db, auth } from "./firebase";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import UploadProduct from "./components/UploadProduct";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollTop";
import AboutUs from "./components/AboutUs";
import NeedHelp from "./components/NeedHelp";

function App() {
  const [{}, dispatch] = useStateValue();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <ScrollToTop>
      <div className="app">
        <Header />
        <div className="app_container">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sell-product" element={<UploadProduct />} />
            {products.map((item, i) => (
              <Route
                key={item.id}
                path={`/products/${item.id}`}
                element={
                  <ProductPage
                    image={item.data.image}
                    name={item.data.name}
                    description={item.data.description}
                    owner_name={item.data.owner}
                    price={item.data.price}
                    phone_number={item.data.phone_number}
                    time={item.data.time}
                  />
                }
              />
            ))}
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/help" element={<NeedHelp/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ScrollToTop>
  );
}

export default App;
