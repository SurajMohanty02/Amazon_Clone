import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Mirror.css";
const Mirror = () => {
  const { mirror } = useSelector((state) => state.ProductReducer);
  const truncate = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num);
    }
  };
  return (
    <div className="mirror">
      <p className="heading">
        Price and other details may vary based on size and colour
      </p>
      <div className="row">
        {mirror.map((info) => (
          <div className="column nature" key={info.id}>
            <div className="content">
              <Link to={`/productdetails/mirror/${info.id}`}>
                <img
                  src={info.image}
                  alt="Mountains"
                  style={{ width: "50%" }}
                />
              </Link>
              <h4>{truncate(`${info.name}`, 15)}</h4>
              <Link className="href" to={`/productdetails/${info.id}`}>
                <p>CLick here</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mirror;
