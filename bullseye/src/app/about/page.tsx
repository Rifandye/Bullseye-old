import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen pt-10 pb-20">
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-center text-4xl font-semibold text-gray-900 mb-10">
            About Bullseye
          </h1>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <img
                src="/banner1.jpg"
                alt="About Bullseye"
                className="rounded-lg shadow-md transform hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
            <div className="md:w-1/2 text-gray-800 space-y-4">
              <p className="text-lg">
                Bullseye is an innovative platform dedicated to the ethical and
                responsible sale of firearms. Our mission is to provide a secure
                and trusted environment for firearm enthusiasts to purchase
                their gear. Whether you're a seasoned marksman or a responsible
                citizen seeking to exercise your second amendment rights,
                Bullseye is your go-to destination.
              </p>
              <p className="text-lg">
                As a platform, we are deeply committed to promoting safety,
                education, and responsible gun ownership. Each product in our
                catalog is presented with detailed information to help our
                customers make informed decisions.
              </p>
              <p className="text-lg">
                The creation of Bullseye also serves as a practical exercise in
                mastering Next.js for its creator. This project represents a
                journey into the world of modern web development, showcasing the
                capabilities of React, server-side rendering, and API management
                within the Next.js framework.
              </p>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-600 text-sm">
            <p>
              Disclaimer: The creator of this site does not possess ownership of
              every asset, such as images, used on this website. Assets used are
              for educational and illustrative purposes only.
            </p>
          </div>
          <div className="mt-8 text-center">
            <h2 className="text-xl font-medium text-gray-900">Reach Me Out</h2>
            <p className="mt-2 text-md text-gray-800">
              For business inquiries or professional matters, feel free to reach
              out.
            </p>
            <div className="flex justify-center space-x-3 mt-4">
              <a
                href="https://www.instagram.com/rifandye/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700"
              >
                <FaInstagram size="1.5em" />
              </a>
              <a
                href="https://www.linkedin.com/in/rifandye"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700"
              >
                <FaLinkedinIn size="1.5em" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
