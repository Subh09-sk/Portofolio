import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/Subh09-sk" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-400" />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-blue-300" />
        </a>
      </div>
      <p className="text-gray-400">© 2025 Subh. All rights reserved.</p>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-4 text-blue-400 hover:underline"
      >
        Back to Top ↑
      </button>
    </footer>
  );
};

export default Footer;
