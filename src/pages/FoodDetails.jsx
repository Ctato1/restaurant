import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import "../styles/product-details.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

import ProductCard from "../components/UI/product-card/ProductCard";

const FoodDetails = () => {
  const dispatch= useDispatch();
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredReview, setEnteredReview] = useState("");

  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const [previewImg, setPreviewImg] = useState(product.image01);

  const { title, price, category, desc,image01 } = product;

  const sameCategory = products.filter((item) => item.category === category && item.id !== product.id);

  const relatedProducts = sameCategory;

  useEffect(()=>{
    setPreviewImg(product.image01);
  },[product])

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id : product.id,
        title,
        image01,
        price,
      })
    );
  };

  const submitHandler = e=>{
    e.preventDefault();
  }

  return (
    <Helmet title={title}>
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2" sm='5' xs='12'>
              <div className="product__images">
                <div className="img__item mb-5">
                  <img
                    src={product.image01}
                    alt=""
                    className="w-50"
                    onClick={() => setPreviewImg(product.image01)}
                  />
                </div>

                <div className="img__item mb-5">
                  <img
                    src={product.image02}
                    alt=""
                    className="w-50"
                    onClick={() => setPreviewImg(product.image02)}
                  />
                </div>

                <div className="img__item mb-5">
                  <img
                    src={product.image03}
                    alt=""
                    className="w-50"
                    onClick={() => setPreviewImg(product.image03)}
                  />
                </div>
                
              </div>
            </Col>
            <Col lg="4" md="4" sm='7' xs='12'>
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6" >
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  Price: <span>${price}</span>{" "}
                </p>
                <p className="product__category mb-5">
                  Category: <span> {category}</span>{" "}
                </p>

                <button className="add__btn" onClick={addToCart}>Add To Cart</button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-2">
                <h6
                  className={tab === "desc" ? "tab__active" : ""}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={tab === "review" ? "tab__active" : ""}
                  onClick={() => setTab("review")}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mt-3">
                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">jhon1@gmail.com</p>
                    <p className="feedback__text">Awesome!!!</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">jhon1@gmail.com</p>
                    <p className="feedback__text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cum qui quisquam possimus dicta alias accusamus quibusdam
                      hic repellendus sed dignissimos? Laudantium perferendis
                      beatae harum, suscipit quaerat accusamus ipsa sed odit.
                    </p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">jhon1@gmail.com</p>
                    <p className="feedback__text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ipsa saepe debitis fuga dolores cumque sit suscipit, rerum
                      facere similique culpa eius odio, enim optio aliquid,
                      consequuntur id distinctio magni tempora sunt ducimus?
                      Dolorem tenetur fugiat ad! Enim similique dolor repellat.
                      Magnam assumenda fuga earum nam perferendis nihil eum
                      magni iusto?
                    </p>
                  </div>

                  <form className="form mt-4" onSubmit={submitHandler}>
                    <div className="form__group">
                      <input type="text" placeholder="Enter your name" onChange={e=>setEnteredName(e.target.value)} required/>
                    </div>

                    <div className="form__group">
                      <input type="text" placeholder="Enter your mail" onChange={e=>setEnteredMail(e.target.value)} required/>
                    </div>

                    <div className="form__group">
                      <textarea
                        type="text"
                        rows={5}
                        placeholder="Enter your review"
                        onChange={e=>setEnteredReview(e.target.value)}
                        required
                      />
                    </div>

                    <button type="submit" className="addToCart__btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg="12" className="mt-5 mb-5">
              <h4 className="related__products-title">You might also like</h4>
            </Col>
            {relatedProducts.map((item,index) => (
              <Col
                lg="3"
                md="4"
                sm="6"
                xs="12"
                className="mt-4 products"
                key={index}
              >
                <ProductCard item={item} key={item.id} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
