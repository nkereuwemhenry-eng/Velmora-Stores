import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../content/useCart";
import womenHero from "../assets/women_category.jpg";
import Treasureintense from '../assets/Treasure.jpg';
import Licorice from '../assets/Licorice.jpg';
import Darkspot from '../assets/Olay_Dark_Spot_Correcting_Body_Lotion_AHA_Vitamin_C_1.webp';
import Moisturiser from '../assets/SHM.jpg';
import Glow from '../assets/Beautyglow.jpg';
import Lipstick from '../assets/lipglosss.jpg';
import Soap from '../assets/Markari_soap.png';
import Gbogbonise from '../assets/Gbogbonise.jpeg';

const whatsappNumber = "237017018478"; // Replace with your business WhatsApp number

const categories = [
  "All Products",
  "Perfumes",
  "Makeup",
  "Skincare",
  "Body Care",
];

const products = [
  {
    id: 'women_1',
    name: "Treasure Intense Eau de Parfum",
    category: "Perfumes",
    image: Treasureintense,
    description: "An elegant fragrance for unforgettable moments.",
  },
  {
    id: 'women_2',
    name: "Cleansing Toner",
    category: "Face Cleanser",
    image: Licorice,
    description: "A smooth face cleanser for a naturally radiant look.",
  },
  {
    id: 'women_3',
    name: "Olay Dark Spot Remover",
    category: "Skincare",
    image: Darkspot,
    description: "Removes the toughest dark spot and leaves your skin spotless.",
  },
  {
    id: 'women_4',
    name: "Hydrating Body Moisturiser",
    category: "Body Care",
    image: Moisturiser,
    description: "A moisturising touch for silky-smooth skin.",
  },
  {
    id: 'women_5',
    name: "Beauty Glow",
    category: "Cream",
    image: Glow,
    description: "Carrot body lotion for whitening skin.",
  },
  {
    id: 'women_6',
    name: "Soft Glam Lipstick",
    category: "Makeup",
    image: Lipstick,
    description: "Add a finishing touch to your everyday look.",
  },
  {
    id: 'women_7',
    name: "Markari Beauty Soap",
    category: "Skincare",
    image: Soap,
    description: "A gentle cleanse for your daily skincare routine.",
  },
  {
    id: 'women_9',
    name: "Spot Remover",
    category: "Body Care",
    image: Gbogbonise,
    description: "Dark spot, acne cleanser.",
  },
];

export default function Women() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const { addToCart } = useCart();

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  const getWhatsAppLink = (productName) => {
    const message = `Hello Velmora, I am interested in ${productName}. Please tell me the current price and availability.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <main className="min-h-screen bg-[#faf7f0] text-gray-900">
      {/* Collection Banner */}
      <section
        className="relative flex min-h-[350px] items-center overflow-hidden bg-[#171717] bg-cover bg-center px-6 py-16 md:min-h-[430px] md:px-16"
        style={{ backgroundImage: `url(${womenHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
            Velmora Beauty
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Discover Your
            <span className="block text-[#d4af37]">
              Signature Beauty
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-300 md:text-lg">
            Explore fragrances, makeup, skincare, and body care
            selected to help you look and feel your best.
          </p>

          <a
            href="#women-products"
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
            Women's Collection
          </span>
        </p>
      </div>

      {/* Product Collection */}
      <section
        id="women-products"
        className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16"
      >
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a68116]">
            Made for You
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Women's Collection
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Find your favourites in fragrances, beauty, and everyday
            self-care.
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

        {filteredProducts.length === 0 && (
          <p className="py-12 text-center text-gray-600">
            No products found in this category.
          </p>
        )}
      </section>
    </main>
  );
}