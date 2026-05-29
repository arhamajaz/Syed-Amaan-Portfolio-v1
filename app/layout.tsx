import type { Metadata } from 'next';
import { Noto_Serif, Inter } from 'next/font/google';
import './globals.css';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syedamaan.dev"),
  title: "Syed Amaan | Strategic Data Analyst",
  description: "Portfolio of Syed Amaan, a BBA graduate specializing in Data Analytics, Business Intelligence, and transforming raw data into strategic assets using Power BI and Advanced Excel.",
  keywords: [
    "Syed Amaan",
    "Data Analyst",
    "Business Intelligence",
    "Power BI Dashboarding",
    "Advanced Excel",
    "Strategic Management",
    "Patna",
    "BBA Graduate"
  ],
  authors: [{ name: "Syed Amaan" }],
  creator: "Syed Amaan",
  openGraph: {
    title: "Syed Amaan | Strategic Data Analyst",
    description: "Bridging the gap between operational efficiency and data-driven decision-making.",
    url: "https://syedamaan.dev", // Note: Update this to the actual live domain post-deployment
    siteName: "Syed Amaan Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Note: Ensure a 1200x630 image is placed in the public/ folder
        width: 1200,
        height: 630,
        alt: "Syed Amaan - Data Analyst Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Amaan | Strategic Data Analyst",
    description: "Transforming raw data into strategic assets.",
    images: ["/og-image.jpg"],
  },
};

import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script src="https://app.secureprivacy.ai/script/6a19ab3e94213aae6765a1aa.js" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-screen bg-[#131313] text-[#e5e2e1] overflow-x-hidden antialiased" suppressHydrationWarning>
        <ScrollProgress />
        {children}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
