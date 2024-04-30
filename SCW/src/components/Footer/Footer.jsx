import React from "react";

import "../../css/Footer.css";

import logo from "../../../public/logos/LOGO3.svg";

function Footer() {
  return (
    <footer>
      <div>
        <span class="logo">
          <img src={logo} alt="Shree Colour World" />
        </span>
      </div>

      <div class="row">
        <div class="col-3">
          <div class="link-cat" onclick="footerToggle(this)">
            <span class="footer-toggle"></span>
            <span class="footer-cat">Solution</span>
          </div>
          <ul class="footer-cat-links">
            <li>
              <a href="">
                <span>Home Decoration</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Waterproofing</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Commercial Painting</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-3">
          <div class="link-cat" onclick="footerToggle(this)">
            <span class="footer-toggle"></span>
            <span class="footer-cat">Industries</span>
          </div>
          <ul class="footer-cat-links">
            <li>
              <a href="">
                <span>Healthcare</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>FMCG</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Private House</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Construction</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Malls</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-3">
          <div class="link-cat" onclick="footerToggle(this)">
            <span class="footer-toggle"></span>
            <span class="footer-cat">Quick Links</span>
          </div>
          <ul class="footer-cat-links">
            <li>
              <a href="">
                <span>Reviews</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Terms & Condition</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-3" id="newsletter">
          <div class="social-links social-2">
            <a href="">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="">
              <i class="fab fa-tumblr"></i>
            </a>
            <a href="">
              <i class="fab fa-reddit-alien"></i>
            </a>
          </div>

          <div id="address">
            <span>Office Location</span>
            <div>
              Shop No 8 Shukun Mall Visat Gandhinagar Highway Sabarmati
              Ahmedabad
            </div>
          </div>
          <div id="address" className="mobileno">
            <span>Mobile No.</span>
            <div>
              <a href="tel:9426485229">9426485229</a>,{" "}
              <a href="tel:9904740466">9904740466</a>
            </div>
          </div>
          <div id="address" className="sac">
            <span>GST No</span>
            <div>24AAFCR2758G1ZD</div>
          </div>
        </div>
        <div class="social-links social-1 col-6">
          <a href="">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="">
            <i class="fab fa-tumblr"></i>
          </a>
          <a href="">
            <i class="fab fa-reddit-alien"></i>
          </a>
        </div>
      </div>
      <div id="copyright">
        &copy; All Rights Reserved 2019-2020 by{" "}
        <a target="_blank" href="https://www.shreecolourworld.com">
          Shree Colour World
        </a>
      </div>
    </footer>
  );
}

export default Footer;
