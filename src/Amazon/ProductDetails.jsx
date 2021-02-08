import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import db from "./firebase";
const ProductDetails = () => {
  const { id } = useParams();
  const { name } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.ProductReducer);
  const [count, setcount] = useState(1);
  const [price, setprice] = useState(
    Math.round((selectedProduct.discount / 100) * selectedProduct.price)
  );

  useEffect(() => {
    if (name === "bedsheet") {
      dispatch({
        type: "BEDSHEET",
        id,
      });
    } else if (name === "decorator") {
      dispatch({
        type: "DECORATOR",
        id,
      });
    } else if (name === "mirror") {
      dispatch({
        type: "MIRROR",
        id,
      });
    }
  }, [id]);

  const sendtocart = () => {
    dispatch({
      type: "ADD_TO_CART",
      count,
      selectedProduct,
      id,
    });
    if (selectedProduct) {
      db.collection("product").add({
        name: selectedProduct.name,
        price: selectedProduct.price,
        discount: selectedProduct.discount,
        image: selectedProduct.image,
        quantity: count,
        id: id,
      });
    }
  };
  const truncate = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num);
    }
  };
  const minus = () => {
    if (count > 1 && count < 6) {
      setcount(count - 1);
      const pr = Math.round(
        (selectedProduct.discount / 100) * selectedProduct.price
      );

      setprice(price - pr);
    }
  };
  const plus = () => {
    if (count < 5) {
      setcount(count + 1);
      const pr = Math.round(
        (selectedProduct.discount / 100) * selectedProduct.price
      );
      setprice(price + pr);
      console.log(price);
    }
  };

  return (
    <div className="productdetails">
      <div className="productdetails__container">
        <div className="productdetails__image">
          <img
            src={selectedProduct.image}
            style={{ width: "80%", minWidth: "300px" }}
            alt="product_img"
          />
        </div>

        <div className="productdetails__info">
          <p>Barnd:{truncate(`${selectedProduct.name}`, 7)}</p>
          <h2>{selectedProduct.name}</h2>
          <div className="price">
            Price:
            <span>
              ₹
              {price
                ? price
                : Math.round(
                    (selectedProduct.discount / 100) * selectedProduct.price
                  )}
            </span>
            <p className="text">Discount: {selectedProduct.discount}%</p>
            <p className="text">Inclusive of all taxes</p>
          </div>
          <div className="texts">
            <span>Fit:</span>
            <p>True to size. Order usual size. </p>
          </div>
          <div className="cart__box">
            <p className="minus" onClick={() => minus()}>
              <BiMinus />
            </p>
            <p>{count}</p>
            <p className="plus" onClick={() => plus()}>
              <BsPlus />
            </p>
          </div>
          <button className="btn" onClick={() => sendtocart()}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
