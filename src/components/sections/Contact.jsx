import React, { useState, useEffect } from "react";
import RevealOnScroll from "./RevealOnScroll.jsx";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Debugging - Check if env variables are correctly loaded
    console.log("SERVICE_ID:", SERVICE_ID);
    console.log("TEMPLATE_ID:", TEMPLATE_ID);
    console.log("PUBLIC_KEY:", PUBLIC_KEY);

    // Ensure form data is properly structured
    const formData = new FormData(e.target);

    emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((response) => {
          console.log("Email sent successfully!", response);
          alert("Message sent to Jessica!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Something went wrong. Please try again later.");
        });
  };

  return (
      <section
          id="contact"
          className="min-h-screen flex justify-center items-center py-20"
      >
        <RevealOnScroll>
          <div className="w-200 max-w-lg px-6 py-8 bg-white shadow-lg rounded-lg border border-[#705158]/30 mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#e6b1bd] to-[#9c737c] bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-[#9c737c]/10 border border-white rounded px-4 py-3 text-[#9c737c] transition
                           focus:outline-none focus:border-[#e6b1bd] focus:bg-[#e6b1bd]/5"
                    placeholder="Enter your name"
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                />
              </div>

              <div className="relative">
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-[#9c737c]/10 border border-white rounded px-4 py-3 text-[#9c737c] transition
                           focus:outline-none focus:border-[#e6b1bd] focus:bg-[#e6b1bd]/5"
                    placeholder="example@gmail.com"
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                />
              </div>

              <div className="relative">
              <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-[#9c737c]/10 border border-white rounded px-4 py-3 text-[#9c737c] transition
                           focus:outline-none focus:border-[#e6b1bd] focus:bg-[#e6b1bd]/5"
                  placeholder="Your Message to Jessica"
                  onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                  }
              />
              </div>

              <button
                  type="submit"
                  className="w-full bg-[#9c737c] text-white py-3 px-6 rounded font-medium transition text-center
                         hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(112,83,89,0.4)]"
              >
                Send Message to Jessica
              </button>
            </form>
          </div>
        </RevealOnScroll>
      </section>
  );
};

export default Contact;
