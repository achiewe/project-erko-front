import type { Metadata } from "next";
import { ReduxProvider } from "./redux/provider";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "erko",
  description: "",
};

const myfont = localFont({
  src: "../../public/fonts/retroFont.otf",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myfont.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
