import { FaInstagram, FaYoutube, FaTwitter, FaDribbble, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Coursespace</h2>
          <p className="text-sm leading-6 mb-6">
            Coursespace is an online learning platform that has
            been operating since 2018 until now.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[FaInstagram, FaYoutube, FaTwitter, FaDribbble, FaGithub].map((Icon, i) => (
              <div
                key={i}
                className="p-2 rounded-full transition duration-300 hover:bg-orange-400 hover:text-white cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-4">Course</h3>
          <ul className="space-y-2">
            {["UI/UX Design", "Mobile Development", "Machine Learning", "Web Development"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            {["Home", "Courses", "Testimonial", "Mentor"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            {["Contact Us", "Privacy & Policy", "Term & Condition", "FAQ"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;