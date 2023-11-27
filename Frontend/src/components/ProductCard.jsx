import React from "react";

const ProductCard = (props) => {
  const { title, price, imageUrl } = props;
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={imageUrl}
        alt="Card image cap"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      <div className="card-body text-left">
        <h4 className="card-title">{title}</h4>
        <div className="d-flex justify-content-around">
          <div className="text-left mt-2">
            <h5 className="card-text">{price}</h5>
          </div>
          <div className="text-end">
            <button className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
