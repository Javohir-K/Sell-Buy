import React, { useEffect, useState } from "react";
import "./UploadProduct.css";
import { db, storage } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import ClearIcon from "@mui/icons-material/Clear";

function UploadProduct() {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(998);
  const [location, setLocation] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const [users, setUsers] = useState([]);
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");
  const [product, setProducts] = useState([])
  


  

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);
  const arr = users
    .filter((item) => item.data.email === user?.email)
    .map((item) => item.data.name);

  const handleUploadImage = (e) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // console.log(url);
            setUrl(url);
          });
      }
    );
  };

  const handleRemove = (e) => {
    e.preventDefault();
    storage.ref("images").child(image.name).delete();
    const x = document.querySelector(".piw_showImage");
    x.src = "";
    setUrl("");
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (
      url === "" ||
      productDesc === "" ||
      productName === "" ||
      location === "" ||
      image == null ||
      phoneNumber == null ||
      price == null ||
      category === ""
    ) {
      alert("All fields must be filled");
    } else {
      db.collection("products").add({
        name: productName,
        image: url,
        description: productDesc,
        location: location,
        phone_number: phoneNumber,
        owner: arr,
        price: price,
        accepted: false,
        category: category
      });
    }
    // (e) => {
    //   db.collection("products")
    //   .where("name","==", productName)
    //   .where("owner","==", arr )
    //   .onSnapshot((snapshot) => {
    //     setProducts(
    //       snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
    //     );
    //   });
    // }
  };

  return (
    <div className="uploads">
      <div className="uploads_top">
        <h2>Sell your product here</h2>
      </div>
      <div className="uploads_middle">
        <div className="upload_info">
          <div className="upload_card">
            <p>Name of your product *</p>
            <input
              type="text"
              name=""
              id="productNameInput"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="e.g. Iphone 13 Pro"
            />
          </div>
          <div className="upload_card">
            <p>Select category</p>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              id="productCategory"
            >
              <option value="smartphones">Smartphones</option>
              <option value="computers">Computers</option>
              <option value="auto">Auto</option>
              <option value="house">Houses and Apartment</option>
              <option value="clothes">Clothes</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="upload_card">
            <p>Description about your product *</p>
            <textarea
              name=""
              value={productDesc}
              onChange={(e) => setProductDesc(e.target.value)}
              placeholder="Write something about your product to describe it`s features "
              id=""
              cols="60"
              rows="10"
            ></textarea>
          </div>
          <div className="upload_card">
            <p>Price (in US dollar)</p>
            <input
              type="number"
              name=""
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="priceInput"
              placeholder="0"
            />
          </div>
          <div className="upload_card">
            <p>Photo of your product</p>
            <div className="piw">
              <div className="piw_border">
                <div className="photoInput_wrapper">
                  {url ? (
                    <img className="piw_showImage" src={url} alt="" />
                  ) : (
                    "Select photo"
                  )}
                  <input
                    type="file"
                    name=""
                    onChange={handleChange}
                    id="photoInput"
                    accept="image/heic, image/png, image/jpg, image/jpeg, image/webp"
                  />
                </div>
                {url ? (
                  <button
                    id="piw_remove_btn"
                    className="hide"
                    onClick={handleRemove}
                  >
                    <ClearIcon />
                  </button>
                ) : (
                  ""
                )}
              </div>
              <input type="button" value="Upload" onClick={handleUploadImage} />
              <progress value={progress} max="100" />
            </div>
          </div>
          <div className="upload_card">
            <p>Location</p>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              name=""
              id="locationInput"
              placeholder="e.g Los-Angeles, California, US"
            />
          </div>
          <div className="upload_card">
            <p>Phone Number</p>
            <input
              type="number"
              name=""
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              id="phoneNumberInput"
            />
          </div>
          <button className="uploadProduct_btn" onClick={handleUpload}>
          {
            product.map((item)=>(
              <span>{item.data.name}</span>
            ))
          }  upload product
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadProduct;
