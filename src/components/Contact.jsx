import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 4000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_do3y0i3";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_0hb9v57";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "McQcDJDJR95ZICRAlp";

    try {
      emailjs.init(publicKey);
    } catch (err) {
      console.log("EmailJS init warning:", err);
    }

    emailjs
      .sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          showToast("Message sent successfully! I will get back to you soon. ✅", "success");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error("FAILED...", error);
          showToast("Message not sent. Please check your network or try again. ❌", "error");
          setLoading(false);
        }
      );
  };

  return (
    <>
      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-6 right-4 sm:right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border text-sm font-semibold backdrop-blur-xl max-w-sm ${
              toast.type === "success"
                ? "bg-slate-900/90 text-white border-emerald-500/60"
                : "bg-slate-900/90 text-white border-rose-500/60"
            }`}
          >
            {toast.type === "success" ? (
              <FaCheckCircle className="text-emerald-400 text-xl shrink-0" />
            ) : (
              <FaExclamationCircle className="text-rose-400 text-xl shrink-0" />
            )}
            <span className="leading-snug">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        id="contact"
        className="py-20 bg-slate-100/70 border-b border-gray-200/80"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900 tracking-tight">
            Get In <span className="text-purple-600">Touch</span>
          </h2>

          <p className="text-gray-600 font-medium text-center max-w-2xl mx-auto mb-16">
            Open to internships, collaborations, and full-stack development
            opportunities. Let's connect!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-gray-900 font-semibold text-xs sm:text-sm mb-1">
                    Enter Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 outline-none text-xs sm:text-sm text-gray-900 font-medium placeholder:text-gray-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 shadow-xs transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold text-xs sm:text-sm mb-1">
                    Enter Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 outline-none text-xs sm:text-sm text-gray-900 font-medium placeholder:text-gray-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 shadow-xs transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold text-xs sm:text-sm mb-1">
                    Enter Subject
                  </label>
                  <input
                    name="title"
                    type="text"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 outline-none text-xs sm:text-sm text-gray-900 font-medium placeholder:text-gray-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 shadow-xs transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold text-xs sm:text-sm mb-1">
                    Enter Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Hello Dheeraj, I would like to discuss..."
                    className="w-full h-28 sm:h-32 bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 outline-none text-xs sm:text-sm text-gray-900 font-medium placeholder:text-gray-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 shadow-xs transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-5 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-300 cursor-pointer text-xs sm:text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin text-base" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <span>Send Your Details</span>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8 mt-2 lg:mt-0 lg:ml-8 flex flex-col justify-center">
              <div className="flex items-center">
                <div className="text-purple-600 text-xl sm:text-2xl mr-4 shrink-0 p-3 bg-purple-100 rounded-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Location</p>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">Indore, Madhya Pradesh</h3>
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-purple-600 text-xl sm:text-2xl mr-4 shrink-0 p-3 bg-purple-100 rounded-xl">
                  <FaEnvelope />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 font-medium">Email Address</p>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 break-all sm:break-normal">dheerajpatidar1704@gmail.com</h3>
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-purple-600 text-xl sm:text-2xl mr-4 shrink-0 p-3 bg-purple-100 rounded-xl">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Phone Number</p>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">+91 7000619391</h3>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-2 sm:pt-4 border-t border-gray-200/80">
                <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-gray-900">Follow & Connect</h3>
                <div className="flex space-x-4">
                  {/* GitHub */}
                  <a
                    href="https://github.com/Dheeraj-Patidar-17"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-300 text-gray-900 flex items-center justify-center hover:text-white hover:bg-gray-900 hover:border-gray-900 transition duration-300 shadow-xs"
                  >
                    <FaGithub className="text-lg sm:text-xl" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/dheeraj-patidar-6669ba287/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-blue-200 text-[#0A66C2] flex items-center justify-center hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition duration-300 shadow-xs"
                  >
                    <FaLinkedin className="text-lg sm:text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
