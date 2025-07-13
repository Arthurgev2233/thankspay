import type {Metadata} from 'next';
import './globals.css';
import './confetti.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Privacy Thanks',
  description: 'Obrigado pela sua compra!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400&family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
