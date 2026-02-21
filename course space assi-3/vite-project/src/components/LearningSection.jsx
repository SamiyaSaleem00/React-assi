import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faDollarSign,
  faClock,
  faUserGraduate
} from "@fortawesome/free-solid-svg-icons";



const LearningSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* ================= LEFT SIDE ================= */}
          <div className="relative w-full lg:w-1/2 flex justify-center">

            {/* Background Circle */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 
                            bg-yellow-200 rounded-full -z-10">
            </div>

            {/* Image */}
            <img
              src="./home-feature.webp"
              alt="student"
              className="w-72 md:w-96 object-contain"
            />

{/* Bottom Left Circular Progress Card */}
<div className="absolute bottom-0 left-0 
                bg-white p-4 rounded-xl shadow-lg">

  <h4 className="font-semibold text-sm">
    Lorem ipsum
  </h4>

  <p className="text-xs text-gray-500">
    Lorem ipsum
  </p>

  <div className="mt-3 w-24 h-20 relative flex items-center justify-center">

    {/* Outer Circle */}
    <div
      className="w-16 h-16 rounded-full flex items-center justify-center align-middle"
      style={{
        background: "conic-gradient(#22c55e 75%, #e5e7eb 0%)",
      }}
    >
      {/* Inner White Circle */}
      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
        <span className="text-green-500 font-bold text-sm">
          75%
        </span>
      </div>
    </div>

  </div>

</div>


            {/* Floating Card (Hidden on small screens) */}
            <div className="absolute top-5 right-5 
                            bg-white p-4 rounded-xl shadow-lg
                            hidden md:block w-56">

              <h4 className="font-semibold text-sm">
                Lorem ipsum dolor
              </h4>

              <div className="mt-3 space-y-2 text-xs">

                <div>
                  <p>UI/UX Design</p>
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-pink-500 w-3/4 rounded"></div>
                  </div>
                </div>

                <div>
                  <p>Mobile Development</p>
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-green-400 w-2/4 rounded"></div>
                  </div>
                </div>

                <div>
                  <p>Web Development</p>
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-blue-500 w-4/5 rounded"></div>
                  </div>
                </div>

              </div>
            </div>

          </div>



          {/* ================= RIGHT SIDE ================= */}
          <div className="w-full lg:w-1/2">

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Make your{" "}
              <span className="text-teal-600 relative inline-block">
                Learning
                <img
                  src="./headline-curve.svg"
                  alt="underline"
                  className="absolute left-0 -bottom-6 w-full"
                />
              </span>{" "}
              Enjoyable
            </h2>

            <p className="text-gray-600 mt-6">
              Set the way of learning according to your wishes
              with some of the benefits that you get from us.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              {
                [
                  { title: "Easy Accessible", icon: faBookOpen },
                  { title: "More Affordable Cost", icon: faDollarSign },
                  { title: "Flexible Study Time", icon: faClock },
                  { title: "Consultation With Mentor", icon: faUserGraduate },
                ].map((item, i) => (

                  <div
                    key={i}
                    className="bg-gray-50 p-5 rounded-2xl 
                    shadow-sm hover:shadow-md 
                    transition duration-300"
                  >
                    <div className="flex items-start gap-4">

                      {/* Icon Circle */}
                      <div className="w-16 h-8 flex items-center justify-center 
                    bg-teal-700 rounded-2xl">
                        <FontAwesomeIcon
                          icon={item.icon}
                          className="text-white text-lg"
                        />
                      </div>

                      {/* Text Content */}
                      <div>
                        <h4 className="font-semibold text-yellow-400">
                          {item.title}
                        </h4>

                        <p className="text-sm text-gray-500 mt-2">
                          Duis aute irure dolor in reprehenderit
                          in voluptate velit esse cillum dolore.
                        </p>
                      </div>

                    </div>
                  </div>

                ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LearningSection;
