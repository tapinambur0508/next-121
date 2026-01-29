"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/stores/authStore";

import { logout } from "@/lib/api";

function Header() {
  const router = useRouter();

  const { isAuthenticated, user, clearIsAuthenticated } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    clearIsAuthenticated();
    router.push("/sign-in");
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-bold text-white hover:text-gray-100 transition-colors duration-200 tracking-tight"
          >
            NoteHub
          </Link>

          <nav>
            <ul className="flex items-center space-x-1">
              <li>
                <Link
                  href="/about"
                  className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all duration-200 font-medium"
                >
                  About
                </Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <Link
                      href="/notes/filter/all"
                      className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all duration-200 font-medium"
                    >
                      Notes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/profile"
                      className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all duration-200 font-medium"
                    >
                      {user?.email}
                    </Link>
                  </li>
                  <li>
                    <button
                      className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all duration-200 font-medium"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href="/sign-in"
                      className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all duration-200 font-medium"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sign-up"
                      className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all duration-200 font-medium"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
