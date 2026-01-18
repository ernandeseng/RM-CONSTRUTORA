import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from '@/components/logo';
import { navLinks, contactInfo } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-primary-foreground/70">
              Construindo sonhos, edificando futuros com solidez e confiança.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              {contactInfo.phones.map(phone => <p key={phone}>{phone}</p>)}
              <p>{contactInfo.email}</p>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} aria-label={social.name} className="text-primary-foreground/70 transition-colors hover:text-accent">
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/10" />

        <div className="text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} R&M Construtora Ltda. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
