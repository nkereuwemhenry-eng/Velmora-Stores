import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../content/useCart";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "Children", path: "/children" },
  ];

  const linkStyle = ({ isActive }) =>
    `transition duration-300 hover:text-yellow-400 ${
      isActive ? "text-yellow-400" : "text-white"
    }`;

return (
<nav className="sticky top-0 z-50 w-full bg-gray-800 text-white shadow-lg">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

    {/* LOGO */}
    <Link to="/" className="flex items-center gap-3">
      <img
        src={logo}
        alt="Velmora logo"
        className="h-10 w-auto object-contain sm:h-12"
      />
    </Link>

    {/* DESKTOP NAVIGATION LINKS */}
    <div className="hidden items-center gap-8 md:flex">
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          end={link.path === "/"}
          className={linkStyle}
        >
          {link.name}
        </NavLink>
      ))}
    </div>

    {/* LOGIN, REGISTER AND CART */}
    <div className="hidden items-center gap-5 md:flex">
      <Link
        to="/login"
        className="text-sm transition hover:text-gray-400"
      >
        Login
      </Link>

      <Link
        to="/register"
        className="rounded-full border border-yellow-400 px-4 py-2 text-sm text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
      >
        Register
      </Link>

      <Link
        to="/cart"
        aria-label="Shopping cart"
        className="relative text-xl transition hover:text-yellow-400"
      >
        🛒
        {cartCount > 0 && (
          <span className="absolute -right-3 -top-2 rounded-full bg-yellow-400 px-1.5 text-xs font-bold text-black">
            {cartCount}
          </span>
        )}
      </Link>
    </div>

    {/* MOBILE MENU BUTTON */}
    <button
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={menuOpen}
      className="text-2xl text-yellow-400 md:hidden"
    >
      {menuOpen ? "✕" : "☰"}
    </button>
  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="border-t border-gray-700 bg-gray-800 px-6 py-5 md:hidden">
      <div className="flex flex-col gap-5">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.path === "/"}
            onClick={() => setMenuOpen(false)}
            className={linkStyle}
          >
            {link.name}
          </NavLink>
        ))}

        <hr className="border-gray-800" />

        <Link
          to="/login"
          onClick={() => setMenuOpen(false)}
          className="transition hover:text-yellow-400"
        >
          Login
        </Link>

        <Link
          to="/register"
          onClick={() => setMenuOpen(false)}
          className="text-yellow-400 transition hover:text-yellow-300"
        >
          Register
        </Link>

        <Link
          to="/cart"
          onClick={() => setMenuOpen(false)}
          className="transition hover:text-yellow-400"
        >
          🛒 Shopping Cart{cartCount > 0 ? ` (${cartCount})` : ""}
        </Link>
      </div>
    </div>
  )}
</nav>

);
};

export default Navbar;
