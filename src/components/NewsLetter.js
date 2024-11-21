import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens the default email client
    window.location.href = "mailto:chindarkar.j@northeastern.edu?subject=Newsletter%20Subscription&body=Hello";
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Contact me</h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <button type="submit">Send Email</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
