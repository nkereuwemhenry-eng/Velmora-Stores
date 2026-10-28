import { Link } from "react-router-dom";
import menPhoto from "../assets/men_category.jpg";
import womenPhoto from "../assets/women_category.jpg";
import childPhoto from "../assets/babylogo3.jpg";

const categories = [
{
id: 1,
title: "For Him",
subtitle: "MEN'S COLLECTION",
description:
"Discover masculine fragrances, grooming essentials, and skincare products.",
image: menPhoto,
path: "/men",
},
{
id: 2,
title: "For Her",
subtitle: "WOMEN'S COLLECTION",
description:
"Explore elegant perfumes, cosmetics, makeup, and skincare essentials.",
image: womenPhoto,
path: "/women",
},
{
id: 3,
title: "For Little Ones",
subtitle: "CHILDREN'S COLLECTION",
description:
"Find gentle skincare, baby-care essentials, and everyday personal care.",
image: childPhoto,
path: "/children",
},
];

const CategorySection = () => {
return (
<section className="bg-stone-50 px-4 py-16 sm:px-8 sm:py-20 lg:px-12">

  {/* Section heading */}
  <div className="mx-auto mb-12 max-w-3xl text-center">

    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
      Discover Velmora
    </p>

    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
      Shop by Category
    </h2>

    <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
      Beauty, fragrance, and skincare for every member of
      your family. Find the products that suit you best.
    </p>

  </div>

  {/* Category cards */}
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

    {categories.map((category) => (
      <article
        key={category.id}
        className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
      >

        {/* Image */}
        <div className="relative h-72 overflow-hidden sm:h-80">

          <img
            src={category.image}
            alt={category.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Text on image */}
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">

            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-yellow-300">
              {category.subtitle}
            </p>

            <h3 className="text-3xl font-bold">
              {category.title}
            </h3>

          </div>

        </div>

        {/* Card description and button */}
        <div className="p-6">

          <p className="min-h-[72px] text-sm leading-6 text-gray-600">
            {category.description}
          </p>

          <Link
            to={category.path}
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-black px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-yellow-500 hover:text-black"
          >
            Explore Collection

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>

        </div>

      </article>
    ))}

  </div>

</section>

);
};

export default CategorySection;