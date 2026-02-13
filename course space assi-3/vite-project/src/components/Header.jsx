// import React, { useState } from "react";
// import { Menu, X } from "lucide-react"; // Icon library

// const Header = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="w-full bg-transparent  px-6 md:px-12 py-4">

//       {/* Main Row */}
//       <div className="flex items-center justify-between">

//         {/* logo */}
//         <h1 className="text-xl font-bold text-gray-800 font-size-22px font-weight-700">
//           Course<span className="text-teal-700">space</span>
//         </h1>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex gap-10 text-gray-500 font-medium">

//   {["Home", "Courses", "Testimonial", "Mentor"].map((item) => (
//     <a
//       key={item}
//       href="#"
//       className="relative group hover:text-teal-700 transition duration-300"
//     >
//       {item}

//       {/* Curved Yellow Line */}
//       <span
//         className="
//           absolute
//           left-1/2
//           -bottom-3
//           w-10
//           h-[6px]
//           border-b-[3px]
//           border-yellow-400
//           rounded-full
//           scale-x-0
//           transition-transform
//           duration-300
//           group-hover:scale-x-100
//           -translate-x-1/2
//         "
//       ></span>
//     </a>
//   ))}

// </nav>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex gap-4">

//           <button className="border-2 border-teal-700 text-teal-700 px-5 py-2 rounded-lg hover:bg-teal-700 hover:text-white transition">
//             Sign In
//           </button>

//           <button className="bg-teal-700 text-white px-5 py-2 rounded-lg hover:bg-teal-800 transition">
//             Sign Up
//           </button>

//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X /> : <Menu />}
//         </button>

//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">

//           <nav className="flex flex-col gap-4 text-gray-700 font-medium">

//             <a href="#" className="hover:text-teal-700">Home</a>
//             <a href="#" className="hover:text-teal-700">Courses</a>
//             <a href="#" className="hover:text-teal-700">Testimonial</a>
//             <a href="#" className="hover:text-teal-700">Mentor</a>

//             <hr />

//             <button className="border-2 border-teal-700 text-teal-700 py-2 rounded-full">
//               Sign In
//             </button>

//             <button className="bg-teal-700 text-white py-2 rounded-full">
//               Sign Up
//             </button>

//           </nav>

//         </div>
//       )}

//     </header>
//   );
// };

// export default Header;






import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Courses", "Testimonial", "Mentor"];

  return (
    <header className="w-full bg-transparent px-6 md:px-12 py-4">
      {/* Main Row */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800">
          Course<span className="text-teal-700">space</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-gray-500 font-medium">

          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="relative group hover:text-teal-700 transition duration-300"
            >
              {item}

              {/* SVG Curve Line */}
              <img
              src="./public/headline-curve.svg"
                alt="curve"
                className="
                  absolute
                  left-1/2
                  -bottom-3
                  w-10
                  opacity-0
                  scale-x-0
                  -translate-x-1/2
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:scale-x-100
                "
              />
            </a>
          ))}

        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">

          <button className="border-2 border-teal-700 text-teal-700 px-5 py-2 rounded-lg hover:bg-teal-700 hover:text-white transition">
            Sign In
          </button>

          <button className="bg-teal-700 text-white px-5 py-2 rounded-lg hover:bg-teal-800 transition">
            Sign Up
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">

          <nav className="flex flex-col gap-4 text-gray-700 font-medium">

            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-teal-700"
              >
                {item}
              </a>
            ))}

            <hr />

            <button className="border-2 border-teal-700 text-teal-700 py-2 rounded-full">
              Sign In
            </button>

            <button className="bg-teal-700 text-white py-2 rounded-full">
              Sign Up
            </button>

          </nav>

        </div>
      )}

    </header>
  );
};

export default Header;

