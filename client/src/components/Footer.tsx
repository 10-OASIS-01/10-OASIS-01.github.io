export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toISOString().split('T')[0];

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 font-light">
          © {currentYear} Yibin (Leon) Liu. Site last updated {lastUpdated}
        </p>
      </div>
    </footer>
  );
}
