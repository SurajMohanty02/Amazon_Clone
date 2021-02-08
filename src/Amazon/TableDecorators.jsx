import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import "./Mirror.css";
import { useDispatch, useSelector } from "react-redux";
const TableDecorators = () => {
  const { decorator } = useSelector((state) => state.ProductReducer);

  return (
    <div className="mirror">
      <p className="heading">
        Price and other details may vary based on size and colour
      </p>
      <div className="row">
        {decorator.map((info) => (
          <div className="column nature" key={info.id}>
            <div className="content">
              <Link to={`/productdetails/decorator/${info.id}`}>
                <img
                  src={info.image}
                  alt="Decorators"
                  style={{ width: "50%" }}
                />
              </Link>
              <h4>Mountains</h4>
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

export default TableDecorators;
