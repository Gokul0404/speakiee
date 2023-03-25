import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../SideMenu/SideMenu.css'
import Aos from "aos";
import "aos/dist/aos.css";

export default function SideMenu() {


  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="SideMenu pt-5 ">
      <div className=" pt-5 SideMenu_Interiar">
        <div className="d-flex align-items-center flex-column py-3 pt-5">
          <Link to="/">
            <div
              className="Nav_Btn_Icons text-center fs-1 pt-1 "
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <i class="bi bi-house"></i>
            </div>
          </Link>
        </div>

        <Link to="/about">
          <div className="d-flex justify-content-evenly align-items-center flex-column py-3  ">
            <div
              className="Nav_Btn_Icons text-center fs-1 pt-1  "
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="600"
            >
              <i class="bi bi-file-earmark-person-fill"></i>
            </div>
          </div>
        </Link>
        <Link to="/product">
          <div className="d-flex justify-content-evenly align-items-center flex-column py-3 ">
            <div
              className="Nav_Btn_Icons text-center fs-1 pt-1  "
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <i class="bi bi-ubuntu"></i>
            </div>
          </div>
        </Link>
        <Link to="/service">
          <div className="d-flex justify-content-evenly align-items-center flex-column py-3 ">
            <div
              className="Nav_Btn_Icons text-center fs-1 pt-1 "
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <i class="bi bi-gear"></i>
            </div>
          </div>
        </Link>
        <Link to="/contact">
          <div className="d-flex justify-content-evenly align-items-center flex-column py-3 ">
            <div
              className="Nav_Btn_Icons text-center fs-1 pt-1 "
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="900"
            >
              <i class="bi bi-person-lines-fill"></i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
