import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faLinkedin, faSquareInstagram, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
   <footer className="bg-primary mt-5 py-4 text-white text-center scroll">
      <div className="container">
      <div className="mb-5">
          <h1>SoftLand</h1>
        <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
         <div className="d-flex justify-content-center mt-4">
          <FontAwesomeIcon icon={faFacebook} className="social-icon me-3" />
          <FontAwesomeIcon icon={faLinkedin} className="social-icon me-3" />
          <FontAwesomeIcon icon={faSquareInstagram} className="social-icon me-3" />
          <FontAwesomeIcon icon={faSquareTwitter} className="social-icon me-3" />
        </div>
      </div>
<hr />

<p>Copyright <b>SoftLand</b> All Rights Reserved</p>
<small>Designed by <a href="https://bootstrapmade.com/" className="text-black">BootstrapMade</a></small>

   </div>
    </footer>
    </>
  );
}

export default Footer;