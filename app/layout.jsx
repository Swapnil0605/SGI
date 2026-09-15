import './globals.css';
import Script from 'next/script';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import { ModalProvider } from '../context/ModalContext';

export const metadata = {
  title: 'Surannavar Group of Institutions | Belagavi | Affiliated to RGUHS',
  description:
    'Surannavar Group of Institutions in Belagavi: Premier healthcare education across Nursing, Physiotherapy, and Allied Health Sciences, backed by Surannavar Hospital.',
  icons: {
    icon: '/required pic/main_logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,600&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />
      </head>
      <body>
        <Script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          strategy="beforeInteractive"
        />
        <ModalProvider>
          <div className="app-container">
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}
