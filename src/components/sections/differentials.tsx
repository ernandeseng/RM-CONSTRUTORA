import { differentials } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/animate-on-scroll';
import AnimatedCounter from '@/components/ui/animated-counter';

const Differentials = () => {
  return (
    <section id="differentials" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">Nossos Diferenciais</h2>
            <p className="mt-4 text-lg text-secondary-foreground">
              Compromisso com a qualidade, prazo e satisfação do cliente.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, index) => (
            <AnimateOnScroll key={item.title} delay={index * 100}>
              <div className="text-center">
                <item.icon className="mx-auto h-12 w-12 text-primary" />
                <AnimatedCounter
                  value={item.value}
                  className="mt-4 block font-headline text-5xl font-extrabold text-primary"
                />
                <h3 className="mt-2 font-headline text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-1 text-sm text-secondary-foreground">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
