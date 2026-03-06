"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover padding="none" className="overflow-hidden">
      <div className="h-48 relative bg-linear-to-br from-accent/20 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-xl bg-surface/80 flex items-center justify-center">
              <span className="text-2xl">{project.title.charAt(0)}</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-text-muted mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="accent">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="sm">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          )}
          <Link href={`/projects/${project.slug}`}>
            <Button variant="ghost" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
