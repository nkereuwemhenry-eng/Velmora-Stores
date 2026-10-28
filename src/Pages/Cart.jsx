import { Link } from "react-router-dom";
import { useCart } from "../content/useCart";

export default function Cart() {
  const {
    cartItems,
    cartCount,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();

  const whatsappNumber = "2347017018478"; // Replace with your number

  const checkoutMessage = cartItems
    .map(
      (item) =>
        `${item.name} x ${item.quantity}`
    )
    .join("\n");

  const checkoutLink =
    `https://wa.me/${whatsappNumber}?text=` +
    encodeURIComponent(
      `Hello Velmora! I would like to enquire about these items:\n\n${checkoutMessage}\n\nPlease confirm current prices and availability.`
    );

  return (
    <main className="min-h-screen bg-[#faf7f0] px-5 py-12 md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.25em] text-[#a68116]">
          Velmora
        </p>

        <h1 className="mt-3 text-3xl font-bold md:text-4xl">
          Your Shopping Cart
        </h1>

        <p className="mt-2 text-gray-600">
          {cartCount} {cartCount === 1 ? "item" : "items"} in your cart
        </p>

        {cartItems.length === 0 ? (
          <div className="mt-10 rounded-xl border border-gray-200 bg-white p-10 text-center">
            <h2 className="text-xl font-semibold">
              Your cart is empty
            </h2>

            <p className="mt-3 text-gray-600">
              Explore our collections and add your favourite products.
            </p>

            <Link
              to="/"
              className="mt-6 inline-block rounded-md bg-[#d4af37] px-6 py-3 font-semibold text-black hover:bg-[#f0d778]"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="mt-8 space-y-4">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 w-full rounded-lg bg-[#f1ede5] object-cover sm:w-32"
                  />

                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">
                      {item.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.category}
                    </p>

                    <p className="mt-2 text-sm text-gray-600">
                      Price available on enquiry
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      aria-label={`Decrease ${item.name} quantity`}
                      className="h-9 w-9 rounded border border-gray-300 hover:bg-gray-100"
                    >
                      −
                    </button>

                    <span className="min-w-6 text-center">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      aria-label={`Increase ${item.name} quantity`}
                      className="h-9 w-9 rounded border border-gray-300 hover:bg-gray-100"
                    >
                      +
                    </button>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="ml-1 text-sm font-medium text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">
                Ready to enquire?
              </h2>

              <p className="mt-2 leading-6 text-gray-600">
                We'll send your selected products and quantities to
                Velmora on WhatsApp so you can confirm prices and
                availability.
              </p>

              <a
                href={checkoutLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-md bg-[#d4af37] px-5 py-3 text-center font-semibold text-black transition hover:bg-[#f0d778]"
              >
                Enquire About My Cart on WhatsApp
              </a>

              <button
                type="button"
                onClick={clearCart}
                className="mt-4 w-full rounded-md border border-gray-300 px-5 py-3 font-medium hover:bg-gray-50"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}