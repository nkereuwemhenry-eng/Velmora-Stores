import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../content/useCart";
import childrenHero from "../assets/babylogo2.jpg";
import Babylotion from '../assets/blisscream.jpg';
import Soap from '../assets/dove_soap.jpg';
import Moisturiser from '../assets/nextlotion.jpg';
import Pears from '../assets/pears.jpeg';
import Hersh from '../assets/Hersh.jpg';
import Evelon from '../assets/eveloncream.jpg';
import bodywash from '../assets/Ivory.jpeg';
import body from '../assets/babylogo2.jpg';

const whatsappNumber = "2347017018478"; // Replace with your business WhatsApp number

const categories = [
  "All Products",
  "Baby Care",
  "Skincare",
  "Body Care",
  "Fragrances",
];

const products = [
  {
    id: 'baby_1',
    name: "Gentle Baby Lotion",
    category: "Baby Care",
    image: Babylotion,
    description: "A gentle daily-care option for your little one's skin.",
  },
  {
    id: 'baby_2',
    name: "Baby Bath Wash",
    category: "Baby Care",
    image: Soap,
    description: "A gentle cleansing product for bath-time routines.",
  },
  {
    id: 'baby_3',
    name: "Kids Gentle Moisturizer",
    category: "Skincare",
    image: Moisturiser,
    description: "Everyday moisture for soft, comfortable skin.",
  },
  {
    id: 'baby_4',
    name: "Nourishing Body Cream",
    category: "Body Care",
    image: Pears,
    description: "A caring addition to a child's daily body-care routine.",
  },
  {
    id: 'baby_5',
    name: "Kids Fresh Fragrance",
    category: "Fragrances",
    image: Hersh,
    description: "A light fragrance option for special occasions.",
  },
  {
    id: 'baby_6',
    name: "Baby Care Essentials",
    category: "Baby Care",
    image: Evelon,
    description: "Everyday essentials for your baby's care routine.",
  },
  {
    id: 'baby_7',
    name: "Gentle Kids Body Wash",
    category: "Body Care",
    image: body,
    description: "A refreshing option for everyday bathing.",
  },
  {
    id: 'baby_8',
    name: "Kids Skin Care Set",
    category: "Skincare",
    image: bodywash,
    description: "A simple skincare collection for little ones.",
  },
];

export default function Children() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const { addToCart } = useCart();

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  const getWhatsAppLink = (productName) => {
    const message = `Hello Velmora, I am interested in ${productName}. Please tell me the current price, availability, and suitability for my child's age.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <main className="min-h-screen bg-[#faf7f0] text-gray-900">
      {/* Children's Collection Banner */}
      <section
        className="relative flex min-h-[350px] items-center overflow-hidden bg-[#171717] bg-cover bg-center px-6 py-16 md:min-h-[430px] md:px-16"
        style={{ backgroundImage: `url(${childrenHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
            Velmora Little Treasures
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Gentle Care for
            <span className="block text-[#d4af37]">
              Little Ones
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-300 md:text-lg">
            Explore baby care, gentle skincare, body care, and
            fragrances selected with your little ones in mind.
          </p>

          <a
            href="#children-products"
            className="mt-8 inline-block rounded-md bg-[#d4af37] px-7 py-3 font-semibold text-black transition hover:bg-[#f0d778]"
          >
            Explore Collection
          </a>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-8 md:px-8">
        <p className="text-sm text-gray-500">
          <Link to="/" className="transition hover:text-[#a68116]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-900">
            Children's Collection
          </span>
        </p>
      </div>

      {/* Product Collection */}
      <section
        id="children-products"
        className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16"
      >
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a68116]">
            Little Things, Loving Care
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Children's Collection
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Discover everyday care essentials for babies and children.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "border-[#d4af37] bg-[#d4af37] text-black"
                  : "border-gray-300 bg-white text-gray-700 hover:border-[#d4af37] hover:text-[#8a6b12]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative overflow-hidden bg-[#f1ede5]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-medium text-[#d4af37]">
                  {product.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold">
                  {product.name}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
                  {product.description}
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-[#d4af37] px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-[#f0d778]"
                  >
                    Enquire on WhatsApp
                  </a>

                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="rounded-md border border-black px-4 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Parent Reminder */}
      <section className="border-t border-[#e8dfcb] bg-white px-5 py-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-bold md:text-2xl">
            Your Child's Comfort Comes First
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Please check product labels, age recommendations, and
            ingredients before use. For babies and children with
            sensitive skin, consult a qualified healthcare professional
            when unsure.
          </p>
        </div>
      </section>
    </main>
  );
}