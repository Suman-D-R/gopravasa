import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import FloatingIcons from './components/FloatingIcons';
import Header from './components/Header';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GoPravasa - Your Gateway to Amazing Travel Experiences',
  description:
    'Go Pravasa, a brand of Puspaka Vimana Travels and Tours Private Limited, specializes in International and Domestic Group Tours, Customised tours and adventure Treks. Book your dream vacation today!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Header />
        {children}
        <Footer />
        <FloatingIcons />
      </body>
    </html>
  );
}
