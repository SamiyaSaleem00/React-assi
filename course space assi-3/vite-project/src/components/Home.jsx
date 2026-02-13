
const Home = () => {
  return (
    <div className="min-h-screen bg-white px-6 md:px-20 lg:px-32 py-10">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">

        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-7 ">

  <span className="relative inline-block">
    <span className="text-teal-700">Improve</span>

    {/* Curve Image */}
    <img
      src="./public/headline-curve.svg"
      className="absolute left-0 -bottom-6 w-full"
    />
  </span>
  {" "}your Skill <br /><br />
  with Different Way
</h1>

          <p className="text-gray-600 mb-6">
            Let's take an online course to improve your skills in a different
            way, you can set your own study time according to your learning
            speed. So you can study comfortable and absorb the material easily.
          </p>
          {/* Buttons */}

<div className="flex flex-wrap gap-4">

  {/* Get Started */}
  <button
    className="
      bg-teal-700 text-white px-6 py-3 rounded-lg
      transition-all duration-300 ease-out
      hover:scale-105
      hover:-translate-y-1
      hover:shadow-xl
      active:scale-95
    "
  >
    Get Started
  </button>

  {/* Watch Video */}
  <button
    className="
      border border-teal-700 text-teal-700 px-6 py-3 rounded-lg
      flex items-center gap-2
      transition-all duration-300 ease-out
      hover:scale-105
      hover:-translate-y-1
      hover:shadow-lg
      hover:bg-teal-50
      active:scale-95
    "
  >
    ▶ Watch Video
  </button>

</div>

          {/* Certificate Box */}
          <div className="mt-6 flex items-center gap-4 bg-white shadow-md p-4 rounded-lg max-w-sm">
            <div className="text-teal-700">
              <svg
                xmlns="./assets/certificate.webp"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m2 4H7m10 4H7m2-8h6"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Certificate</h3>
              <p className="text-gray-500 text-sm">
                There are certificates for all courses.
              </p>
            </div>
          </div>
        </div>

        {/* Image */}

        <div className="flex-1 flex justify-center">
          <img
            src="./assets/home.webp" alt="Hero" className="w-full max-w-sm object-cover"/>
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
