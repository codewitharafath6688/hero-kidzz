import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="mt-5 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-5">
          <aside className="flex flex-col items-center space-y-4 sm:items-start lg:col-span-2">
            <Logo />

            <p className="max-w-sm text-sm leading-6">
              Fun, colorful, and safe toys for kids of all ages. Bringing joy,
              learning, and creativity to every playtime.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <MdEmail className="text-lg" />
                <span className="break-all">support@herokidzz.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <MdPhone className="text-lg" />
                <span>+880 1234-567890</span>
              </div>
            </div>
          </aside>

          <nav className="flex flex-col items-center sm:items-start">
            <h6 className="footer-title text-white">Shop</h6>
            <Link href="/shop" className="link link-hover">
              All Toys
            </Link>
            <Link href="/categories" className="link link-hover">
              Categories
            </Link>
            <Link href="/offers" className="link link-hover">
              Special Offers
            </Link>
            <Link href="/new-arrivals" className="link link-hover">
              New Arrivals
            </Link>
          </nav>

          <nav className="flex flex-col items-center sm:items-start">
            <h6 className="footer-title text-white">Company</h6>
            <Link href="/about" className="link link-hover">
              About Us
            </Link>
            <Link href="/contact" className="link link-hover">
              Contact
            </Link>
            <Link href="/blogs" className="link link-hover">
              Blog
            </Link>
            <Link href="/faq" className="link link-hover">
              FAQ
            </Link>
          </nav>

          <nav className="flex flex-col items-center sm:items-start">
            <h6 className="footer-title text-white">Legal</h6>
            <Link href="/terms" className="link link-hover">
              Terms of Use
            </Link>
            <Link href="/privacy" className="link link-hover">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="link link-hover">
              Cookie Policy
            </Link>
          </nav>

          <nav className="flex flex-col items-center sm:items-start">
            <h6 className="footer-title text-white">Follow Us</h6>
            <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="btn btn-circle btn-sm border-none bg-white text-pink-500 hover:bg-yellow-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="btn btn-circle btn-sm border-none bg-white text-pink-500 hover:bg-yellow-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="btn btn-circle btn-sm border-none bg-white text-pink-500 hover:bg-yellow-200"
              >
                <FaYoutube />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="btn btn-circle btn-sm border-none bg-white text-pink-500 hover:bg-yellow-200"
              >
                <FaTwitter />
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-4 text-center text-sm sm:px-8 md:flex-row md:text-left lg:px-10">
          <p>© {new Date().getFullYear()} Hero Kidzz. All rights reserved.</p>
          <p>Made with love for little learners and happy playtime.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;