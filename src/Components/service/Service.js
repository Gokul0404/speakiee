import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../service/Service.css";
import Aos from "aos";
import "aos/dist/aos.css";
import SideMenu from "../../Layout/SideMenu/SideMenu";
import { Link } from "react-router-dom";
export default function Service() {
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <SideMenu />
      <div className="Service">
        <div className="Home_Submain">
          <Container fluid>
            <Row className="main_content_Home">
              {/* <Col md={1}></Col> */}
              <Col md={6} className="col_1">
                <div class="card">
                  <div class="card-body  ">
                    <h5
                      class="card-title h1 Home_Head fw-bold "
                      data-aos="fade-right"
                    >
                      YOUR TECHNOLOGY PARTNER
                    </h5>
                    <p class="card-text fw-bold" data-aos="fade-right">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </p>
                  </div>
                </div>
                <div className="Service_button" data-aos="fade-right">
                  <Link to="/serviceview">
                    <button className="Service_Btn_Main"> Explore</button>
                  </Link>
                </div>
              </Col>

              <Col md={5} className="d-flex justify-content-center col_2">
                <Container>
                  <div
                    className="Home_Image_Bg "
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="600"
                  >
                    <Image
                      src={require("../../assets/Images/home.jpg")}
                      alt="image"
                      fluid
                      className="Home_Img_main"
                    ></Image>
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
