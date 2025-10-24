export default function Footer() {
  return (
    <footer
      className="mt-32"
      style={{ backgroundColor: "rgba(37, 38, 65, 1)" }}
    >
      <div className="max-w-lg mx-auto">
        <div className="flex py-12 justify-center text-white items-center px-20 sm:px-36">
          <div className="relative">
            <h1 className="font-bold text-xl pr-5 relative z-50">Skilline</h1>
            <svg
              className="w-11 h-11 absolute -top-2 -left-3 z-40"
              viewBox="0 0 79 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.9645 2.94975C37.9171 0.997129 41.0829 0.997127 43.0355 2.94975L76.0502 35.9645C78.0029 37.9171 78.0029 41.0829 76.0503 43.0355L43.0355 76.0502C41.0829 78.0029 37.9171 78.0029 35.9645 76.0503L2.94975 43.0355C0.997129 41.0829 0.997127 37.9171 2.94975 35.9645L35.9645 2.94975Z"
                stroke="#26C1F2"
                strokeWidth="2"
              />
            </svg>
          </div>
          <span className="border-l border-gray-500 text-sm pl-5 py-2 font-semibold">
            Virtual Class for Zoom
          </span>
        </div>
        <div className="text-center pb-16 pt-5">
          <label
            htmlFor="newsletter-email"
            className="text-gray-300 font-semibold block mb-3"
          >
            Subscribe to get our Newsletter
          </label>
          <form
            className="px-5 sm:px-0 flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 justify-center mt-3"
            aria-label="Newsletter subscription"
          >
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your Email"
              className="rounded-full py-2 pl-5 bg-transparent border border-gray-400 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              aria-describedby="email-help"
            />
            <button
              type="submit"
              className="text-white w-40 sm:w-auto mx-auto sm:mx-0 font-semibold px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              style={{
                background:
                  "linear-gradient(105.5deg, #545ae7 19.57%, #393fcf 78.85%)",
              }}
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
          <p id="email-help" className="sr-only">
            Enter your email address to receive our newsletter with updates and
            educational content.
          </p>
        </div>
        <nav
          className="flex items-center text-gray-400 text-sm justify-center"
          aria-label="Footer navigation"
        >
          <a
            href="/careers"
            className="pr-3 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
          >
            Careers
          </a>
          <a
            href="/privacy"
            className="border-l border-gray-400 px-3 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="border-l border-gray-400 pl-3 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
          >
            Terms & Conditions
          </a>
        </nav>
        <div className="text-center text-white">
          <p className="my-3 text-gray-400 text-sm">
            &copy; 2021 Class Technologies Inc.
          </p>
          <div className="py-3 tracking-wide">
            <p>
              Code By <span className="font-semibold">mhaecal</span>
            </p>
            <p>
              UI/UX By <span className="font-semibold">Irvan Moses</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
