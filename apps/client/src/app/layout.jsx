import "./globals.css";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@app/client/lib/utils";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen h-screen font-sans antialiased ",
          fontSans.variable
        )}
      >
         <NavBar />


        {children}
       <Footer />
      </body>
    </html>
  );
}
