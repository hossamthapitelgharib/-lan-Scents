import type { Metadata } from 'next';
import './globals.css';
import './cart-flow.css';
import './admin.css';
import { CartProvider } from '../components/CartProvider';

export const metadata: Metadata = {
  title: 'Élan Scents | The Home of Gulf Fragrances',
  description: 'A refined marketplace for Gulf fragrances from participating stores.',
  keywords: ['Gulf fragrances', 'perfumes', 'Élan Scents', 'marketplace'],
  openGraph: {
    title: 'Élan Scents | The Home of Gulf Fragrances',
    description: 'Discover refined Gulf fragrances from participating stores.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
