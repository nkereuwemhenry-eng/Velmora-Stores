import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../content/useCart";
import menHero from "../assets/men_category.jpg";
import tomford from '../assets/tomfordperf.jpg';
import isntreesungel from '../assets/isntree-sun-gel-new2.jpg';
import Lubridem from '../assets/Lubridem.jpeg';
import Reflection from '../assets/Reflection.jpg';
import lauramerca from '../assets/lauramerca.jpg';
import Dail_cream from '../assets/Dail_cream.jpg';

const menProducts = [
  {
    id: "men_1",
    name: "Signature Eau de Parfum",
    category: "Perfumes",
    description:
      "A sophisticated fragrance for men who appreciate a distinctive scent.",
    image: tomford,
  },
  {
    id: "men_2",
    name: "Daily Sun Screen",
    category: "Skincare",
    description:
      "Protecting your face from the sun.",
    image: isntreesungel,
  },
  {
    id: "men_3",
    name: "Daily Hydrating Moisturizer",
    category: "Skincare",
    description:
      "A lightweight moisturizer for dry skin to help keep your skin feeling soft.",
    image: Lubridem,
  },
  {
    id: "men_4",
    name: "Designers perfumes",
    category: "Perfumes",
    description:
      "An easy-to-wear fragrance for your everyday routine.",
    image: Reflection,
  },
  {
    id: "men_5",
    name: "Nourishing Beard Oil",
    category: "Grooming",
    description:
      "A beard-care essential to help condition facial hair and soften its feel.",
    image: lauramerca,
  },
  {
    id: "men_6",
    name: "Body Lotion",
    category: "Skincare",
    description:
      "A daily body lotion. Check the product label for its SPF and directions.",
    image: Dail_cream,
  },
];

const categories = ["All Products", "Perfumes", "Skincare", "Grooming"];

const Men = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const { addToCart } = useCart();

  const filteredProducts =
    activeCategory === "All Products"
      ? menProducts
      : menProducts.filter(
          (product) => product.category === activeCategory
        );

  // Replace this placeholder with your business WhatsApp number.
  const whatsappNumber = "2347017018478";

  const chatOnWhatsApp = (product) => {
    const message = `Hello Velmora! I'm interested in ${product.name}. Please confirm availability and the current price.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="bg-white">

      {/* Collection hero */}
      <section
        className="relative flex min-h-[300px] items-center overflow-hidden bg-stone-900 bg-cover bg-center px-6 py-16 sm:min-h-[360px] sm:px-10 lg:px-16"
        style={{ backgroundImage: `url(${menHero})` }}
      >

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/35" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Velmora Men's Collection
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Confidence in
            <span className="block text-yellow-400">
              Every Detail.
            </span>
          </h1>

          <p className="mt-5 max-w-xl leading-7 text-gray-300 sm:text-lg">
            Explore men's fragrances, skincare, and grooming
            essentials to complement your everyday routine.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-stone-50 px-4 py-4 sm:px-8">
        <div className="mx-auto max-w-7xl text-sm text-gray-500">
          <Link to="/" className="transition hover:text-yellow-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-900">Men</span>
        </div>
      </div>

      {/* Collection and filters */}
      <section className="px-4 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-yellow-700">
                Find Your Essentials
              </p>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Shop Men's Products
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                Browse our selection and contact us directly for
                availability and current prices.
              </p>
            </div>

            <p className="text-sm text-gray-500">
              {filteredProducts.length} products
            </p>
          </div>

          {/* Category filter buttons */}
          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                  activeCategory === category
                    ? "border-black bg-black text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-yellow-500 hover:text-yellow-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Product image */}
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-contain p-5 transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
                    {product.category}
                  </span>
                </div>

                {/* Product details */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
                    {product.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => chatOnWhatsApp(product)}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                  >
                    <span aria-hidden="true">☏</span>
                    Ask on WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="mt-3 w-full rounded-md bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-yellow-400 hover:text-black"
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}

          </div>

          {filteredProducts.length === 0 && (
            <p className="py-12 text-center text-gray-500">
              No products found in this category.
            </p>
          )}

        </div>
      </section>
    </main>
  );
};

export default Men;