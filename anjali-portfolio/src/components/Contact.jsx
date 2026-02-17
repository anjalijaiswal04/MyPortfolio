import React from "react";

const Contact = () => {
  return (
    <section className="px-8 py-16" id="contact">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form
        className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        action="https://formsubmit.co/anjalijaiswal82479@gmail.com"
        method="POST"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-700"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
