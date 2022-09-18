
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Thank you for SIH!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  For Providing this Amazing platforms.
                </h4>
              </Col>
              
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                  >
                    OpenSource_Pandits
                  </a>
                  
                </div>
              </Col>
              
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
