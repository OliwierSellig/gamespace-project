import Link from "next/link";
import { ReactNode } from "react";
import styles from "./button.module.scss";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  handleClick?: () => void;
  borderRadius?: "none" | "sm" | "md" | "lg";
  style?:
    | { name: "default" | "scale"; shade: "dark" | "light" }
    | { name: "fill"; shade: "white" | "blue" }
    | { name: "opacity"; shade: "white" | "red" };
  transition?: "fast" | "medium" | "long";
  sizeY?: "sm" | "md" | "lg";
  sizeX?: "sm" | "md" | "lg" | "xl";
  gap?: number;
  href?: { url: string; newPage?: boolean };
  positionSelf?: { type: "align" | "justify"; pos: "start" | "center" | "end" };
  fontWeight?: 400 | 500 | 600;
  iconSize?: "sm" | "md" | "lg";
  fontSize?: "sm" | "md" | "lg";
  additionalStyle?: object;
  additionalClass?: string[];
  disabled?: boolean;
  isLoading?: boolean;
};

function Button({
  type = "button",
  children,
  handleClick,
  href,
  borderRadius = "lg",
  style = { name: "default", shade: "dark" },
  sizeX = "md",
  sizeY = "sm",
  gap = 8,
  transition = "fast",
  positionSelf,
  fontWeight = 500,
  iconSize = "md",
  fontSize = "md",
  additionalStyle = {},
  additionalClass = [],
  disabled = false,
  isLoading,
}: ButtonProps) {
  const styleList = {
    gap: `${gap}px`,
    fontWeight: `${fontWeight}`,
    color: isLoading ? "transparent" : "",
    ...additionalStyle,
  };

  const classList = `${styles.btn} ${styles[`borderRadius__${borderRadius}`]} ${
    styles[`sizeX__${sizeX}`]
  }  ${styles[`sizeY__${sizeY}`]} ${styles[`iconSize__${iconSize}`]} ${
    styles[`style__${style.name}`]
  } ${styles[`transition__${transition}`]} ${
    styles[`transition__${transition}`]
  } ${styles[`shade__${style.shade}`]} ${disabled || isLoading ? styles.disabled : ""}  ${
    styles[`fontSize__${fontSize}`]
  } ${
    positionSelf?.type
      ? styles[`${positionSelf.type}__${positionSelf.pos}`]
      : ""
  } ${additionalClass.join(" ")} ${isLoading ? styles.loading : ""}`;

  if (href?.url)
    return (
      <Link
        tabIndex={disabled || isLoading ? -1 : 0}
        style={styleList}
        className={classList}
        href={href.url}
        target={href.newPage ? "_blank" : ""}
      >
        {children}
      </Link>
    );

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      style={styleList}
      onClick={handleClick}
      className={classList}
    >
      {children}
    </button>
  );
}

export default Button;
