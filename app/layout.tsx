import type { Metadata } from "next";
import "./globals.css";
import ThemeManager from "./features/themeManager";
import { fontVariables } from "./styles/fonts/fontsRegistry";

export const metadata: Metadata = {
  title: "Progressium",
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeManager>{children}</ThemeManager>
      </body>
    </html>
  );
}
