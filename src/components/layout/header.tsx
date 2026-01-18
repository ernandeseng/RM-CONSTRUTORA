'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks, contactInfo } from '@/lib/data';

const Header = () => {
  const whatsappLink = `https://wa.me/55${contactInfo.phones[0].replace(/\D/g, '')}`;

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-6 text-sm font-medium', className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        'absolute top-0 left-0 right-0 z-50 bg-transparent py-4'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-end px-4 md:px-6">
        <div className="hidden lg:flex items-center gap-8">
          <NavLinks />
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">Solicitar Orçamento</Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-primary-foreground border-l-primary-foreground/20">
              <div className="flex h-full flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                   <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 ml-auto">
                        <X className="h-6 w-6" />
                         <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetClose>
                </div>
                <nav className="flex flex-col gap-6 text-lg">
                  {navLinks.map((link) => (
                     <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                        >
                          {link.label}
                        </Link>
                     </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto space-y-6">
                    <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                       <SheetClose asChild>
                         <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">Solicitar Orçamento</Link>
                       </SheetClose>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
