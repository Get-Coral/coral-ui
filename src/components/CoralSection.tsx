import type { HTMLAttributes, ReactNode } from "react";

export type CoralSectionProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  footer?: ReactNode;
};

export function CoralSection({
  className,
  eyebrow,
  title,
  subtitle,
  footer,
  children,
  ...props
}: CoralSectionProps) {
  const classes = ["coral-section", className].filter(Boolean).join(" ");

  return (
    <section className={classes} {...props}>
      <header className="coral-section__header">
        <div>
          {eyebrow ? <p className="coral-section__eyebrow">{eyebrow}</p> : null}
          <h2 className="coral-section__title">{title}</h2>
          {subtitle ? <p className="coral-section__subtitle">{subtitle}</p> : null}
        </div>
        {footer ? <div className="coral-section__footer">{footer}</div> : null}
      </header>
      <div className="coral-section__content">{children}</div>
    </section>
  );
}
