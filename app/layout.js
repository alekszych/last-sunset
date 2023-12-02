import { AuthProvider } from "./Providers";
import "./globals.css";
import Header from "@/components/header/header";

export const metadata = {
  title: "Last Sunset",
  description: "Conquer Mars",
};

export default function RootLayout({ children }) {
    return (
    <html lang="en">
        <head>
            {/*Dosis 400*/}
            {/*Lato 600*/}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@600&family=Lato&display=swap" rel="stylesheet" />
        </head>
        <body>
            <Header />
            <AuthProvider>{children}</AuthProvider>
        </body>
    </html>
    );
}
