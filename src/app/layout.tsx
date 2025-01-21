import type { Metadata } from "next";
import { Poppins as PoppinsFont } from "next/font/google";
import "./globals.css";

const Poppins = PoppinsFont({
  subsets: ["latin"], weight:["400","500","600","700"]
});



export const metadata: Metadata = {
  title: "Portfolio-Mumair",
  description: "UI & UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${Poppins.className} antialiased dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
