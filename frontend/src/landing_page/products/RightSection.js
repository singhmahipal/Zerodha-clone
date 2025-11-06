import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mb-3">
            <a
              href={learnMore}
              className="text-decoration-none"
              style={{ marginLeft: "50px" }}
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} alt="product image" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
