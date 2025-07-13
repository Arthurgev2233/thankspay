import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Confetti from '@/components/confetti';

export default function ThankYouPage() {
  return (
    <>
      <Confetti />
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background text-foreground">
        <main className="flex flex-1 flex-col items-center justify-center p-6 text-center">
          <div className="flex animate-in fade-in-50 slide-in-from-bottom-16 duration-700 flex-col items-center space-y-8">
            <Image
              src="https://cdn.imgchest.com/files/7lxcpdr3jo7.png"
              alt="Privacy Logo"
              width={180}
              height={45}
              priority
              className="h-auto"
            />

            <div className="space-y-3">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Obrigado pela sua compra!
              </h1>
              <p className="mx-auto max-w-md text-lg text-muted-foreground">
                Seu acesso foi liberado com sucesso! Aproveite o conteúdo exclusivo.
              </p>
            </div>

            <Button asChild size="lg" className="px-10 py-6 text-lg font-semibold shadow-primary/20 shadow-lg transition-transform duration-300 hover:scale-105 bg-primary text-primary-foreground hover:bg-accent">
              <Link href="https://t.me/+knJNKX6Ir7M4Zjk5" target="_blank" rel="noopener noreferrer">
                👉 Entrar no grupo agora
              </Link>
            </Button>
          </div>
        </main>
        <footer className="py-4 text-sm text-muted-foreground">
          Privacy © 2025
        </footer>
      </div>
    </>
  );
}
