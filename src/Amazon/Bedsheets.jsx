import React, { useEffect } from "react";
import "./Mirror.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Bedsheets = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { bedsheet } = useSelector((state) => state.ProductReducer);
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
        {bedsheet.map((info) => (
          <div className="column nature" key={info.id}>
            <div className="content">
              <Link to={`/productdetails/bedsheet/${info.id}`}>
                <img
                  src={info.image}
                  alt="Decorators"
                  style={{ width: "50%" }}
                />
              </Link>
              <h4>{truncate(`${info.name}`, 15)}</h4>
              <Link className="href" to={`/productdetails/${info.id}`}>
                <p>Click here</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bedsheets;
