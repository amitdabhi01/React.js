import React from "react";
import Container from "react-bootstrap/Container";

const ReviewList = ({ listData }) => {
  return (
    <>
      <Container>
        {listData.length === 0 ? (
          <p>Review Is Empty</p>
        ) : (
          listData.map((item) => {
            return (
              <>
                <div className="w-100 border p-3">
                  <h5 className="fw-bold">Name: {item.name}</h5>
                  <p className="fw-bold">Description: {item.description}</p>
                  <p className="fw-bold">Rating: {item.rate}</p>
                </div>
              </>
            );
          })
        )}
      </Container>
    </>
  );
};

export default ReviewList;
