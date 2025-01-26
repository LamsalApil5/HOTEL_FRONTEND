import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import logo from "../image/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current location from react-router
  const menuRef = useRef<HTMLUListElement>(null);

  // Function to determine if the link is active
  const isActive = (path: string) => location.pathname === path;

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on component unmount or when menu is closed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="top-0 z-50 bg-none mb-4 pt-4">
      <div className="container mx-auto px-8 lg:px-36">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-end space-x-4 text-3xl font-extrabold text-gray-800 font-greatvibes"
          >
            <img
              src={logo}
              alt="Paradise GuestHouse Logo"
              className="h-16"
              onClick={() => setIsMenuOpen(false)}
            />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-gray-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <ul
            ref={menuRef} // Attach ref to the menu container
            className={`lg:flex items-center lg:space-x-6 ${
              isMenuOpen ? "block" : "hidden"
            } absolute lg:static top-24 right-0 lg:top-auto lg:right-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-10`}
          >
            <li className="py-2 lg:py-0">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant={isActive("/") ? "default" : "ghost"}
                  className={`${
                    isActive("/")
                      ? "bg-yellow-50 text-black"
                      : "hover:bg-yellow-50"
                  } rounded-lg`}
                >
                  Home
                </Button>
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link to="/locals" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant={isActive("/locals") ? "default" : "ghost"}
                  className={`${
                    isActive("/locals")
                      ? "bg-yellow-50 text-black"
                      : "hover:bg-yellow-50"
                  } rounded-lg`}
                >
                  Our Local
                </Button>
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link to="/rooms" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant={isActive("/rooms") ? "default" : "ghost"}
                  className={`${
                    isActive("/rooms")
                      ? "bg-yellow-50 text-black"
                      : "hover:bg-yellow-50"
                  } rounded-lg`}
                >
                  Accommodation
                </Button>
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant={isActive("/gallery") ? "default" : "ghost"}
                  className={`${
                    isActive("/gallery")
                      ? "bg-yellow-50 text-black"
                      : "hover:bg-yellow-50"
                  } rounded-lg`}
                >
                  Gallery
                </Button>
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link to="/teams" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant={isActive("/teams") ? "default" : "ghost"}
                  className={`${
                    isActive("/teams")
                      ? "bg-yellow-50 text-black"
                      : "hover:bg-yellow-50"
                  } rounded-lg`}
                >
                  Our Teams
                </Button>
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant={isActive("/contact") ? "default" : "ghost"}
                  className={`${
                    isActive("/contact")
                      ? "bg-yellow-50 text-black"
                      : "hover:bg-yellow-50"
                  } rounded-lg`}
                >
                  Contact
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
