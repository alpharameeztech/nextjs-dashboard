import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | NextPulse Dashboard',
    default: 'NextPulse Dashboard',
  },
  description: 'Dashboard, built with App Router.',
  metadataBase: new URL('https://nextjs-dashboard-ww9r-90420h6yb-krameez56-gmailcoms-projects.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
