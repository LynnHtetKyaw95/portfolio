"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import gsap from "gsap";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { developerInfo, techBadge } from "@/data/developer";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.5,
      })
        .from(
          titleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3",
        )
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          taglineRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3",
        )
        .from(
          buttonsRef.current?.children || [],
          {
            y: 20,
            opacity: 0,
            scale: 0.95,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.2",
        )
        .from(
          badgesRef.current?.children || [],
          {
            y: 10,
            opacity: 0,
            duration: 0.4,
            stagger: 0.05,
          },
          "-=0.2",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-linear-to-br from-accent/30 to-purple-500/30 dark:from-accent/20 dark:to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-linear-to-br from-purple-500/30 to-pink-500/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div
        ref={containerRef}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-sm text-accent mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for work
        </div>

        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight"
        >
          Hi, I&apos;m {developerInfo.fullName}
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl sm:text-2xl text-text-secondary mb-4"
        >
          {developerInfo.title}
        </p>

        <p
          ref={taglineRef}
          className="text-lg text-text-muted mb-10 max-w-2xl mx-auto"
        >
          {developerInfo.tagline}
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link href="/#projects">
            <Button variant="primary">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/#contact">
            <Button variant="outline">Contact Me</Button>
          </Link>
          <a
            href={developerInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">
              <Github className="w-5 h-5" />
              GitHub
            </Button>
          </a>
        </div>

        <div
          ref={badgesRef}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {techBadge.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
