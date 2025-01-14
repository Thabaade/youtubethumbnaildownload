import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-red-600 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">
            <a className="hover:underline">Youtube Thumbnail Download</a>
          </Link>
        </h1>
        <button
          className="md:hidden text-red-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        <nav
          className={`md:flex md:space-x-6 absolute md:relative bg-white top-16 md:top-0 left-0 w-full md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 px-4 md:px-0">
            <li>
              <Link href="/">
                <a className="block py-2 md:py-0 hover:underline">Startseite</a>
              </Link>
            </li>
            <li>
              <Link href="/uber-uns">
                <a className="block py-2 md:py-0 hover:underline">Über uns</a>
              </Link>
            </li>
            <li>
              <Link href="/datenschutz">
                <a className="block py-2 md:py-0 hover:underline">Datenschutz</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
