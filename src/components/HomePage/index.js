import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import "./HomePage.css";
import ProductCard from "../ProductCard";
import SearchIcon from "@mui/icons-material/Search";

function HomePage() {
  const [page, setPage] = useState(<AllProducts />);

  function Tab(e) {
    const x = document.querySelectorAll(".category_items");

    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }

    e.target.classList.add("active");
  }

  return (
    <div className="homepage">
      <SearchBar />
      <div className="categories">
        <button
          onClick={(e) => {
            Tab(e);
            setPage(<AllProducts />);
          }}
          className="category_items active"
        >
          All
        </button>
        <button
          onClick={(e) => {
            Tab(e);
            setPage(<Smartphones />);
          }}
          className="category_items"
        >
          Smartphones
        </button>
        <button
          onClick={(e) => {
            Tab(e);
            setPage(<Copmuters />);
          }}
          className="category_items"
        >
          Copmuters
        </button>
        <button
          onClick={(e) => {
            Tab(e);
            setPage(<Auto />);
          }}
          className="category_items"
        >
          Auto
        </button>
        <button
          onClick={(e) => {
            Tab(e);
            setPage(<Houses />);
          }}
          className="category_items"
        >
          House & Apartment
        </button>
        <button
          onClick={(e) => {
            Tab(e);
            setPage(<Clothes />);
          }}
          className="category_items"
        >
          Clothes
        </button>
        <button
          onClick={(e) => {
            Tab(e);
            setPage(<Others />);
          }}
          className="category_items"
        >
          Others
        </button>
      </div>
      {page}
    </div>
  );
}

function Auto() {
  const [auto, setAuto] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("category", "==", "auto")
      .where("accepted", "==", true)
      .onSnapshot((snapshot) => {
        setAuto(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
      });
  }, []);
  return (
    <div className="all_products">
      <h2>Auto and Transorts</h2>
      <div className="all_products_content">
        {auto.length === 0
          ? "There are no products"
          : auto.map((item, i) => (
              <ProductCard
                key={item.id}
                image={item.data.image}
                name={item.data.name}
                price={item.data.price}
                location={item.data.location}
                time="12-JAN/2022"
                link={`/products/${item.id}`}
              />
            ))}
      </div>
    </div>
  );
}

function Houses() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("category", "==", "houses")
      .where("accepted", "==", true)
      .onSnapshot((snapshot) => {
        setHouses(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  return (
    <div className="all_products">
      <h2>Houses and Apartments</h2>
      <div className="all_products_content">
        {houses.length === 0
          ? "There are no products"
          : houses.map((item, i) => (
              <ProductCard
                key={item.id}
                image={item.data.image}
                name={item.data.name}
                price={item.data.price}
                location={item.data.location}
                time="12-JAN/2022"
                link={`/products/${item.id}`}
              />
            ))}
      </div>
    </div>
  );
}

function Clothes() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("category", "==", "clothes")
      .where("accepted", "==", true)
      .onSnapshot((snapshot) => {
        setClothes(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  return (
    <div className="all_products">
      <h2>Clothes</h2>
      <div className="all_products_content">
        {clothes.length === 0
          ? "There are no products"
          : clothes.map((item, i) => (
              <ProductCard
                key={item.id}
                image={item.data.image}
                name={item.data.name}
                price={item.data.price}
                location={item.data.location}
                time="12-JAN/2022"
                link={`/products/${item.id}`}
              />
            ))}
      </div>
    </div>
  );
}

function Smartphones() {
  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("category", "==", "smartphones")
      .where("accepted", "==", true)
      .onSnapshot((snapshot) => {
        setSmartphones(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  return (
    <div className="all_products">
      <h2>Smartphones</h2>
      <div className="all_products_content">
        {smartphones.length === 0
          ? "There are no products"
          : smartphones.map((item, i) => (
              <ProductCard
                key={item.id}
                image={item.data.image}
                name={item.data.name}
                price={item.data.price}
                location={item.data.location}
                time="12-JAN/2022"
                link={`/products/${item.id}`}
              />
            ))}
      </div>
    </div>
  );
}

function Others() {
  const [others, setOthers] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("category", "==", "others")
      .where("accepted", "==", true)
      .onSnapshot((snapshot) => {
        setOthers(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  return (
    <div className="all_products">
      <h2>Others</h2>
      <div className="all_products_content">
        {others.length === 0
          ? "There are no products"
          : others.map((item, i) => (
              <ProductCard
                key={item.id}
                image={item.data.image}
                name={item.data.name}
                price={item.data.price}
                location={item.data.location}
                time="12-JAN/2022"
                link={`/products/${item.id}`}
              />
            ))}
      </div>
    </div>
  );
}

function Copmuters() {
  const [computers, setComputers] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("category", "==", "computers")
      .where("accepted", "==", true)
      .onSnapshot((snapshot) => {
        setComputers(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  return (
    <div className="all_products">
      <h2>Copmuters</h2>
      <div className="all_products_content">
        {computers.map((item, i) => (
          <ProductCard
            key={item.id}
            image={item.data.image}
            name={item.data.name}
            price={item.data.price}
            location={item.data.location}
            time="12-JAN/2022"
            link={`/products/${item.id}`}
          />
        ))}
      </div>
    </div>
  );
}

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("accepted", "==", true)
      .onSnapshot((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  return (
    <div className="all_products">
      <h2>All Products</h2>
      <div className="all_products_content">
        {products.map((item, i) => (
          <ProductCard
            key={item.id}
            image={item.data.image}
            name={item.data.name}
            price={item.data.price}
            location={item.data.location}
            time="12-JAN/2022"
            link={`/products/${item.id}`}
          />
        ))}
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="searchbar">
      <div className="searchbar_inner">
        <SearchIcon />
        <input
          type="text"
          name=""
          id="searchInput"
          placeholder="Search the product you want to buy!"
        />
        <button>search</button>
      </div>
    </div>
  );
}

export default HomePage;
