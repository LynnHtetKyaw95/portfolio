"use client";

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

const variantStyles = {
  default: "bg-surface-hover text-text-secondary",
  accent: "bg-accent/10 ",
  outline: "bg-transparent border border-border text-text-secondary",
};

export default function Badge({
  children,
  className = "",
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        px-3 py-1 text-xs font-medium rounded-full
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
