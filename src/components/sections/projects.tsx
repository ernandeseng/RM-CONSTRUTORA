'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { projects as allProjects, projectCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimateOnScroll from '@/components/ui/animate-on-scroll';

const Projects = () => {
  const [filter, setFilter] = useState('Todos');

  const filteredProjects = filter === 'Todos'
    ? allProjects
    : allProjects.filter(project => project.category === filter);

  return (
    <section id="projects" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-accent md:text-4xl">Nossos Projetos</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Conheça alguns dos projetos que realizamos com excelência e dedicação.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="flex justify-center flex-wrap gap-2 mb-10">
            {['Todos', ...projectCategories].map(category => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? 'default' : 'outline'}
                className={
                  filter === category
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                    : 'border-accent text-accent hover:bg-accent/10'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => {
            const projectImage = PlaceHolderImages.find(img => img.id === project.imageId);
            return (
              <AnimateOnScroll key={project.id} delay={index * 100}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="group relative overflow-hidden rounded-lg border-0 bg-transparent cursor-pointer">
                      {projectImage && (
                         <Image
                            src={projectImage.imageUrl}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            data-ai-hint={projectImage.imageHint}
                         />
                      )}
                      <div className="absolute inset-0 bg-primary/40 transition-all duration-300 group-hover:bg-primary/70" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <h3 className="font-headline text-2xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-2">{project.title}</h3>
                        <p className="text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">{project.category}</p>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] bg-background border-primary">
                    <DialogHeader>
                      <DialogTitle className="font-headline text-2xl text-primary">{project.title}</DialogTitle>
                      <DialogDescription className="text-accent">{project.category}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 space-y-4">
                       {projectImage && (
                         <Image
                            src={projectImage.imageUrl}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full rounded-md object-cover"
                            data-ai-hint={projectImage.imageHint}
                         />
                       )}
                       <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
