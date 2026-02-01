import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <>
      <section>
        <div className="container my-5" id="contact">

          <div className="text-center mb-5 scroll">
            <h1 className="text-primary-emphasis">Contact Us</h1>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="row g-4 scroll">

            {/* Contact Info */}
            <div className="col-md-4">
              <div className="p-4 shadow rounded bg-light h-100">
                <p className="card-icon">
                  <FontAwesomeIcon icon={faLocationDot} className="rounded-circle p-2 text-info me-2 mt-2"  style={{backgroundColor: "#e1e8ee"}}  />
                <b> Address </b>
                </p>

                <p className="card-icon">
                  <FontAwesomeIcon icon={faEnvelope} className="rounded-circle p-2 text-info me-2 mt-2"  style={{backgroundColor: "#e1e8ee"}}  />
                  <b>info@example.com</b>
                </p>

                <p className="card-icon">
                 <FontAwesomeIcon icon={faPhone} className="rounded-circle p-2 text-info me-2 mt-2"  style={{backgroundColor: "#e1e8ee"}}  />  
                 <b> +92 300 1234567</b>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-8">
              <div className="p-4 shadow rounded bg-white">
                <form>
                  <div className="row g-3">

                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <button className="btn btn-primary px-5">
                        Send Message
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;