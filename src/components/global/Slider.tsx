"use client";

import React, { ReactElement, useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import styles from "./slider.module.scss";
import { getCurrentItemSize } from "../../utils/functions";

type SliderProps = {
  children: ReactElement;
  gap?: number;
  itemSizes?: {
    default: number;
    sizes: { itemSize: number; windowWidth: number }[];
  };
};

function Slider({ children, gap = 1, itemSizes }: SliderProps) {
  const x = useMotionValue(0);
  const [width, setWidth] = useState<number>(0);
  const [dragX, setDragX] = useState<number>(0);
  const [itemWidth, setItemWidth] = useState<number>(
    getCurrentItemSize(itemSizes) || 0
  );
  const [disabledButtons, setDisabledButtons] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragValue = containerRef.current
    ? containerRef.current?.offsetWidth * 0.5
    : 0;

  useEffect(() => {
    function setItemSize() {
      setItemWidth(getCurrentItemSize(itemSizes));
    }

    function setSliderWidth() {
      if (containerRef.current !== null && sliderRef.current !== null) {
        setWidth(
          containerRef.current?.scrollWidth +
            +sliderRef.current?.style.transform
              .split(" ")[0]
              .replace(/[^0-9, .]/g, "") -
            containerRef.current.offsetWidth
        );
      }
    }

    setSliderWidth();
    addEventListener("resize", () => {
      setItemSize();
      setSliderWidth();
    });
  }, [itemSizes]);

  useEffect(() => {
    x.on("animationComplete", () => {
      setDisabledButtons(false);
      setDragX(x.get());
    });
  }, [x]);

  function classListManipulate(action: "add" | "remove") {
    if (action === "add") {
      sliderRef.current?.classList.add("slider-swipe");
      setDisabledButtons(true);
    }
    if ((action = "remove")) {
      setTimeout(() => {
        sliderRef.current?.classList.remove("slider-swipe");

        setDisabledButtons(false);
      }, 500);
    }
  }

  function canDragLeft() {
    return x.get() < 0;
  }

  function dragLeft() {
    if (containerRef.current && sliderRef.current) {
      classListManipulate("add");
      if (Math.abs(x.get()) - dragValue < 0) {
        x.set(0);
        setDragX(0);
      } else {
        x.set(-(Math.abs(dragX) - dragValue));
        setDragX(x.get());
      }
      classListManipulate("remove");
    }
  }

  function canDragRight() {
    return sliderRef.current
      ? Math.abs(dragX) <
          Math.abs(
            sliderRef.current?.scrollWidth - sliderRef.current?.offsetWidth
          )
      : false;
  }

  function dragRight() {
    if (containerRef.current && sliderRef.current) {
      classListManipulate("add");
      if (
        Math.abs(x.get()) + dragValue >=
        Math.abs(sliderRef.current.offsetWidth - sliderRef.current.scrollWidth)
      ) {
        const newValue =
          sliderRef.current.offsetWidth - sliderRef.current.scrollWidth;
        x.set(newValue);
        setDragX(x.get());
      } else {
        const newValue = Math.abs(dragX) + dragValue;
        x.set(-newValue);
        setDragX(x.get());
      }
      classListManipulate("remove");
    }
  }

  const updatedChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      style: { flex: itemSizes.default ? `0 0 ${itemWidth}%` : "" },
    })
  );

  return (
    <motion.div ref={containerRef} className={styles.container}>
      <motion.button
        disabled={!canDragLeft() || disabledButtons}
        onClick={dragLeft}
        aria-label="Swipe Left"
        className={`${styles.button} ${styles.button__prev} ${
          !canDragLeft() || disabledButtons ? styles.button__disabled : ""
        }`}
      >
        <IoChevronBack />
      </motion.button>
      <motion.div
        className={styles.slider}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.1}
        ref={sliderRef}
        style={{ x, gap: `${gap}rem` }}
        onPanStart={() => {
          if (sliderRef.current) {
            sliderRef.current.style.pointerEvents = "none";
            setDisabledButtons(true);
          }
        }}
        onPanEnd={() => {
          if (sliderRef.current) {
            sliderRef.current.style.pointerEvents = "auto";
          }
        }}
      >
        {updatedChildren}
      </motion.div>
      <motion.button
        aria-label="Swipe Left"
        disabled={!canDragRight() || disabledButtons}
        onClick={dragRight}
        className={`${styles.button} ${styles.button__next} ${
          !canDragRight() || disabledButtons ? styles.button__disabled : ""
        }`}
      >
        <IoChevronForward />
      </motion.button>
    </motion.div>
  );
}

export default Slider;
