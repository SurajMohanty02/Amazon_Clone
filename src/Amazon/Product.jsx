import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
const Product = () => {
  return (
    <div className="product">
      <div className="product__container">
        <div className="row">
          <div className="column nature">
            <div className="content">
              <Link to="/mirror">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/71z-%2BoGG2pL._SL1500_.jpg"
                  alt="Mountains"
                  style={{ width: "100%" }}
                />
              </Link>

              <h4>Mirrors</h4>
              <p>Click here</p>
            </div>
          </div>
          <div className="column nature">
            <div className="content">
              <Link to="/decorators">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/91HxX-2sdqL._SL1500_.jpg"
                  alt="Lights"
                  style={{ width: "100%" }}
                />
              </Link>
              <h4>Lights</h4>
              <p>Lorem ipsum dolor..</p>
            </div>
          </div>

          <div className="column nature">
            <div className="content">
              <Link to="/bedsheet">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81ojeFc2ERL._SL1200_.jpg"
                  alt="Mountains"
                  style={{ width: "100%" }}
                />
              </Link>
              <h4>Bedsheets</h4>
              <p>Click here</p>
            </div>
          </div>

          <div className="column nature">
            <div className="content">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/413NcScIaQL.jpg"
                alt="Mountains"
                style={{ width: "100%" }}
              />
              <h4>Sports Shoes</h4>
              <p>Click here</p>
            </div>
          </div>

          <div className="column nature">
            <div className="content">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/61tnh%2BUkmpL._UL1100_.jpg"
                alt="Mountains"
                style={{ width: "100%" }}
              />
              <h4>Running Shoes</h4>
              <p>Click here</p>
            </div>
          </div>
          <div className="column natur">
            <div className="content">
              <img
                src="https://m.media-amazon.com/images/I/51pt7rpfMCL._AC_UL480_FMwebp_QL65_.jpg"
                alt="Mountains"
                style={{ width: "100%" }}
              />
              <h4>Casual Shoes</h4>
              <p>Lorem ipsum dolor..</p>
            </div>
            <div className="small">
              <img
                src="https://m.media-amazon.com/images/I/81Ss2JFB9EL._AC_UL480_FMwebp_QL65_.jpg"
                alt="Mountains"
                style={{ width: "100%" }}
              />
              <h4>Belt</h4>
              <p>Click here</p>
            </div>
          </div>
          <div className="column nature">
            <div className="content">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51PUMIBLvoL._UL1300_.jpg"
                alt="Mountains"
                style={{ width: "100%" }}
              />
              <h4>Men's t-shirt</h4>
              <p>Lorem ipsum dolor..</p>
            </div>
          </div>
          <div className="column nature">
            <div className="content">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/613bw9v0rtL._UL1208_.jpg"
                alt="Mountains"
                style={{ width: "100%" }}
              />
              <h4>Casual Shirt</h4>
              <p>Click here</p>
            </div>
          </div>
          <div className="column nature">
            <div className="content">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/613yN6sS83L._UL1412_.jpg"
                alt="Mountains"
                style={{ width: "100%" }}
              />
              <h4>Men's Shirt</h4>
              <p>100% Cotton</p>
            </div>
          </div>
          <div className="column nature">
            <div className="content">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/61ROhYSLY3L._UL1500_.jpg"
                alt="Mountains"
                style={{ width: "100%" }}
              />
              <h4>Women's Jacket</h4>
              <p>2 Stripes on Sleeve Stylish Sweatshirt Hoodie for Women</p>
            </div>
          </div>
          <div className="column nature">
            <div className="content">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/61j53czWx0L._UL1500_.jpg"
                alt="Mountains"
                style={{ width: "100%" }}
              />
              <h4>Mountains</h4>
              <p>Lorem ipsum dolor..</p>
            </div>
            <div className="small">
              <img
                src="https://m.media-amazon.com/images/I/81VUkqh9BlL._AC_UL480_FMwebp_QL65_.jpg"
                alt="Mountains"
                style={{ width: "100%" }}
              />
              <h4>Dupatta</h4>
              <p>Designer New Dupatta</p>
            </div>
          </div>
          <div className="column nature">
            <div className="content">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/61aUNORmLuL._UL1500_.jpg"
                alt="Mountains"
                style={{ width: "100%" }}
              />
              <h4>Mountains</h4>
              <p>Lorem ipsum dolor..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
