import { AuthProvider } from "./Providers";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Last Sunset",
  description: "Conquer Mars",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
            <Header />
            <AuthProvider>{children}</AuthProvider>
            <Footer />
        </body>
    </html>
  );
}
