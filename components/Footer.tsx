"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { developerInfo } from "@/data/developer";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href={developerInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={developerInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${developerInfo.email}`}
              className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-text-primary font-medium">
              {developerInfo.fullName}
            </p>
            <p className="text-sm text-text-muted">
              © 2025 - {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
