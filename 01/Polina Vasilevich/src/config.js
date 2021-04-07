import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaVimeo } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export const config = {
  routes: [
    {
      path: "/",
      label: "Home",
    },

    {
      path: "/about",
      label: "About",
    },

    {
      path: "/servicing",
      label: "Servicing",
    },

    {
      path: "/contact",
      label: "Contact us",
    },
  ],

  contacts: [
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/",
    },

    {
      icon: <FaInstagram />,
      href: "https://www.linkedin.com/",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/tweeter",
    },

    {
      icon: <FaVimeo />,
      href: "https://vimeo.com/",
    },
    {
      icon: <FaPinterest />,
      href: "https://www.pinterest.com/",
    },
  ],
};
