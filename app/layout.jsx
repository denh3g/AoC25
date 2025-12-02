import "./globals.css";

export const metadata = {
  title: "AoC 2025",
  description: "DH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
