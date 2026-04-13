import type { HTMLAttributes, ReactNode } from "react";

export type CoralCardProps = HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode;
};

export function CoralCard({ className, title, children, ...props }: CoralCardProps) {
  const classes = ["coral-card", className].filter(Boolean).join(" ");

  return (
    <section className={classes} {...props}>
      {title ? <header className="coral-card__title">{title}</header> : null}
      <div className="coral-card__content">{children}</div>
    </section>
  );
}
