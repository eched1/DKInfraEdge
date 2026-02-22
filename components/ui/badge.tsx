interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "teal" | "cyan";
  className?: string;
}

const variants = {
  default: "bg-surface-light text-text-secondary border-border",
  teal: "bg-teal/10 text-teal-light border-teal/20",
  cyan: "bg-cyan/10 text-cyan border-cyan/20",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
