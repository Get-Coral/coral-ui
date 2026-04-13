import type { ButtonHTMLAttributes } from "react";

type CoralButtonVariant = "primary" | "neutral" | "danger";
type CoralButtonSize = "sm" | "md" | "lg";

export type CoralButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: CoralButtonVariant;
  size?: CoralButtonSize;
};

const variantClassName: Record<CoralButtonVariant, string> = {
  primary: "coral-button--primary",
  neutral: "coral-button--neutral",
  danger: "coral-button--danger",
};

const sizeClassName: Record<CoralButtonSize, string> = {
  sm: "coral-button--sm",
  md: "coral-button--md",
  lg: "coral-button--lg",
};

export function CoralButton({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: CoralButtonProps) {
  const classes = ["coral-button", variantClassName[variant], sizeClassName[size], className]
    .filter(Boolean)
    .join(" ");

  return <button className={classes} type={type} {...props} />;
}
