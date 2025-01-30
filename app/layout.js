
import "./globals.css";

export const metadata = {
  title: "Globed 한국서버",
  description: "Globed 한국서버",
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
