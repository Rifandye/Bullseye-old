import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-700 to-gray-900 text-white text-center p-8 mt-8">
      <div className="container mx-auto">
        <p className="font-semibold">
          &copy; {new Date().getFullYear()} Bullseye. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-300">
            Support
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.instagram.com/rifandye/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/rifandye"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
