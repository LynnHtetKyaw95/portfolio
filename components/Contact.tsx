'use client';

import { useState, FormEvent, useRef, useEffect } from 'react';
import { Github, Mail, Linkedin, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { developerInfo } from '@/data/developer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const headerRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  useEffect(() => {
    if (!headerRef.current || !socialRef.current || !formRef.current) return;

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

      // Social links animation
      const socialElements = socialRef.current?.children;
      if (socialElements) {
        gsap.fromTo(socialElements,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: socialRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      }

      // Form animation
      gsap.fromTo(formRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section id="contact">
      <div className="max-w-3xl mx-auto">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-text-secondary">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>

        <div ref={socialRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <a
            href={developerInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent/50 hover:-translate-y-1 transition-all duration-200"
          >
            <Github className="w-5 h-5 text-accent" />
            <span className="font-medium text-text-primary">GitHub</span>
          </a>
          <a
            href={`mailto:${developerInfo.email}`}
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent/50 hover:-translate-y-1 transition-all duration-200"
          >
            <Mail className="w-5 h-5 text-accent" />
            <span className="font-medium text-text-primary">Email</span>
          </a>
          <a
            href={developerInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent/50 hover:-translate-y-1 transition-all duration-200"
          >
            <Linkedin className="w-5 h-5 text-accent" />
            <span className="font-medium text-text-primary">LinkedIn</span>
          </a>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            disabled={status === 'sending'}
            className="w-full"
          >
            {status === 'sending' ? (
              'Sending...'
            ) : status === 'success' ? (
              <>
                <Send className="w-5 h-5" />
                Message Sent!
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </Section>
  );
}
