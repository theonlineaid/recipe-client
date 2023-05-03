import React from "react";
import Header from "../../components/Header/Header";
import { Container, Row } from "react-bootstrap";
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";

function BlogLayout() {
  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Blog />
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default BlogLayout;