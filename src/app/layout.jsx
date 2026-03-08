import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navber from "@/components/layouts/Navber";
import Footer from "@/components/layouts/Footer";
import localFont from "next/font/local";
import NextAuthProvider from "@/provider/NextAuthProvider";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const fontBangla = localFont({
  src: "./../fonts/mayaboti-normal.ttf",
});

export const metadata = {
  metadataBase: new URL("https://hero-kidzz-woad.vercel.app"),

  title: {
    default: "Hero Kidzz | Fun & Educational Toys for Kids",
    template: "%s | Hero Kiddz",
  },

  description:
    "Hero Kidzz is your trusted toy store for fun, creative, and educational toys. Discover amazing toys that inspire imagination and learning for kids of all ages.",

  keywords: [
    "kids toys",
    "educational toys",
    "toy store",
    "kids learning toys",
    "hero kidzz toys",
    "best toys for kids",
  ],

  authors: [{ name: "Hero Kidzz Team" }],
  creator: "Hero Kidzz",
  publisher: "Hero Kidzz",

  icons: {
    icon: "https://i.ibb.co.com/qLCbMDyX/image.png",
    shortcut: "https://i.ibb.co.com/qLCbMDyX/image.png",
    apple: "https://i.ibb.co.com/qLCbMDyX/image.png",
  },

  openGraph: {
    title: "Hero Kidzz | Fun & Educational Toys for Kids",
    description:
      "Explore a world of fun and creativity with Hero Kiddz. Shop amazing toys designed to inspire learning and imagination.",
    url: "https://hero-kidzz-woad.vercel.app",
    siteName: "Hero Kidzz",
    images: [
      {
        url: "https://i.ibb.co.com/zV59Fk5z/image.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidzz Toy Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidzz | Fun & Educational Toys",
    description:
      "Discover fun and educational toys for kids at Hero Kidzz. Inspire creativity and learning.",
    images: ["https://i.ibb.co.com/zV59Fk5z/image.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>
          <header className="py-2 mx-auto w-11/12">
            <Navber />
          </header>
          <main className="py-2 mx-auto w-11/12 min-h-[calc(100vh-301px)]">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
