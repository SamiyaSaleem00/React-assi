import { useState, useEffect } from "react";

const courses = [
  {
    id: 1,
    title: "Android Development from Zero to Hero",
    image: "/course-1.webp",
    price: "$25",
    rating: 5,
    reviews: 8,
  },
  {
    id: 2,
    title: "UI/UX Complete Guide",
    image: "/course-2.webp",
    price: "$20",
    rating: 5,
    reviews: 15,
  },
  {
    id: 3,
    title: "Mastering Data Modeling Fundamentals",
    image: "/course-3.webp",
    price: "$30",
    rating: 4,
    reviews: 7,
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    image: "/course-4.webp",
    price: "$35",
    rating: 5,
    reviews: 22,
  },
  {
    id: 5,
    title: "Python for Data Science",
    image: "/course-5.webp",
    price: "$28",
    rating: 4,
    reviews: 12,
  },
  {
    id: 6,
    title: "Machine Learning A-Z",
    image: "/course-6.webp",
    price: "$40",
    rating: 5,
    reviews: 18,
  },
  {
    id: 7,
    title: "React Native - The Practical Guide",
    image: "/course-7.webp",
    price: "$32",
    rating: 5,
    reviews: 10,
  }
];

const Courses = () => {

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);

  // Responsive visible cards logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisible(1);
      } else if (window.innerWidth < 1024) {
        setVisible(2);
      } else {
        setVisible(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const max = courses.length - visible;

  return (
    <section className="py-20 bg-[#f2f5f5]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT TEXT */}
          <div className="lg:w-1/4 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">
              Most<br /> Popular <br />Courses
            </h2>

            <p className="text-gray-600">
              Choose from our top rated online courses.
            </p>
          </div>

          {/* RIGHT SLIDER */}
          <div className="lg:w-3/4 w-full">

            <div className="overflow-hidden">

              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${(index * 100) / visible}%)`
                }}
              >

                {courses.map((course) => (

                  <div
                    key={course.id}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                  >
                    <div className="bg-white rounded-2xl shadow-md p-4">

                      <img
                        src={course.image}
                        className="w-full h-44 rounded-xl object-cover"
                        alt=""
                      />

                      <h3 className="font-semibold mt-3">
                        {course.title}
                      </h3>

                      <div className="flex items-center mt-2 text-yellow-400">
                        {"★".repeat(course.rating)}
                        {"☆".repeat(5 - course.rating)}
                        <span className="text-gray-500 text-sm ml-2">
                          ({course.reviews})
                        </span>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <span className="text-gray-700 font-bold">
                          {course.price}/
                          <span className="text-teal-700">course</span>
                        </span>

                        <button
                          className="w-9 h-9 rounded-full 
                                     flex items-center justify-center
                                     hover:bg-teal-700 hover:text-white
                                     transition"
                        >
                          →
                        </button>
                      </div>

                    </div>
                  </div>

                ))}

              </div>
            </div>

            {/* CONTROLS */}
            <div className="flex items-center justify-center gap-6 mt-8">

              <button
                onClick={() => index > 0 && setIndex(index - 1)}
                className="w-10 h-10 rounded-full border
                           flex items-center justify-center
                           hover:bg-teal-600 hover:text-white"
              >
                ←
              </button>

              <div className="flex gap-2">
                {Array.from({ length: max + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-6 h-2 rounded-full transition
                    ${i === index ? "bg-teal-600" : "bg-gray-300"}`}
                  />
                ))}
              </div>

              <button
                onClick={() => index < max && setIndex(index + 1)}
                className="w-10 h-10 rounded-full border
                           flex items-center justify-center
                           hover:bg-teal-600 hover:text-white"
              >
                →
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Courses;

