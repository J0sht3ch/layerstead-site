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
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-21WDZSX7DF"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-21WDZSX7DF');
            `,
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
