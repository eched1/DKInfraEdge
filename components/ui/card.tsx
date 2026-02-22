interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-6 ${
        hover
          ? "transition-all duration-200 hover:border-border-light hover:bg-surface-light hover:shadow-lg hover:shadow-navy-dark/50"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
