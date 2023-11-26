import React from "react";

const ProductCard = (props) => {
  const { title, price, imageUrl } = props;
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={imageUrl}
        alt="Card image cap"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />

      <div className="card-body text-left">
        <h5 className="card-title">{title}</h5>
        <div className="d-flex justify-content-around">
          <div className="text-left mt-2">
            <p className="card-text">{price}</p>
          </div>
          <div className="text-end">
            <a href="#" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
