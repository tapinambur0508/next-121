interface NotesLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

function NotesLayout({ sidebar, children }: NotesLayoutProps) {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex gap-6">
        {/* Sidebar */}
        <aside className="w-80 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
            {sidebar}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="bg-white rounded-lg shadow-md p-6">{children}</div>
        </main>
      </div>
    </section>
  );
}

export default NotesLayout;
