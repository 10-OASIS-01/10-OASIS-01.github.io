import { siteMetadata } from "@/config/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = siteMetadata.lastUpdated;

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 font-light">
          © {currentYear} Yibin (Leon) Liu. Site last updated {lastUpdated}
        </p>
        <p className="text-center text-sm text-gray-500 font-light mt-2">
          Feel free to fork this GitHub and develop your website!{' '}
          <a 
            href="https://github.com/10-OASIS-01/10-OASIS-01.github.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            @10-OASIS-01/10-OASIS-01.github.io
          </a>
        </p>
      </div>
    </footer>
  );
}