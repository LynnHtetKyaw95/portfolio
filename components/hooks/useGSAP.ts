'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeInUp = {
  y: 20,
  opacity: 0,
  duration: 0.6,
  ease: 'power2.out',
};

export const fadeIn = {
  opacity: 0,
  duration: 0.5,
  ease: 'power2.out',
};

export const scaleIn = {
  scale: 0.95,
  opacity: 0,
  duration: 0.5,
  ease: 'power2.out',
};

export const slideInFromBottom = {
  y: 30,
  opacity: 0,
  duration: 0.6,
  ease: 'power3.out',
};

export function useGSAP() {
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    ctxRef.current = gsap.context(() => {});
    return () => {
      ctxRef.current?.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return ctxRef;
}

export function animateOnScroll(
  element: string | Element | Element[] | NodeListOf<Element>,
  animation: gsap.TweenVars,
  trigger?: string | Element | Element[] | NodeListOf<Element>,
  start?: string
) {
  if (typeof window === 'undefined') return;

  gsap.to(element, {
    ...animation,
    scrollTrigger: {
      trigger: trigger || element,
      start: start || 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
}

export function staggerAnimation(
  elements: string | Element | Element[] | NodeListOf<Element>,
  animation: gsap.TweenVars,
  stagger: number = 0.1,
  trigger?: string | Element | Element[] | NodeListOf<Element>
) {
  if (typeof window === 'undefined') return;

  gsap.to(elements, {
    ...animation,
    stagger,
    scrollTrigger: {
      trigger: trigger || elements,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
}

export default gsap;
