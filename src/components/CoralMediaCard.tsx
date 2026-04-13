import type { HTMLAttributes, ReactNode } from "react";

export type CoralMediaCardProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  badge?: ReactNode;
  progress?: number;
};

function clampProgress(value: number) {
  return Math.max(0, Math.min(100, value));
}

export function CoralMediaCard({
  className,
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  badge,
  progress,
  ...props
}: CoralMediaCardProps) {
  const classes = ["coral-media-card", className].filter(Boolean).join(" ");
  const progressValue = typeof progress === "number" ? clampProgress(progress) : null;

  return (
    <article className={classes} {...props}>
      <div className="coral-media-card__media" aria-hidden={imageUrl ? undefined : true}>
        {imageUrl ? (
          <img className="coral-media-card__image" src={imageUrl} alt={imageAlt ?? ""} />
        ) : (
          <div className="coral-media-card__image coral-media-card__image--placeholder" />
        )}
      </div>

      <div className="coral-media-card__body">
        {badge ? <p className="coral-media-card__badge">{badge}</p> : null}
        <h3 className="coral-media-card__title">{title}</h3>
        {subtitle ? <p className="coral-media-card__subtitle">{subtitle}</p> : null}
        {description ? <p className="coral-media-card__description">{description}</p> : null}
        {progressValue !== null ? (
          <div
            className="coral-media-card__progress"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progressValue)}
          >
            <span style={{ width: `${progressValue}%` }} />
          </div>
        ) : null}
      </div>
    </article>
  );
}
