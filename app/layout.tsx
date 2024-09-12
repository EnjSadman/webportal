import type { Metadata } from 'next';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Montserrat } from 'next/font/google';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Enj',
  description: 'Pet project and personal website by EnjSadman',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Header />
        <div className="container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
