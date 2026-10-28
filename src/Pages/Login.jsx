import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    setMessage(
      "Your form is valid. Connect an authentication service to log in securely."
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf7f0] px-5 py-12">
      <section className="w-full max-w-md rounded-2xl border border-[#e8dfcb] bg-white p-6 shadow-lg sm:p-10">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a68116]">
            Welcome Back
          </p>

          <h1 className="mt-3 text-3xl font-bold text-gray-900">
            Log In to Velmora
          </h1>

          <p className="mt-3 text-gray-600">
            Sign in to access your account and shopping benefits.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
            />
          </div>

          {message && (
            <p
              role="status"
              className="rounded-lg bg-[#faf7f0] p-3 text-sm text-gray-700"
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-[#d4af37] px-5 py-3 font-semibold text-black transition hover:bg-[#f0d778]"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-[#8a6b12] hover:underline"
          >
            Register
          </Link>
        </p>
      </section>
    </main>
  );
}