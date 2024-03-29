import Link from "next/link";
import { ReactNode } from "react";
import styles from "./button.module.scss";

type ButtonProps = {
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
};

function Button({
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
}: ButtonProps) {
  const styleList = {
    gap: `${gap}px`,
    fontWeight: `${fontWeight}`,
    ...additionalStyle,
  };

  const classList = `${styles.btn} ${styles[`borderRadius__${borderRadius}`]} ${
    styles[`sizeX__${sizeX}`]
  }  ${styles[`sizeY__${sizeY}`]} ${styles[`iconSize__${iconSize}`]} ${
    styles[`style__${style.name}`]
  } ${styles[`transition__${transition}`]} ${
    styles[`transition__${transition}`]
  } ${styles[`shade__${style.shade}`]} ${disabled ? styles.disabled : ""}  ${
    styles[`fontSize__${fontSize}`]
  } ${
    positionSelf?.type
      ? styles[`${positionSelf.type}__${positionSelf.pos}`]
      : ""
  } ${additionalClass.join(" ")}`;

  if (href?.url)
    return (
      <Link
        tabIndex={disabled ? -1 : 0}
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
      disabled={disabled}
      style={styleList}
      onClick={handleClick}
      className={classList}
    >
      {children}
    </button>
  );
}

export default Button;
