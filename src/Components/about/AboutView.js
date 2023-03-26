import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../about/AboutView.css'

export default function AboutView() {
  return (
    <div className="AboutView">
      <Container className="aview_container">
        <Row>
          <Col md={8}>
            <div>
              <h2 className="h1 Aview_h1">About Us</h2>
              <br />
              <p className='fs-4'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
