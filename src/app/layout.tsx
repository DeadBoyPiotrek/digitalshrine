import './globals.css';
import { Ubuntu } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata = {
  title: 'digital shrine',
  description: 'Generated by create more lofi-phonk beats',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
