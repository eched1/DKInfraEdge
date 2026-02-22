interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className = "", hover = false, glow = false }: CardProps) {
  if (glow) {
    return (
      <div className={`card-glow p-6 ${hover ? "transition-all duration-300 hover:scale-[1.02]" : ""} ${className}`}>
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl border border-border bg-surface p-6 ${
        hover
          ? "transition-all duration-300 hover:border-border-light hover:bg-surface-light hover:shadow-lg hover:shadow-teal/5 hover:scale-[1.01]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
