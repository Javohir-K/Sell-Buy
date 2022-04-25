import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import Logo from "../../logo.png";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const [products, setProducts] = useState([]);
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);
  const arr = products
    .filter((item) => item.data.email === user?.email)
    .map((item) => item.data.name);

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <span>Sell</span>&<span>Buy</span>
        </div>
      </Link>

      <div className="header_right">
        {user ? <p className="my_profile">Hello, {arr} </p> : ""}
        <Link to={!user ? "/login" : "/"}>
          <div onClick={handleAuth} className=" header_btn">
            {user ? "Sign Out" : "Sign In"}
          </div>
        </Link>
        {user ? (
          <Link to={user ? "/sell-product" : "/login"}>
            <div className="header_btn sell_btn">sell product</div>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
