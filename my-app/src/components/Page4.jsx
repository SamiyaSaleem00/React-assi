import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img4 from "../assets/img4.svg";

function Page4(){

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".zoom", {
      scrollTrigger: {
        trigger: ".zoom",
        start: "top 80%",
      },
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

    
    return(
    <>
     <section>
      <div className="container py-5">
          <div className="text-center mb-5 mb-lg-0 zoom">
             <img src={img4} alt="img4" className="img-fluid"  width={500} />
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
     <div className="col">
    <div className="card scroll px-2 py-2 rounded-1 border-0 hover">
      <div className="card-body">
        <h3 className="card-title text-info">01</h3>
        <h4 className="card-title pb-2 text-primary-emphasis">Sign Up</h4>
        <p className="card-text">Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
         <a href="/details" className="stretched-link"></a>
      </div>
    </div>
  </div>
    <div className="col">
    <div className="card scroll px-3 py-2 rounded-1 border-0 hover">
      <div className="card-body">
       <h3 className="card-title text-info">02</h3>
        <h4 className="card-title pb-2 text-primary-emphasis">Repellat Nihil</h4>
        <p className="card-text">Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
            <a href="/details" className="stretched-link"></a>
      </div>
    </div>
  </div>
    <div className="col">
    <div className="card scroll px-3 py-2 rounded-1 border-0 hover">
          <div className="card-body">
       <h3 className="card-title text-info">03</h3>
        <h4 className="card-title pb-2 text-primary-emphasis">Ad ad velit qui</h4>
        <p className="card-text">Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
            <a href="/details" className="stretched-link"></a>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>

    </>
);
}

export default Page4;