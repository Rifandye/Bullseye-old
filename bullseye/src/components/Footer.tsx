export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-4 mt-8">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Bullseye. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-400">
            Support
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          {/* Add SVG icons for social media here */}
          <a href="#" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-400">
            Twitter
          </a>
          <a href="#" className="hover:text-gray-400">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
