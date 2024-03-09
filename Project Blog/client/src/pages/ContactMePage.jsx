import React, { useState } from "react";

const ContactMePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!formData.name || !formData.email || !formData.tel) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Save user's contact details to local storage
    localStorage.setItem("contactDetails", JSON.stringify(formData));

    // Send SMS to the phone number
    const message = `Hello from ${formData.name}`;
    sendSMS(formData.tel, message);

    // Show thank you message to the user
    alert(`Thank you ${formData.name}`);
  };

  const sendSMS = (phoneNumber, message) => {
    // Assume you have a function to send an SMS using an API or some service
    // You can implement this function based on your backend or third-party service
    // Example: sendSMSFunction(phoneNumber, message);
    console.log(`Sending SMS to ${phoneNumber}: ${message}`);
  };

  return (
    <div className="relative flex items-top justify-center min-h-screen bg-gray-700 dark:bg-gray-900 sm:items-center sm:pt-0 rounded-xl shadow-xl text-xs ml-11 mr-11 overflow-hidden">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27064.501498852074!2d34.760609657738115!3d32.01341557481311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b4bb0c33bf39%3A0xfbdd79640525e72d!2sHolon!5e0!3m2!1sen!2sil!4v1709374241761!5m2!1sen!2sil"
        width="100%"
        height="100%"
        style={{ border: 0, opacity: 0.6 }}
        allowFullScreen=""
        loading="lazy"
        className="absolute inset-0 z-0"
      ></iframe>
      <div className="relative z-10 max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-800 dark:bg-gray-300 sm:rounded-lg ">
              <h1 className="text-4xl sm:text-2xl text-gray-400 dark:text-white font-extrabold tracking-tight">
                Get in touch
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mt-2">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500 "
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 text-lg tracking-wide font-semibold w-40">
                  Israel, Holon
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-lg tracking-wide font-semibold w-40">
                  +972 585599171
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 text-lg tracking-wide font-semibold w-40">
                  jenka.katz@gmail.com
                </div>
              </div>
            </div>

            <form
              className="p-6 flex flex-col justify-center"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="md:w-32 bg-gray-800 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-gray-500 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
