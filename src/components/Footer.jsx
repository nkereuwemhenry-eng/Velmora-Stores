import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const whatsappNumber = "2347017018478";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Velmora! I would like to make an enquiry."
  )}`;

  return (
    <footer className="bg-black text-gray-300">

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">

        {/* Brand information */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src={logo}
              alt="Velmora logo"
              className="h-12 w-auto object-contain"
            />

            <span className="text-2xl font-bold tracking-wider text-yellow-400">
              Velmora
            </span>
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
            Your destination for perfumes, cosmetics, and skincare
            essentials for men, women, and children.
            Discover your beauty. Express your confidence.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-yellow-400 transition hover:text-yellow-300"
          >
            <span aria-hidden="true">☏</span>
            Chat with us on WhatsApp
          </a>
        </div>

        {/* Shop links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Shop
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="transition hover:text-yellow-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/men" className="transition hover:text-yellow-400">
                Men's Collection
              </Link>
            </li>

            <li>
              <Link to="/women" className="transition hover:text-yellow-400">
                Women's Collection
              </Link>
            </li>

            <li>
              <Link to="/children" className="transition hover:text-yellow-400">
                Children's Collection
              </Link>
            </li>

            <li>
              <Link to="/cart" className="transition hover:text-yellow-400">
                Shopping Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact and social links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Contact & Social
          </h3>

          <p className="mb-5 text-sm leading-6 text-gray-400">
            Have questions about a product or its current price?
            Reach out to us directly.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300"
          >
            Contact Velmora
          </a>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-yellow-400"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-yellow-400"
            >
              Facebook
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-yellow-400"
            >
              TikTok
            </a>
          </div>
        </div>

      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs text-gray-500 sm:flex-row sm:text-left lg:px-10">

          <p>
            © {currentYear} Velmora. All rights reserved.
          </p>

          <p>
            Beauty, fragrance, and skincare for everyone.
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;