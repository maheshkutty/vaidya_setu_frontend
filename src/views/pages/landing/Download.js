
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  HyperLeadger Fabric{" "}
                  <span className="text-success">
                    on Securing from Health Records
                  </span>
                </h2>
                <p className="lead">
                  Cause if you do, it can be yours for FREE. Hit the button
                  below to navigate to Creative Tim where you can find the
                  Design System in React. Start a new project or give an old
                  Bootstrap project a new look!
                </p>
                
                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">
                    Based on technologies
                  </h4>
                  <Row className="justify-content-center">
                    <Col lg="2" xs="4">
                      <a
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg"
                        />
                      </a>
                      
                    </Col>
                    
                    <Col lg="2" xs="4">
                      <a
                       
                        id="tooltip308866163"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          typeof="logo"
                          className="img-fluid"
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                        />
                      </a>
                     
                    </Col>
                   
                   
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
