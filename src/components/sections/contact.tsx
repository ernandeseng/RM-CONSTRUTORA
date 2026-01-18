'use client';

import { Button } from '@/components/ui/button';
import { contactInfo } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/animate-on-scroll';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`
    },
    {
      icon: Phone,
      label: 'Telefones',
      value: contactInfo.phones.join(' / '),
    },
  ];

  const mainPhone = contactInfo.phones[0].replace(/\D/g, '');
  const whatsappLink = `https://wa.me/55${mainPhone}`;

  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-accent md:text-4xl">Entre em Contato</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Tem uma ideia? Vamos conversar sobre como podemos transformá-la em realidade.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="flex justify-center">
          <AnimateOnScroll delay={100}>
            <div className="space-y-8 max-w-md w-full text-center">
              {contactItems.map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-foreground/10 text-accent">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-left">{item.label}</h3>
                    {item.href ? (
                      <Link href={item.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-primary-foreground/80 text-left">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
               <div className="pt-4">
                 <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full max-w-xs mx-auto">
                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                       <MessageCircle className="mr-2 h-5 w-5" /> Iniciar conversa no WhatsApp
                    </Link>
                 </Button>
               </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
