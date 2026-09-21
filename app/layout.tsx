import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Élan Scents | The Home of Gulf Fragrances',
  description: 'Premium marketplace for luxury Gulf fragrances.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
