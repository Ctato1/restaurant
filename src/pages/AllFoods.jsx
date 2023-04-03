import React, { useState } from "react";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";
import "../styles/all-food.css";
import "../styles/pagination.css";

import products from "../assets/fake-data/products";

import ProductCard from "../components/UI/product-card/ProductCard";

import ReactPaginate from "react-paginate";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 8;

  const searchedProducts = products.filter((item) => {
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
  });

  const visitedPage = pageNumber * productsPerPage;
  const displayPage = searchedProducts.slice(
    visitedPage,
    visitedPage + productsPerPage
  );

  const pageCount = Math.ceil(searchedProducts.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All food">
      <CommonSection title="Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="12" md="12" sm="12">
              <div className="search__widget d-flex align-items-center justify-content-center mt-3">
                <input
                  type="text"
                  placeholder="I'm Looking for..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            {/* <Col lg="6" md="6" sm="6">
              <div className="sorting__widget d-flex align-items-center justify-content-center mt-3">
                <select>
                  <option value="">Default</option>
                  <option value="ascending">Alphabatically, A-Z</option>
                  <option value="descending">Alphabatically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col> */}

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="12" className="mt-5" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          <Col lg='12' mg='12'>
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                pageRangeDisplayed={5}
                nextLabel={"→"}
                previousLabel={"←"}
                containerClassName="paginationBttns"
              />
            </div>
          </Col>
            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
