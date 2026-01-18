import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { services } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/animate-on-scroll';

const Services = () => {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">Nossos Serviços</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Oferecemos uma gama completa de soluções em construção civil para atender às suas necessidades.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.title} delay={index * 100}>
              <Card className="h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                    <service.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="font-headline text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
