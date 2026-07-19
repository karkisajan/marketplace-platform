import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

const exploreItems = ["Add Listing", "View Map", "Listings"];
const companyItems = ["About us", "Contact us", "Support"];
const legalItems = [
  "Privacy Policy",
  "Terms and Conditions",
  "Trust and Safety",
];
const categories = [
  "Electronics",
  "Fashion",
  "Kids",
  "Services",
  "Home & Living",
  "Sports & Outdoors",
  "Vehicle & Accessories",
  "Books & Stationery",
  "Pet & Pet Supplies",
  "Groceries",
  "Real Estate",
  "Computers, Laptops & Accessories",
  "Health, Beauty & Wellness",
  "Mobile phones, Tablets & Accessories",
  "Hobbies,Video Games and Musical Instrument",
  "Religious",
  "Industrial & Heavy Machinery",
  "Others",
];

export default function StoreFooter() {
  return (
    <footer className="max-w-7xl mx-auto border-t border-neutral-200 bg-gray-100">
      <div className="mx-auto max-w-[1700px] px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.9fr_0.9fr_1fr]">
          <section className="max-w-md">
            <div className="flex items-baseline gap-0">
              <span className="text-4xl font-bold tracking-tight text-gray-900">
                Market
              </span>
              <span className="text-4xl font-light tracking-tight italic text-gray-900">
                place
              </span>
            </div>
            <p className="mt-4 text-sm leading-5 text-neutral-500">
              Marketplace Pvt. Ltd. is a platform for users to post and discover
              local ads.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-neutral-900">Explore</h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-500">
              {exploreItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-neutral-900">Company</h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-500">
              {companyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-neutral-900">Legal</h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-500">
              {legalItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
        <hr className="my-12 border-neutral-200" />
        <section>
          <h2 className="text-2xl font-semibold text-neutral-900">
            Categories
          </h2>
          <div className="mt-8 grid gap-x-10 gap-y-6 text-sm text-neutral-500 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {categories.map((category) => (
              <div key={category} className="leading-6">
                {category}
              </div>
            ))}
          </div>
        </section>
        <hr className="my-12 border-neutral-200" />
        <div className="flex items-center gap-4 text-neutral-400">
          <FaFacebook className="h-5 w-5" />
          <FaInstagram className="h-5 w-5" />
          <FaTiktok className="h-5 w-5" />
        </div>
      </div>
    </footer>
  );
}
