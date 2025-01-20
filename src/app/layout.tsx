import type { Metadata } from "next";
import { ReduxProvider } from "./redux/provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "erko",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "MyFont" }}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
