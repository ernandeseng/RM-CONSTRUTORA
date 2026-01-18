import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Logo from '@/components/logo';
import AnimateOnScroll from '../ui/animate-on-scroll';

const Hero = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-center text-white pt-20">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/50" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
            <AnimateOnScroll>
              <div className="mb-8 transform transition-transform duration-500 hover:scale-110">
                <Logo className="h-auto w-64 md:w-80" />
              </div>
            </AnimateOnScroll>
            <h1 className="font-headline font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl !leading-tight tracking-tight text-shadow">
              Construindo Sonhos, Edificando Futuros
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
              Excelência em construção civil com expertise comprovada.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
                <Link href="#projects">Ver Projetos</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent bg-transparent backdrop-blur-sm hover:bg-accent hover:text-accent-foreground">
                <Link href="#contact">Falar com Especialista</Link>
              </Button>
            </div>
        </div>
      </div>
       <div 
        className="absolute bottom-0 left-0 w-full h-24 bg-background" 
        style={{ clipPath: 'polygon(100% 100%, 0% 100%, 0 0)' }}
      />
    </section>
  );
};

export default Hero;
