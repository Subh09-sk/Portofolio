import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit (Future Backend Integration)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message Sent! (Backend Integration Required)");
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center px-6">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-lg text-gray-400 mb-8">Let's connect! Feel free to reach out.</p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg max-w-lg mx-auto shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      {/* <div className="flex justify-center space-x-6 mt-6">
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 text-3xl transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white text-3xl transition"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:subhrakantdas03@email.com"
          className="text-gray-400 hover:text-red-500 text-3xl transition"
        >
          <FaEnvelope />
        </a>
      </div> */}
    </section>
  );
};

export default Contact;
