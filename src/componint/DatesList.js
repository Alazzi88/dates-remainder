import React from "react";
import { Row } from "react-bootstrap";

const DatesList = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <div className="rectangle p-3">
        {person.length ? (
          person.map((item) => {
            return (
              <div key={item.id} className="d-flex border-bottom mx-3 my-2">
                <img className="img-avatar" src={item.img} alt="eee" />
                <div className="px-2">
                  <p className="d-inline fs-5">{item.name}</p>
                  <p className="fs-6">{item.date}</p>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="py-5 text-center"> لا يوجد مواعيد اليوم </h2>
        )}
      </div>
    </Row>
  );
};

export default DatesList;
