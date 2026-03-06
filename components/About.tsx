'use client';

import { useEffect, useRef } from 'react';
import { Layout, Server, Database, Wrench } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { developerInfo } from '@/data/developer';
import { skills } from '@/data/skills';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout,
  Server,
  Database,
  Wrench,
};

export default function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );

      // Cards stagger animation
      const cardElements = cardsRef.current?.children;
      if (cardElements) {
        gsap.fromTo(cardElements,
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section id="about">
      <div ref={headerRef} className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
          About Me
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl leading-relaxed">
          {developerInfo.about}
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-text-primary mb-8">
          Tech Stack
        </h3>
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <Card key={category.title} hover>
                {Icon && <Icon className="w-8 h-8 text-accent mb-4" />}
                <h4 className="text-lg font-semibold text-text-primary mb-3">
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-text-muted">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
