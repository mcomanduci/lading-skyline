import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skilline.com"),
  title: {
    default: "Skilline - Interactive Online Learning Platform",
    template: "%s | Skilline",
  },
  description:
    "Skilline is an innovative online learning platform that makes studying more interactive and engaging. Join thousands of students learning in a more effective way.",
  keywords: [
    "online learning",
    "education",
    "interactive learning",
    "skill development",
    "online courses",
    "e-learning",
    "educational platform",
  ],
  authors: [{ name: "Skilline Team" }],
  creator: "Skilline",
  publisher: "Skilline",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "education",
  classification: "Educational Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skilline.com",
    title: "Skilline - Interactive Online Learning Platform",
    description:
      "Skilline is an innovative online learning platform that makes studying more interactive and engaging. Join thousands of students learning in a more effective way.",
    siteName: "Skilline",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Skilline - Interactive Online Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skilline - Interactive Online Learning Platform",
    description:
      "Skilline is an innovative online learning platform that makes studying more interactive and engaging.",
    images: ["/og-image.jpg"],
    creator: "@skilline",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FEF7F0" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${poppins.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellow text-darken px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
