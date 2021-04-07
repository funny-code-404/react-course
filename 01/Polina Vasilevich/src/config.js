import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

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
      icon: <FaInstagramSquare />,
      href: "https://www.linkedin.com/",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/tweeter",
    },

    {
      icon: <FaVimeoV />,
      href: "https://vimeo.com/",
    },
    {
      icon: <FaPinterestP />,
      href: "https://www.pinterest.com/",
    },
  ],
};
