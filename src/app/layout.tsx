import type {Metadata} from 'next';
import './globals.css';
import './confetti.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

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
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "686dced54950fbe66cae2432";
            var usp = document.createElement("script");
            usp.async = true;
            usp.defer = true;
            usp.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
            document.head.appendChild(usp);
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
