import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faAtom, faArrowUpRightFromSquare  } from '@fortawesome/free-solid-svg-icons';

function About(){

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".scroll").forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  });
}, []);

    return(
    <>
     <section>
      <div className="container py-5" id="about">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0 scroll">
              <a href="#" className="btn disabled text-info border-0" aria-disabled="true" role="button" data-bs-toggle="button" style={{backgroundColor: "#e3f2fd"}} >About Us</a>
            <h2 className="fw-bold display-6">Ducimus rerum libero reprehenderit cumque</h2>
            <p className="fs-5 mt-3">Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. 
                Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.</p>

            <div className="d-grid gap-3 d-md-flex mt-5 justify-content-center justify-content-lg-start">
         <a href="#" className="icon-link icon-link-hover btn btn-dark btn-lg me-md-3 rounded-1">Read More
  <svg xmlns="http://www.w3.org/2000/svg" className="bi" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg></a>
            </div>
          </div>

          <div className="col-lg-6">
        <div className="row row-cols-1 row-cols-md-2 g-3 justify-content-evenly">
     <div className="col mt-5">
    <div className="card scroll px-2 py-5 rounded-4 border-0">
       <div className="card-icon fs-3"><FontAwesomeIcon icon={faBuilding} className="rounded-circle p-4 text-info"  style={{backgroundColor: "#e1e8ee"}} /></div>
      <div className="card-body">
        <h4 className="card-title pb-2">Eius provident</h4>
        <p className="card-text">Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card scroll px-3 py-5 rounded-4 border-0">
      <div className="card-icon fs-3"><FontAwesomeIcon icon={faClipboard} className="rounded-circle p-4 text-info"  style={{backgroundColor: "#e1e8ee"}} /></div>
      <div className="card-body">
        <h4 className="card-title pb-2">Rerum aperiam</h4>
        <p className="card-text">Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia</p>
      </div>
    </div>
  </div>
    <div className="col mt-5">
    <div className="card scroll px-3 py-5 rounded-4 border-0 ">
      <div className="card-icon fs-3"><FontAwesomeIcon icon={faAtom} className="rounded-circle p-4 text-info"  style={{backgroundColor: "#e1e8ee"}} /></div>
      <div className="card-body">
        <h4 className="card-title pb-2">Veniam omnis</h4>
        <p className="card-text">Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti</p>
      </div>
    </div>
  </div>
    <div className="col">
    <div className="card scroll px-3 py-5 rounded-4 border-0">
      <div className="card-icon fs-3"><FontAwesomeIcon icon={faArrowUpRightFromSquare } className="rounded-circle p-4 text-info"  style={{backgroundColor: "#e1e8ee"}} /></div>
      <div className="card-body">
        <h4 className="card-title pb-2">Delares sapiente</h4>
        <p className="card-text">Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda</p>
      </div>
    </div>
  </div>
</div>
          </div>

        </div>
      </div>
    </section>
    </>
);
}

export default About;