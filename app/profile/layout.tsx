import Link from "next/link";

function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Sidebar Navigation */}
        <aside className="w-64 flex-shrink-0">
          <nav className="bg-white rounded-lg shadow-md p-6 sticky top-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Profile Menu
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/profile"
                  className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200 font-medium"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/profile/notifications"
                  className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200 font-medium"
                >
                  Notifications
                </Link>
              </li>
              <li>
                <Link
                  href="/profile/settings"
                  className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200 font-medium"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          <div className="bg-white rounded-lg shadow-md p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default ProfileLayout;
