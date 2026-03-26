import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} - Project Details`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary">
            {project.fullDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.stack.map((tech) => (
            <span
              className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* <div className="h-64 sm:h-80 rounded-2xl bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center mb-12">
          <div className="w-24 h-24 rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center shadow-lg">
            <span className="text-4xl">📱</span>
          </div>
        </div> */}

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-xl font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
              View Source
            </a>
          )}
        </div> */}

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Overview
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {project.overview}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Problem
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Solution
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {project.solution}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              Challenges & Learnings
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {project.challenges}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
