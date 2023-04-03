import React from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import { useSelector } from "react-redux";

import { Container, Row, Col } from "reactstrap";
import "../styles/cart-page.css";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Cart" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartProducts.length === 0 ? (
                <h2 className="text-center mt-5 mb-5 pt-5 pb-5">
                  Your card is empty
                </h2>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartProducts.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="subtotal">
                <h5>
                  Subtotal:
                  <span className="cart__subtotal">${totalAmount}</span>
                </h5>
                <p>taxes and shipping will calculate at checkout</p>
                <div className="d-flex  ">
                  <button className="add__btn me-4 p-2">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>
                  <button className="add__btn p-2">
                    <Link to="/checkout">Proceed to Checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;

  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <th className="text-center">
        <img src={image01} className="image-box" />
      </th>
      <th className="text-center">{title}</th>
      <th className="text-center">{price}</th>
      <th className="text-center">{quantity}</th>
      <th className="text-center">
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </th>
    </tr>
  );
};

export default Cart;
