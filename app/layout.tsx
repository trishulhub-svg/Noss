import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Noss — UK Recruitment & Compliance Agency',
  description: 'Noss partners with leading UK industries to supply rigorously vetted, fully compliant employment solutions for permanent and contract talent.',
  keywords: ['UK recruitment agency', 'compliance vetting', 'job board', 'Noss recruitment', 'right to work checks', 'DBS vetted talent'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
