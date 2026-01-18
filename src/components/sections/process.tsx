import { workProcess } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/animate-on-scroll';

const Process = () => {
  return (
    <section id="process" className="bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">Nosso Processo de Trabalho</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Da concepção à entrega, seguimos um processo claro e eficiente para garantir o sucesso do seu projeto.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>

          {workProcess.map((step, index) => (
            <AnimateOnScroll key={step.step} delay={index * 150} className="mb-12 last:mb-0">
              <div className="relative flex items-center">
                <div className={`w-full pl-14 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:order-2 md:pl-8' : 'md:order-1 md:text-right md:pr-8'}`}>
                  <div>
                    <div className={`flex items-center gap-4 mb-2 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                      <step.icon className="h-8 w-8 text-accent shrink-0" />
                      <h3 className="font-headline text-2xl font-bold text-primary">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold font-headline text-xl ring-8 ring-muted">
                    {step.step}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
