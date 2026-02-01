import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import feature1 from "../assets/features-1.svg";
import feature2 from "../assets/features-2.svg";
import feature3 from "../assets/features-3.svg";
import feature4 from "../assets/features-4.svg";

 
function Features(){
 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".zoom2").forEach((img) => {
    gsap.from(img, {
      scrollTrigger: {
        trigger: img,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  });
}, []);

    return( 
     <>
     <section>
      <div className="container pb-5 mt-5" id="features">

<div>
            <div className="text-center scroll">
        <h1 className="text-primary-emphasis">Features</h1>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
  <div className="row align-items-center mt-5">
         <div className="col-lg-6 zoom2">
            <img src={feature1} alt="feature" className="img-fluid"  width={480} />
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 scroll">
            <h3 className="text-primary-emphasis">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
<ul>
    <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
    <li>Ullam est qui quos consequatur eos accusamus.</li>
</ul>
          </div>
        </div>
</div>

<div className="mt-5">
  <div className="row align-items-center mt-5">
          <div className="col-lg-6 mb-5 mb-lg-0 scroll">
            <h3 className="text-primary-emphasis">Corporis temporibus maiores provident</h3>
            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>

         <div className="col-lg-6 zoom2">
            <img src={feature2} alt="feature2" className="img-fluid"  width={480} />
          </div>

 </div>
</div>

<div className="mt-5">
  <div className="row align-items-center mt-5">
         <div className="col-lg-6 zoom2">
            <img src={feature3} alt="feature3" className="img-fluid"  width={480} />
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 scroll">
            <h3 className="text-primary-emphasis">Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
            <p className="mt-3">Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. 
                Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque</p>
<ul>
    <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
    <li>Ullam est qui quos consequatur eos accusamus.</li>
</ul>
          </div>
        </div>
</div>

<div className="mt-5">
  <div className="row align-items-center mt-5">
          <div className="col-lg-6 mb-5 mb-lg-0 scroll">
            <h3 className="text-primary-emphasis">Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>

         <div className="col-lg-6 zoom2">
            <img src={feature4} alt="feature2" className="img-fluid"  width={480} />
          </div>

 </div>
</div>

      </div>
    </section>
     </>
    );
}

export default Features;