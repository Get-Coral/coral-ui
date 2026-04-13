import type { ReactNode } from "react";

export type CoralErrorAction = {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "neutral";
  target?: string;
  rel?: string;
};

export type CoralErrorStateProps = {
  code?: ReactNode;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  primaryAction?: CoralErrorAction;
  secondaryAction?: CoralErrorAction;
  className?: string;
};

function CoralAction({ action }: { action: CoralErrorAction }) {
  const variant = action.variant ?? "primary";
  const classes = ["coral-error-state__action", `coral-error-state__action--${variant}`].join(" ");

  if (action.href) {
    return (
      <a className={classes} href={action.href} target={action.target} rel={action.rel}>
        {action.label}
      </a>
    );
  }

  return (
    <button className={classes} type="button" onClick={action.onClick}>
      {action.label}
    </button>
  );
}

export function CoralErrorState({
  code,
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: CoralErrorStateProps) {
  const classes = ["coral-error-state", className].filter(Boolean).join(" ");

  return (
    <main className={classes}>
      <div className="coral-error-state__card">
        {code ? <p className="coral-error-state__code">{code}</p> : null}
        {eyebrow ? <p className="coral-error-state__eyebrow">{eyebrow}</p> : null}
        <h1 className="coral-error-state__title">{title}</h1>
        {description ? <p className="coral-error-state__description">{description}</p> : null}
        {primaryAction || secondaryAction ? (
          <div className="coral-error-state__actions">
            {primaryAction ? <CoralAction action={primaryAction} /> : null}
            {secondaryAction ? <CoralAction action={secondaryAction} /> : null}
          </div>
        ) : null}
      </div>
    </main>
  );
}
