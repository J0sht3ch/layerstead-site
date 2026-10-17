import "./globals.css";
import { site, services } from "./site-config";
import { Header, Footer } from "./components/Chrome";
export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Layerstead Technologies LLC | Virginia Beach Networking & IT Support",
    template: "%s | Layerstead Technologies LLC",
  },
  description: "Veteran-owned network cabling, Wi-Fi installation, endpoint security, and Windows support in Virginia Beach, Norfolk, Chesapeake, and Hampton Roads.",
  openGraph: {
    type: "website", siteName: site.legalName, locale: "en_US",
    title: "Layerstead Technologies LLC | Networks, Security & IT Support",
    description: "Structured cabling, Wi-Fi, endpoint protection, Windows support, and business network connectivity throughout Hampton Roads.",
    images: [{ url: "/layerstead-logo.png", alt: "Layerstead Technologies LLC" }],
  },
};
const business = {
  "@context": "https://schema.org", "@type": "LocalBusiness",
  "@id": site.url + "/#business", name: site.legalName, url: site.url,
  logo: site.url + "/layerstead-logo.png", telephone: site.phoneHref, email: site.email,
  description: "Veteran-owned networking, structured cabling, endpoint protection, and Windows workstation support for homes and small businesses.",
  areaServed: ["Virginia Beach", "Norfolk", "Chesapeake", "Hampton Roads"].map(name => ({ "@type": "Place", name: name + ", Virginia" })),
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Technology Services", itemListElement: services.map(s => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.body, url: site.url + "/#" + s.id } })) },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business).replace(/</g, "\\u003c") }} />
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
