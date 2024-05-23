import React from "react";
// constants
import { socialLinks } from "../constants/constants";

const SocialMediaIcon = () => {
  return (
    <>
      <div className="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">
        {socialLinks.map((link, index) => (
          <SocialIcon key={index} link={link} />
        ))}
      </div>
    </>
  );
};

export default SocialMediaIcon;

const SocialIcon = ({ link }) => (
  <a href={link.url} target="_blank">
    <i
      className={`text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors ${link.icon}`}
    />
  </a>
);