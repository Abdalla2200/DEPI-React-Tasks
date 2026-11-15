import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className=" absolute w-full z-20 top-0 inset-s-0 ">
      <div className="max-w-4xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link to="/">
          <img src="img/mad.png" alt="Logo Image" class="w-34" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="white"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <Link
                class="mr-5 sm:mr-10 sm:text-lg text-white font-medium"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                class="mr-5 sm:mr-10 sm:text-lg text-white font-medium"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                class="mr-5 sm:mr-10 sm:text-lg text-white font-medium"
                to="/affairs"
              >
                Affairs
              </Link>
            </li>
            <li>
              <Link
                class="bg-[#ed7c6a] py-2 px-3 rounded-sm text-white font-medium"
                to="/"
              >
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
