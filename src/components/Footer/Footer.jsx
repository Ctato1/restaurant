import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import ScrollToTop from "react-scroll-to-top";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
       <ScrollToTop
        smooth
        color="#df2020"
        viewBox="0 0 50 50"
        component={<img src={logo} style={{ width: "40px" }} />}
      />
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Bonanza</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Minima, non.
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thurstday</span>
                <p>10:00am - 02:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>10:00am - 02:00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery__time-list">
            <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Location: Rustavi</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 555555555</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: bonanza@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
          <h5 className="footer__title">Newsletter</h5>
          <p>Subscribe our newsletter</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email"/>
            <span><i class="ri-send-plane-line"></i></span>
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
