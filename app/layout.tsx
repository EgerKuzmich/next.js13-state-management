import { Inter } from "next/font/google";
import MainNavigation from "@/src/ui/layout/Navigation";
import { Suspense } from "react";
import RadialLoader from "./loading";
import Image from "next/image";

import logo from "@/src/assets/us-logo.svg";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "New state managers",
  description: "This is a demo of 2 popular state managers in React ecosystem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div className="flex items-center px-6 py-4 justify-between max-w-screen-lg ms-auto me-auto">
            <Image src={logo} width={60} height={60} alt="UserStory logo" />
            <MainNavigation />
          </div>
        </header>
        <main>
          <Suspense fallback={<RadialLoader />}>
            <div className="flex flex-column grow max-w-screen-lg ms-auto me-auto">
              {children}
            </div>
          </Suspense>
        </main>
      </body>
    </html>
  );
}
