import './globals.css';

export const metadata = {
  title: 'Layerstead Technologies | Hampton Roads Network & Technology Services',
  description: 'Friendly local networking and technology help for homes and small businesses across Hampton Roads.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
