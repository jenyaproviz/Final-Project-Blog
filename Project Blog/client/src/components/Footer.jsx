import {
  FiGithub,
  FiLinkedin,
  FiGlobe,
  FiFacebook,
  FiInfo,
  FiBookOpen,
} from "react-icons/fi";

const socialLinks = [
  {
    id: 1,
    icon: <FiGlobe />,
    url: "http://localhost:3000/",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/jenyaproviz",
  },
  {
    id: 3,
    icon: <FiFacebook />,
    url: "https://facebook.com",
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    url: "https://linkedin.com/in/jenya-proviz-katz",
  },
  {
    id: 5,
    icon: <FiInfo />,
    url: "/about",
  },
  { id: 6, icon: <FiBookOpen />, url: "/contact" },
];

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-10 sm:pt-10 pb-1 mt-10 border-t-2 border-primary-light dark:border-secondary-dark">
        <div className="font-general-regular flex flex-col justify-center items-center mb-10 sm:mb-10">
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-600 dark:bg-ternary-dark hover:bg-gray-450 shadow-sm p-2 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
          <div className="text-xs mt-5 text-white">
            © 2024 Jenya Proviz. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
