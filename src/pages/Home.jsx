import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import heroImg from "../assets/images/hero.png";

import "../styles/hero-section.css";
import "../styles/home.css";

import Category from "../components/UI/category/Category";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard";
import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet,",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet,",
  },

  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet,",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <div className="hero__content-center">
                  <h5 className="mb-3">Easy way to make an order</h5>
                  <br />
                  <h1 className="mb-4 hero__title">
                    <span>HUNGRY?</span> Just wait <br /> food at{" "}
                    <span> your door</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eos exercitationem ratione doloremque reiciendis ducimus
                    voluptas corporis sunt. Distinctio, perferendis laboriosam!
                  </p>

                  <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className="order__btn d-flex align-items-center justify-content-between">
                      Order now <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button className="all__foods-btn">
                      <Link to="/foods">See all foods</Link>
                    </button>
                  </div>

                  <div className="hero__service d-flex align-items-center gap-5 mt-3">
                    <p className="d-flex align-items-center gap-2">
                      <span className="shipping__icon">
                        <i class="ri-car-fill"></i>
                      </span>
                      No shipping charge
                    </p>

                    <p className="d-flex align-items-center gap-2">
                      <span className="shipping__icon">
                        <i class="ri-shield-check-fill"></i>
                      </span>
                      100% secure checkout
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6" className="hero__second">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0 w-100">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="feature__text mb-1 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, saepe neque.
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="4" sm='6' xs='6' key={index} className="mt-5 feature__col">
                <div className="feature__item text-center px-5 py-1">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-25 mb-2"
                  />
                  <h5 className="fw-bold mb-1">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="product__card">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="food__title">Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category">
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`all__btn ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`all__btn ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`all__btn ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item,index) => (
              <Col lg="3" md="4" sm='6' xs='12' className="mt-4 products" key={index}>
                <ProductCard item={item} key={item.id}/>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="location" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__bonanza">
                <div className="why__bonanza-center">
                  <h2 className="bonanza__title mb-4">
                    Why <span>Bonanza?</span>
                  </h2>
                  <p className="bonanza__desc mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Optio corporis illo soluta voluptatibus mollitia quia
                    consequatur quam ipsum impedit modi?
                  </p>

                  <ListGroup>
                    <ListGroupItem className="border-0 ps-0">
                      <p className="choose__us-title d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i>
                        Fresh and tasty foods
                      </p>
                      <p className="choose__us-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic, rem!
                      </p>
                    </ListGroupItem>

                    <ListGroupItem className=" border-0 ps-0">
                      <p className=" choose__us-title d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i>
                        Quality support
                      </p>
                      <p className="choose__us-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic, rem!
                      </p>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 ps-0">
                      <p className="choose__us-title d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i>
                        Order Now
                      </p>
                      <p className="choose__us-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic, rem!
                      </p>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers </span>are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti qui expedita, vitae cumque esse quia.
                </p>
              <TestimonialSlider/>
              </div>
            </Col>

            <Col lg="6" md="6" className="mt-3">
              <img src={networkImg} alt="network" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
