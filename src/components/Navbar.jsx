import React from "react";

const Navbar = () => {
  // Smooth scrolling function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust offset if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <h1 className="text-2xl font-bold">Subhrakant Das</h1>
      <ul className="flex gap-6">
        <li>
          <button onClick={() => scrollToSection("about")} className="hover:text-gray-400">
            About
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("projects")} className="hover:text-gray-400">
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("contact")} className="hover:text-gray-400">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
