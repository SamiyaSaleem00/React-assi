const Home = () => {
  return (
    <div className="min-h-screen bg-white px-6 md:px-20 lg:px-32 py-10">

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">

        {/* ================= LEFT SIDE (TEXT) ================= */}
        <div className="w-full md:w-1/2">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-7">

            <span className="relative inline-block">
              <span className="text-teal-700">Improve</span>

              <img
                src="/headline-curve.svg"
                className="absolute left-0 -bottom-6 w-full"
              />
            </span>

            {" "}your Skill <br /><br />
            with Different Way

          </h1>


          <p className="text-gray-600 mb-6 max-w-md">
            Let's take an online course to improve your skills in a different
            way, you can set your own study time according to your learning
            speed.
          </p>


          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <button
              className="
                bg-teal-700 text-white px-6 py-3 rounded-lg
                transition-all duration-300
                hover:scale-105 hover:-translate-y-1 hover:shadow-xl
                active:scale-95
              "
            >
              Get Started
            </button>


            <button
              className="
                border border-teal-700 text-teal-700 px-6 py-3 rounded-lg
                flex items-center gap-2
                transition-all duration-300
                hover:scale-105 hover:-translate-y-1 hover:shadow-lg
                hover:bg-teal-50
                active:scale-95
              "
            >
              ▶ Watch Video
            </button>

          </div>

        </div>



        {/* ================= RIGHT SIDE (IMAGE) ================= */}
        <div className="w-full md:w-1/2 relative flex justify-center">

          {/* Main Image */}
          <img
            src="/home.webp"
            alt="student"
            className="max-w-md w-full object-contain"
          />


          {/* Certificate Box */}
          <div
            className="
              absolute bottom-6 left-1 -translate-x-1/2
              bg-white/90 backdrop-blur-md
              p-2 rounded-3xl shadow-md
              flex items-center gap-4
              w-[280px]
            "
          >

            {/* Circle Image */}
            <div>
              <img
                src="/certificate.webp"
                alt="icon"
                className="w-full h-full object-cover"
              />
            </div>


            {/* Text */}
            <div>
              <h4 className="font-semibold text-yellow-500 text-lg">
                Certificate
              </h4>

              <p className="text-sm text-gray-600">
                There are certificates for all courses.
              </p>
            </div>

          </div>

        </div>

      </div>



      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold text-yellow-500">10K+</h2>
          <p className="text-gray-600 mt-2">Students</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold text-yellow-500">20+</h2>
          <p className="text-gray-600 mt-2">Quality Course</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold text-yellow-500">10+</h2>
          <p className="text-gray-600 mt-2">Experience Mentors</p>
        </div>

      </div>

    </div>
  );
};

export default Home;

