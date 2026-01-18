'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimateOnScroll from '@/components/ui/animate-on-scroll';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">O Que Nossos Clientes Dizem</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A satisfação dos nossos clientes é a nossa maior conquista.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const testimonialImage = PlaceHolderImages.find(img => img.id === testimonial.imageId);
                return (
                  <CarouselItem key={testimonial.name}>
                    <div className="p-1">
                      <Card className="border-accent/50">
                        <CardContent className="flex flex-col items-center justify-center p-8 md:p-12 text-center">
                          <Quote className="h-10 w-10 text-primary/20 mb-4" />
                          <p className="text-lg text-muted-foreground mb-6">"{testimonial.feedback}"</p>
                          {testimonialImage && (
                            <Image
                              src={testimonialImage.imageUrl}
                              alt={testimonial.name}
                              width={80}
                              height={80}
                              className="rounded-full mb-4"
                              data-ai-hint={testimonialImage.imageHint}
                            />
                          )}
                          <h3 className="font-headline font-bold text-primary text-lg">{testimonial.name}</h3>
                          <div className="flex mt-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2 text-primary hover:bg-accent hover:text-accent-foreground"/>
            <CarouselNext className="right-0 translate-x-1/2 text-primary hover:bg-accent hover:text-accent-foreground"/>
          </Carousel>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Testimonials;
