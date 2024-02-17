import { ReactNode } from "react";
import styles from "./button.module.scss";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  handleClick?: () => void;
  borderRadius?: "none" | "sm" | "md" | "lg";
  style?: "fill" | "scale" | "default";
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
};

function Button({
  children,
  handleClick,
  href,
  borderRadius = "lg",
  style = "default",
  sizeX = "md",
  sizeY = "sm",
  gap = 8,
  transition = "fast",
  positionSelf,
  fontWeight = 500,
  iconSize = "md",
  fontSize = "md",
  additionalStyle = {},
}: ButtonProps) {
  const styleList = {
    gap: `${gap}px`,
    fontWeight: `${fontWeight}`,
    ...additionalStyle,
  };

  const classList = `${styles.btn} ${styles[`borderRadius__${borderRadius}`]} ${
    styles[`sizeX__${sizeX}`]
  }  ${styles[`sizeY__${sizeY}`]} ${styles[`iconSize__${iconSize}`]} ${
    styles[`style__${style}`]
  } ${styles[`transition__${transition}`]} ${styles[`fontSize__${fontSize}`]} ${
    positionSelf?.type
      ? styles[`${positionSelf.type}__${positionSelf.pos}`]
      : ""
  }`;

  if (href)
    return (
      <Link
        style={styleList}
        className={classList}
        href={href.url}
        target={href.newPage ? "_blank" : ""}
      >
        {children}
      </Link>
    );

  return (
    <button style={styleList} onClick={handleClick} className={classList}>
      {children}
    </button>
  );
}

export default Button;
