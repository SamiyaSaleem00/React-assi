import React from "react";
import heroImg from "../assets/iPhone-16.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';
 
function Hero(){
    return( 
     <>
     <section className="bg-primary text-white hero-section">
      <div className="container pb-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0 animate__animated animate__fadeInUp">
            <h1 className="display-5 fw-medium">Promote Your App with SoftLand</h1>
            <p className="fs-5 mt-3">We are a team of talented designers making websites with Bootstrap</p>

            <div className="d-grid gap-3 d-md-flex mt-5 justify-content-center justify-content-lg-start">
              <a href="#" className="btn btn-dark btn-lg me-md-3 rounded-1">
                <FontAwesomeIcon icon={faGoogle} className="me-2" /> Google Play</a>
              <a href="#" className="btn btn-dark btn-lg rounded-1">
                <FontAwesomeIcon icon={faApple} className="me-2" /> App Store</a>
            </div>
          </div>

          <div className="col-lg-6 text-center animate__animated animate__zoomIn">
            <img src={heroImg} alt="Hero" className="img-fluid"  width={480} />
          </div>

        </div>
      </div>
    </section>
     </>
    );
}

export default Hero;