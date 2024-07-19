import React from "react";
// import "./style.css";

const Example = () => {
  const testimonialsData = [
    {
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?",
    },
    {
      name: "Jane Smith",
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eu mollis felis.",
    },
    {
      name: "Helen Keller",
      text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    },
    {
      name: "Benjamin Franklin",
      text: "Either write something worth reading or do something worth writing.",
    },
    {
      name: "Saul Bellow",
      text: "You never have to change anything you got up in the middle of the night to write.",
    },
    {
      name: "Robert Frost",
      text: "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
    },
    // Add more testimonials as needed
  ];
  return (
    <>
    <div className="container mx-auto px-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            text={testimonial.text}
          />
        ))}
      </div>
      </div>
    </>
  );
};

export default Example;

const Testimonial = ({ name, text }) => {
  return (
    <>
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <p className="text-gray-800 text-lg mb-4">{text}</p>
        <p className="text-gray-600">- {name}</p>
      </div>
    </>
  );
};
