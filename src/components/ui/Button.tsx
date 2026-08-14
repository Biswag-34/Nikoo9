import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "small";
};

export function Button({
  children,
  className = "",
  variant = "primary",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <a className={`button button--${variant} button--${size} ${className}`.trim()} {...props}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
