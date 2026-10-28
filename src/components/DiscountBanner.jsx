import { Link } from "react-router-dom";

const DiscountBanner = () => {
  return (
    <section className="bg-stone-100 px-4 py-16 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-black px-6 py-12 sm:px-10 sm:py-16 lg:px-16">

        {/* Decorative gold circles */}
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-yellow-500/30 sm:h-80 sm:w-80" />

        <div className="pointer-events-none absolute -bottom-24 right-24 h-48 w-48 rounded-full border border-yellow-500/20 sm:h-64 sm:w-64" />

        {/* Banner content */}
        <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">

          <div className="max-w-2xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
              A Little Something Extra
            </p>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Your Beauty Journey,
              <span className="block text-yellow-400">
                Your Exclusive Reward.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
              Create your Velmora account and enjoy an exclusive
              discount when your eligible purchase total exceeds
              $100. Your next favourite product awaits.
            </p>

            <p className="mt-4 text-sm text-gray-400">
              Registration required. Terms and eligibility apply.
            </p>

          </div>

          {/* Call-to-action buttons */}
          <div className="flex w-full flex-col items-center gap-4 sm:w-auto">

            <Link
              to="/register"
              className="w-full rounded-md bg-yellow-400 px-8 py-4 text-center font-bold text-black transition duration-300 hover:bg-yellow-300 sm:w-auto"
            >
              Create Your Account
            </Link>

            <Link
              to="/login"
              className="text-sm text-white underline decoration-yellow-400 underline-offset-4 transition hover:text-yellow-400"
            >
              Already registered? Sign in
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;