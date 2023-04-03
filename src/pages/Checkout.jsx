import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/checkout.css";

const Checkout = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 3;

  const totalAmount = cartTotalAmount + shippingCost;

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />

      {cartTotalAmount === 0 ? (
        <h4 className="text-center mt-5 mb-5 pt-5 pb-5">Your card is empty</h4>
      ) : (
        <section>
          <Container>
            <Row>
              <Col lg="8" md="6">
                <h5 className="mb-4">Shipping Address</h5>
                <h5 className="mb-4">Delivery only in Rustavi</h5>
                <form className="checkout__form">
                  <div className="form__group">
                    <input type="text" placeholder="Enter your name" />
                  </div>

                  {/* 
                <div className="form__group">
                  <input type="email" placeholder="Enter your email"/>
                </div> */}

                  <div className="form__group">
                    <input type="text" placeholder="Enter your address" />
                  </div>

                  <div className="form__group">
                    <input
                      type="number"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form__group">
                    <select class="form-select" disabled>
                      <option value="rustavi" selected>
                        Rustavi
                      </option>
                    </select>
                  </div>
                  <p>
                    If you accidentally entered the wrong mobile phone number,
                    please contact us (555 555 555)
                  </p>
                  <button className="add__btn">Payment</button>
                </form>
              </Col>
              <Col lg="4" md="6">
                <div className="payment__numbers">
                  <h5 className="d-flex align-items-ceter justify-content-between">
                    Subtotal: <span>${cartTotalAmount}</span>
                  </h5>
                  <h5 className="d-flex align-items-ceter justify-content-between">
                    Delivery: <span>${shippingCost}</span>
                  </h5>
                  <hr />
                  <br />
                  <h5 className="d-flex align-items-ceter justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </Helmet>
  );
};

export default Checkout;
