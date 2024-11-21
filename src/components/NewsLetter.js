import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  const handleGmail = () => {
    window.location.href = "mailto:chindarkar.j@northeastern.edu?subject=Newsletter%20Subscription&body=Hello";
  };

  const handleOutlook = () => {
    window.location.href = "mailto:chindarkar.j@northeastern.edu?subject=Newsletter%20Subscription&body=Hello%20via%20Outlook";
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Contact me</h3>
          </Col>
          <Col md={6} xl={7}>
            <div className="new-email-bx">
              <button onClick={handleGmail} style={{ marginRight: "10px" }}>Send Email (Gmail)</button>
              <button onClick={handleOutlook}>Send Email (Outlook)</button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
