import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Muhammad Ali Awan | GIS - CAD - RS Specialist & GIS - CAD - RS Specialist",
  description:
    "Portfolio of Muhammad Ali Awan — GIS, CAD, Remote Sensing Specialist and Spatial Data Scientist.",
  keywords: [
    "Muhammad Ali Awan",
    "GIS - CAD - RS Specialist",
    "Spatial Data Scientist",
    "Remote Sensing",
    "GeoAI",
    "Google Earth Engine",
    "Hydrological Modeling",
    "Geology",
    "Pakistan",
  ],
  authors: [{ name: "Muhammad Ali Awan" }],
  openGraph: {
    title: "Muhammad Ali Awan | GIS - CAD - RS Specialist & GIS - CAD - RS Specialist",
    description:
      "Transforming the world through geospatial data science, GeoAI, remote sensing, and modern Web GIS.",
    type: "website",
    locale: "en_US",
    images: ["/Profile Picture.PNG"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ali Awan | GIS - CAD - RS Specialist & GIS - CAD - RS Specialist",
    description:
      "GIS - CAD - RS Specialist and Spatial Data Scientist.",
    images: ["/Profile_Picture.PNG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
