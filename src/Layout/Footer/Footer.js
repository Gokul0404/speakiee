import React from 'react'
import '../Footer/Footer.css'

export default function Footer() {
  return (
    <div id="footer">
      <footer class="section bg-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">
                  Information
                </h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li>
                    <a href="">Pages</a>
                  </li>
                  <li>
                    <a href="">Our Team</a>
                  </li>
                  <li>
                    <a href="">Feuchers</a>
                  </li>
                  <li>
                    <a href="">Pricing</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">
                  Ressources
                </h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li>
                    <a href="">Monitoring Grader </a>
                  </li>
                  <li>
                    <a href="">Video Tutorial</a>
                  </li>
                  <li>
                    <a href="">Term &amp; Service</a>
                  </li>
                  <li>
                    <a href="">Zeeko API</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-2">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">Help</h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li>
                    <a href="">Sign Up </a>
                  </li>
                  <li>
                    <a href="">Login</a>
                  </li>
                  <li>
                    <a href="">Terms of Services</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">
                  Contact Us
                </h6>
                <p class="contact-info mt-4">
                  Contact us if need help withanything
                </p>
                <p class="contact-info">+01 123-456-7890</p>
                <div class="mt-5">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab facebook footer-social-icon ">
                          <i class="bi bi-facebook fs-5"></i>
                        </i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab twitter footer-social-icon ">
                          <i class="bi bi-twitter fs-5"></i>
                        </i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab google footer-social-icon ">
                          <i class="bi bi-google fs-5"></i>
                        </i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fab apple footer-social-icon ">
                          <i class="bi bi-apple fs-5"></i>
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <p class="footer-alt mb-0 f-14">2023 © abc, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
