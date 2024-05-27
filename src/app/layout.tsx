import type { Metadata } from "next";
import { Jacquard_24 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/themeprovider";

const inter = Jacquard_24({
  weight: ["400"],
  subsets: ['latin'],
  variable: '--font-inter'
});
export const metadata: Metadata = {
  title: "CodeXplore"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head />
    <body className={inter.className + ' h-screen overflow-hidden'}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </body>
  </html>
  );
}
