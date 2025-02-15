// app/layout.js
import { Roboto } from "next/font/google";
import "./globals.css"; // Import Tailwind CSS
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`antialiased text-sm ${roboto}`}>
      <head>
        <title>Talanta Mines Management System</title>
      </head>
      <body>
        <ClerkProvider>
          <main className="">{children}</main>
        </ClerkProvider>
      </body>
    </html>
  );
}
