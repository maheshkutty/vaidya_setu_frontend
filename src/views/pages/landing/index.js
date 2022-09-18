
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.css";
import { withRouter } from "ui-component/withRouter"

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "ui-component/DemoNavbar.js";
import CardsFooter from "ui-component/Footers/CardsFooter.js";

// index page sections
import Download from "./Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  onSignUp = () =>{
    this.props.navigate("/register/user-register");
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                       Vaidya Setu, Connecting Privacy to you Health{" "}
                      
                      </h1>
                      <p className="lead text-white">
                        One Stop Solution for all the Healthcare StakeHolders
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          onClick={this.onSignUp}
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Sign Up</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Give Permission to Doctor
                          </h6>
                          <p className="description mt-3">
                           After Registering through a Aadhar Based Verification Permission can be Given to to a Doctor After Getting a PoP up on your APP/WebSite, or getting an OTP on your mobile number from Scanning a QR Code/Vadiya Setu Number.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Permission
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Interactive UI
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Innovation
                            </Badge>
                          </div>
                        
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Doctor Uploading Medical Record
                          </h6>
                          <p className="description mt-3">
                           Upon receiving Permission from patient Doctor can go through his/her Medical record, health parameters and can upload Medical Reports which is stored in a blockchain porwed by 
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Blockchain
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Secure
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Uncompomised
                            </Badge>
                          </div>
                  
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Revoke as per patient wish
                          </h6>
                          <p className="description mt-3">
                            Patient can revoke permission of Doctor at any time upon his wish but can't temper with his medical records
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Blockchain
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Tamper proof
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Easy to use
                            </Badge>
                          </div>
                  
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Awesome features</h3>
                    
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Highly Scalable
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Key parameters in case of emergency
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Super friendly User Interface
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img1.png")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="300 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Problem Statement
                      </h4>
                      <p className="text-italic text-white">
                        	
"The public service delivery has witnessed various enhancements and disruptions caused by Aadhaar. Further, complementary new technologies like Blockchain has the capability to create <b>new resident centric products and services to further improvise service delivery</b>. Perhaps, the real disruption potential of these combinations of technologies has yet to be seized. Your task is to explore the possibilities in Government domains (Central/State/Municipal/Panchayat) and <b> create innovative and meaningful resident centric applications or solutions using any of the open source blockchain technologies.</b>"
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Our Solution.</h3>
                    <p className="lead">
                     Targeted Vaccination Drive
                    </p>
                    <p>
                      Medical Insurance
                    </p>
                    <p>
                      Medical Test for Government or Private Jobs
                    </p>
                  
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-6">
                      <h4 className="display-3 text-white">Wide Ranges of UseCases</h4>
                      <p className="text-white">
                
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Fool Proof Medical Certificate 
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                           Readiness for forthcoming epidamic
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                      
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Incorporated Suggestion by Jury Members</h2>
                  
                   
               
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1"> Interactive and Eye-Catching User Interface</span>
                  
                      </h5>
                 
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                  
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1"> End to End Applications Development</span>
                      
                      </h5>
                   
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="" md="6">
                  <div className="px-4">
                  
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Two step encryption of Data</span>
                    
                      </h5>
                     
                    </div>
                  </div>
                </Col>
              
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    
                      <h3 className="text-white">
                        "IT'S Gonna be the UPI in the Medical Field "
                      </h3>
                    
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
         
         
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default withRouter(Landing);
