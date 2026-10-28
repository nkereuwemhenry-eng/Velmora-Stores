import { useCart } from "../content/useCart";
import AmouagePerfume from '../assets/Amouage.jpg'
import HydratingMoisturiser from '../assets/SHM.jpg'
import Lipgloss from '../assets/lipglosss.jpg'
import Blisscream from '../assets/blisscream.jpg'

const products = [
{
id: 1,
name: "Amouage Gold Perfume",
category: "Perfumes",
description:
"A sophisticated fragrance designed to leave a memorable impression.",
image: AmouagePerfume,
},
{
id: 2,
name: "Hydrating Moisturizer",
category: "Skincare",
description:
"A daily moisturizer that helps keep your skin soft and hydrated.",
image: HydratingMoisturiser,
},
{
id: 3,
name: "Smooth Finish Foundation/Lipgloss",
category: "Makeup",
description:
"A beautiful foundation for a smooth/gloss, natural-looking finish.",
image: Lipgloss,
},
{
id: 4,
name: "Gentle Baby Lotion",
category: "Baby Care",
description:
"A gentle daily lotion formulated for delicate skin.",
image: Blisscream,
},
];

const FeaturedProducts = () => {
const { addToCart, cartCount } = useCart();

// Replace this number with your business's WhatsApp number.
// Include the country code without +, spaces, or dashes.
const whatsappNumber = "2347017018478";

const chatOnWhatsApp = (product) => {
const message = `Hello Velmora! I'm interested in ${product.name}. Please confirm its availability and current price.`;

const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  message
)}`;

window.open(whatsappURL, "_blank", "noopener,noreferrer");

};

return (
<section className="bg-white px-4 py-16 sm:px-8 sm:py-20 lg:px-12">

  {/* Section heading */}
  <div className="mx-auto mb-10 max-w-7xl">

    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
      Our Selection
    </p>

    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

      <div>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Featured Products
        </h2>

        <p className="mt-3 max-w-xl text-gray-600">
          Discover products selected to bring out your best.
          Contact us for current prices and availability.
        </p>
      </div>

      <p className="text-sm text-gray-500">
        {products.length} featured products
      </p>

    </div>
  </div>

  {/* Product grid */}
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

    {products.map((product) => (
      <article
        key={product.id}
        className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >

        {/* Product image */}
        <div className="relative h-64 overflow-hidden bg-stone-100">

          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105"
          />

          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
            {product.category}
          </span>

        </div>

        {/* Product information */}
        <div className="flex flex-col p-5">

          <h3 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h3>

          <p className="mt-2 min-h-[72px] text-sm leading-6 text-gray-600">
            {product.description}
          </p>

          {/* WhatsApp button */}
          <button
            type="button"
            onClick={() => chatOnWhatsApp(product)}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            <span aria-hidden="true">☏</span>
            Chat on WhatsApp
          </button>

          {/* Add to cart button */}
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

  {/* Shared cart feedback */}
  <div className="mx-auto mt-8 max-w-7xl rounded-lg bg-stone-100 p-4 text-sm text-gray-700">
    Products added to cart:{" "}
    <span className="font-bold">
      {cartCount}
    </span>
  </div>

</section>

);
};

export default FeaturedProducts;