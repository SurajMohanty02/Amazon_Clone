import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { AiFillDelete } from "react-icons/ai";
import db from "./firebase";
const Cart = () => {
  const productDetails = useSelector((state) => state.CartReducer);
  console.log(productDetails);
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();
  const truncate = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    }
  };
  useEffect(() => {
    db.collection("product").onSnapshot((snapshot) => {
      setdata(
        snapshot.docs.map((info) => ({
          id: info.id,
          data: info.data(),
        }))
      );
    });
    dispatch({
      type: "ADD_TO_CART",
      data,
    });
  }, []);
  console.log(data);
  const deleteProduct = (info) => {
    db.collection("product")
      .doc(info.id)
      .delete()
      .then(function () {
        alert("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <section>
      {data[0] ? (
        <section>
          <h1>Your Cart:</h1>

          <div className="cartbox">
            <div className="cartbox__container">
              <div className="cartbox__heading">
                <div className="cl-1">Item</div>
                <div className="cl-2">Name</div>
                <div className="cl-3">Quantity</div>
                <div className="cl-4">Price</div>
                <div className="cl-5">TotalPrice</div>
                <div className="cl-6">Delete</div>
              </div>
              {data.map((info) => (
                <div className="cartbox__data" key={info.id}>
                  <div className="cl-1">
                    <img src={info.data.image} alt="" />
                  </div>
                  <div className="cl-2">
                    {truncate(`${info.data.name}`, 10)}
                  </div>
                  <div className="cl-3">{info.data.quantity}</div>
                  <div className="cl-4">
                    {Math.round(
                      (`${info.data.discount}` / 100) * `${info.data.price}`
                    )}
                  </div>
                  <div className="cl-5">
                    {Math.round(
                      (`${info.data.discount}` / 100) * `${info.data.price}`
                    ) * info.data.quantity}
                  </div>
                  <div className="cl-6">
                    <AiFillDelete
                      fontSize="xx-large"
                      className="delete"
                      onClick={() => deleteProduct(info)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="summery">
              <h3>Summery</h3>
              <div className="summery__container">
                <div className="item">
                  <span> Total Items:</span>
                  <span className="space">?</span>
                </div>
                <div className="totalprice">
                  <span>TotalPrice:</span>
                  <span className="space"> ₹ ?</span>
                </div>
                <div className="button">
                  <button className="bttn">Check Out</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="nodata">
          <div className="wrap">
            <div className="loading">
              <div className="bounceball"></div>
              <div className=" texty">Your Cart is Empty!</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
