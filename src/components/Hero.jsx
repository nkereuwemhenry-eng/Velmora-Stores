import { Link } from "react-router-dom";
import heroImage from "../assets/cosmeticspp.jpg";

const Hero = () => {
return (
<section
className="relative flex min-h-[550px] items-center overflow-hidden bg-black bg-cover bg-center md:min-h-[650px]"
style={{
backgroundImage: `url(${heroImage})`,
}}
>
{/* Dark overlay */}
<div className="absolute inset-0 bg-black/50"></div>

  {/* Hero content */}
  <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16">

    <div className="max-w-2xl">

      {/* Small introductory text */}
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400 sm:text-base">
        Beauty • Fragrance • Skincare
      </p>

      {/* Main heading */}
      <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Look Good.
        <br />

        <span className="text-yellow-400">
          Feel Confident.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-lg text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
        Discover premium perfumes, quality cosmetics, and
        skincare essentials for men, women, and children.
        Your beauty, your confidence, your Velmora.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap items-center gap-4">

        <Link
          to="/men"
          className="rounded-md bg-yellow-400 px-7 py-3 font-semibold text-black transition duration-300 hover:bg-yellow-300"
        >
          Explore Products
        </Link>

        <Link
          to="/women"
          className="rounded-md border border-white px-7 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
        >
          Discover Beauty
        </Link>

      </div>

      {/* Trust message */}
      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-200">

        <p>✓ Quality Products</p>

        <p>✓ Beauty for Everyone</p>

        <p>✓ Easy WhatsApp Enquiries</p>

      </div>

    </div>

  </div>
</section>

);
};

export default Hero;