import React from "react";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gallery8 from "../assets/gallery8.png";
import gallery9 from "../assets/gallery9.png";
import gallery10 from "../assets/gallery10.png";
import gallery11 from "../assets/gallery11.png";
import gallery12 from "../assets/gallery12.png";

import testimonials1 from "../assets/testimonials-1.jpg";
import testimonials2 from "../assets/testimonials-2.jpg";
import testimonials3 from "../assets/testimonials-3.jpg";
import testimonials4 from "../assets/testimonials-4.jpg";
import testimonials5 from "../assets/testimonials-5.jpg";

function gallery() {

  return (
<>
<section>
<div className="my-5 scroll">

  <div className="text-center mb-5">
    <h1 className="text-primary-emphasis">Gallery</h1>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>


<div id="galleryCarousel" className="carousel slide text-center mt-5 py-4" data-bs-ride="carousel">
  <div className="carousel-inner mb-5">

    <div className="carousel-item active">
      <img src={gallery1} width={200} />
      <img src={gallery2} width={200} />
      <img src={gallery3} width={200} />
      <img src={gallery4} width={200} />
      <img src={gallery5} width={200} />
      <img src={gallery6} width={200} />
    </div>

    <div className="carousel-item">
      <img src={gallery7} width={200} />
      <img src={gallery8} width={200} />
      <img src={gallery9} width={200} />
      <img src={gallery10} width={200} />
      <img src={gallery11} width={200} />
      <img src={gallery12} width={200} />
    </div>

  </div>

  <div className="carousel-indicators mt-5">
    <button data-bs-target="#galleryCarousel" data-bs-slide-to="0" className="active"></button>
    <button data-bs-target="#galleryCarousel" data-bs-slide-to="1"></button>
  </div>
</div>

</div>

</section>

<section>
<div className="my-5 bg-secondary-subtle scroll">

  <div className="text-center pt-5">
    <h1 className="text-primary-emphasis">Testimonials</h1>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
  </div>


<div id="carouselExampleAutoplaying" className="carousel slide text-center mt-5 py-4" data-bs-ride="carousel">
  <div className="carousel-inner mb-4">

    <div className="carousel-item active">
    <img src={testimonials1} alt="testimonials1" className="rounded-circle" width={130}/>
     <h5>Saul Goodman</h5>
<small>Developer</small> 
<p>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis
   <br />  minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</p>
</div>

    <div className="carousel-item">
    <img src={testimonials2} alt="testimonials2" className="rounded-circle" width={130} />
    <h5>Sara Wilsson</h5>
    <small>Designer</small>
    <p>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis <br />  minim tempor labore 
        quem eram duis noster aute amet eram fore quis sint minim.</p>
    </div>
    
      <div className="carousel-item">
    <img src={testimonials3} alt="testimonials3" className="rounded-circle" width={130} />
    <h5>Jena Karlis</h5>
    <small>Store Owner</small>
    <p> Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim <br />  tempor labore 
        quem eram duis noster aute amet eram fore quis sint minim. </p>
</div>

   <div className="carousel-item">
    <img src={testimonials4} alt="testimonials4" className="rounded-circle" width={130} />
    <h5>Matt Brandon</h5>
    <small>Freelancer</small>
    <p> Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim <br />  dolor
         enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. </p>
    </div>

       <div className="carousel-item">
    <img src={testimonials5} alt="testimonials5" className="rounded-circle" width={130} />
    <h5>John Larson</h5>
    <small>Entrepreneur</small>
    <p> Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim <br />  culpa labore 
        duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. </p>
    </div>

  </div>

<div className="carousel-indicators mt-4">
  <button data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active"></button>
  <button data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"></button>
  <button data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"></button>
  <button data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3"></button>
  <button data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4"></button>
</div>

</div>

</div>

</section>

</>
  );

}

export default gallery;




