import "./globals.css";
import { Header, Footer } from "./components/Chrome";
export const metadata = {
  title: {
    default:
      "Layerstead Technologies | Hampton Roads Network & Technology Services",
    template: "%s | Layerstead Technologies",
  },
  description:
    "Local Wi-Fi, cabling, network setup, and practical technology support for homes and small businesses in Hampton Roads and Virginia Beach.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
