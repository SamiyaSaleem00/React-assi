import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faGripLines  } from '@fortawesome/free-solid-svg-icons';

function Page3(){
    return(
    <>
     <section>
      <div className="container py-5">
          <div className="text-center mb-5 mb-lg-0 scroll">
            <h2 className="text-primary-emphasis">Save your time to using SoftLand</h2>
            <p className="fs-5 mt-3">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit </p>
          </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
     <div className="col">
    <div className="card scroll px-2 py-2 rounded-4 border-0">
      <img src={img1} className="card-img-top" alt="img1" height={220} ></img>
       <div className="card-icon fs-3 text-center"><FontAwesomeIcon icon={faGripLines} className="rounded-circle p-3 text-info"  style={{backgroundColor: "#e1e8ee"}} /></div>
      <div className="card-body">
        <h4 className="card-title pb-2 text-primary-emphasis text-center">Explore Your Team</h4>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>
    <div className="col">
    <div className="card scroll px-3 py-2 rounded-4 border-0 ">
            <img src={img2} className="card-img-top" alt="img2" height={220} ></img>
      <div className="card-icon fs-3 text-center"><FontAwesomeIcon icon={faSun} className="rounded-circle p-3 text-info"  style={{backgroundColor: "#e1e8ee"}} /></div>
      <div className="card-body">
        <h4 className="card-title pb-2 text-primary-emphasis text-center">Digital Whiteboard</h4>
        <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam,
           eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
    </div>
  </div>
    <div className="col">
    <div className="card scroll px-3 py-2 rounded-4 border-0">
            <img src={img3} className="card-img-top" alt="img3" height={220} ></img>
      <div className="card-icon fs-3 text-center"><FontAwesomeIcon icon={faCalendarDays } className="rounded-circle p-3 text-info"  style={{backgroundColor: "#e1e8ee"}} /></div>
      <div className="card-body">
        <h4 className="card-title pb-2 text-primary-emphasis text-center">Design To Development</h4>
        <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni
           dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>

    </>
);
}

export default Page3;