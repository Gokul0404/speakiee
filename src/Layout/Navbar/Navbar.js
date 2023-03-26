import React, { useState } from 'react'
import '../Navbar/Navbar.css'

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

export default function NavbarMain() {
 const [colorChange, setColorchange] = useState(false);
 const changeNavbarColor = () => {
   if (window.scrollY >= 80) {
     setColorchange(true);
   } else {
     setColorchange(false);
   }
 };
 window.addEventListener("scroll", changeNavbarColor);

  // const navigate = useNavigate();
  return (
    <div
      className={
        colorChange
          ? "Navbar_Main Navbar_Main_con_scroll"
          : "Navbar_Main Navbar_Main_con"
      }
    >
      <Container className="">
        <Navbar bg="none" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Link to="/">
                <Image
                  src={require("../../assets/Images/logo.png")}
                  width="70"
                />
                <Image
                  src={require("../../assets/Images/spieakieetxt.png")}
                  width="80"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle className="tog" />
            <Navbar.Collapse className="nav_col">
              <Nav className="mx-auto my-2 my-lg-0 fs-5">
                <Link to="/" className="px-4 text-decoration-none Nav_Contents">
                  Home
                </Link>
                <Link
                  to="/about"
                  className="px-4 text-decoration-none Nav_Contents"
                >
                  About
                </Link>

                <Link
                  to="/product"
                  className="px-4 text-decoration-none Nav_Contents"
                >
                  Products
                </Link>
                <Link
                  to="/service"
                  className="px-4 text-decoration-none Nav_Contents"
                >
                  Service
                </Link>
                {/* <Link
                  to="/contact"
                  className="px-4 text-decoration-none Nav_Contents"
                >
                  Contact
                </Link> */}
              </Nav>
              <Form className="d-flex">
                <Link to="/contact">
                  <button className="Nav_Btn"> Contact</button>
                </Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}
