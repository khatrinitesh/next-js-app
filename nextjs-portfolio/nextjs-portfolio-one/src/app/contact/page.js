import React from "react";
// components
import Banner from '../../components/Banner';

const Contact = () => {
  return (
    <div className="content">
      <Banner
        title="Contact"
        desc="Proident voluptate cupidatat voluptate veniam occaecat eiusmod officia nulla."
      />
      <h4 className="text-center dark:text-white text-primaryD my-[30px] text-3xl">Contact Us</h4>
      <form className="max-w-prose mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <input
            type="text"
            className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
            placeholder="First Name"
          />
          <input
            type="text"
            className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
            placeholder="Last Name"
          />
          <input
            type="email"
            className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
            placeholder="Email"
          />
          <input
            type="tel"
            className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
            placeholder="Phone"
          />
          <textarea
            cols="10"
            rows="5"
            className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          value="Send Message"
          className="rounded-[5px] focus:outline-none mt-5 bg-defaultgreen hover:bg-hovergreen px-4 py-2 text-white font-bold w-full">Submit</button>
      </form>
    </div>
  );
};

export default Contact;