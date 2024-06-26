import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

<div className="bg-sky-900">
  <div className=" flex items-center py-2 overflow-y-auto whitespace-nowrap px-4 widest md:px-24 lg:px-8">
    <a href="#" className="text-gray-600 dark:text-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    </a>

    <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>

    <a
      href="#"
      className="text-gray-600 dark:text-gray-200 hover:underline underline-offset-4"
    >
      Account
    </a>
  </div>
</div>;
