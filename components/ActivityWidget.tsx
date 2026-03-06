'use client';

import { useEffect, useRef } from 'react';
import { Hammer, BookOpen, Heart, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { activities } from '@/data/skills';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap = {
  building: Hammer,
  learning: BookOpen,
  interested: Heart,
};

const labelMap = {
  building: 'Currently Building',
  learning: 'Learning',
  interested: 'Interested in',
};

const colorMap = {
  building: 'bg-accent/10 text-accent',
  learning: 'bg-blue-400/10 text-blue-400',
  interested: 'bg-blue-600/10 text-blue-600 dark:text-blue-400',
};

const borderColorMap = {
  building: 'border-accent/20',
  learning: 'border-blue-400/20',
  interested: 'border-blue-600/20',
};

export default function ActivityWidget() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cards = cardsRef.current?.children;

  useEffect(() => {
    if (!headerRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation - from hidden to visible
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

      // Cards stagger animation - from hidden to visible
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
    <Section id="building">
      <div ref={headerRef} className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-accent/10">
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Currently Building
          </h2>
        </div>
        <p className="text-text-secondary max-w-2xl">
          Here&apos;s what I&apos;m currently working on and exploring.
        </p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activities.map((activity, index) => {
          const Icon = iconMap[activity.type];
          return (
            <Card
              key={index}
              hover
              className={`border ${borderColorMap[activity.type]}`}
            >
              <div className={`w-12 h-12 rounded-xl ${colorMap[activity.type]} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-text-muted">
                {labelMap[activity.type]}
              </span>
              <p className="text-lg font-semibold text-text-primary mt-1">
                {activity.text}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
