"use client";

import { useEffect, useRef } from "react";
import Card from "./Card";
import TurnBtn from "./TurnBtn";
import styles from "./slider.module.scss";

const SCROLL_AMOUNT = 1000;

function Slider({
  title = null,
  sliderStyle = "",
  cardStyle = "",
  scale = true,
  user = false,
  list = [],
  basicLength = 6,
}) {
  const boxRef = useRef(null);
  const containerRef = useRef(null);
  const isClicked = useRef(false);
  const isDragged = useRef(false);
  const coords = useRef({ startX: 0, lastX: 0 });

  // --------------------------------------
  // Dragging Logic
  // --------------------------------------

  useEffect(() => {
    if (!boxRef.current || !containerRef.current) return;

    const box = boxRef.current;
    const container = containerRef.current;

    function onMouseDown(e) {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      box.classList.add("drag");
    }

    function onMouseUp() {
      isClicked.current = false;
      coords.current.lastX = container.offsetLeft;
      if (isDragged.current) {
        setTimeout(() => {
          box.classList.remove("drag");
          isDragged.current = false;
        }, 400);
      } else {
        box.classList.remove("drag");
        isDragged.current = false;
      }
    }

    function onMouseMove(e) {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;

      if (parseInt(container.style.left) > 0 && nextX > 0) return;

      if (
        container.offsetWidth - parseInt(container.style.left) >
          container.scrollWidth &&
        nextX < parseInt(container.style.left)
      )
        return;

      container.style.left = `${nextX}px`;
      isDragged.current = true;
    }

    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mouseup", onMouseUp);
    box.addEventListener("mousemove", onMouseMove);

    function cleanup() {
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mousedown", onMouseUp);
      box.removeEventListener("mousemove", onMouseMove);
    }

    return cleanup;
  }, []);

  // --------------------------------------
  // Clicking Right Btn
  // --------------------------------------

  function onScrollRight(scrollAmount) {
    const container = containerRef.current;

    container.classList.add("animated");

    if (!container.style.left) {
      container.style.left = `-${scrollAmount}px`;
      coords.current.lastX = coords.current.lastX - scrollAmount;
    } else if (
      container.scrollWidth -
        (-parseInt(container.style.left) + container.offsetWidth) <
      scrollAmount
    ) {
      container.style.left = `-${
        container.scrollWidth - container.offsetWidth
      }px`;

      coords.current.lastX = -(container.scrollWidth - container.offsetWidth);
    } else {
      container.style.left = `${
        parseInt(container.style.left) - scrollAmount
      }px`;
      coords.current.lastX = coords.current.lastX - scrollAmount;
    }

    setTimeout(() => container.classList.remove("animated"), 300);
  }

  // --------------------------------------
  // Clicking Left Btn
  // --------------------------------------

  function onScrollLeft(scrollAmount) {
    const container = containerRef.current;

    container.classList.add("animated");

    if (
      !container.style.left ||
      parseInt(container.style.left) > -scrollAmount
    ) {
      container.style.left = "0px";
      coords.current.lastX = 0;
    } else {
      container.style.left = `${
        parseInt(container.style.left) + scrollAmount
      }px`;

      coords.current.lastX = coords.current.lastX + scrollAmount;
    }

    setTimeout(() => container.classList.remove("animated"), 300);
  }

  return (
    <section
      style={{ overflow: `${user ? "clip" : "visible"}` }}
      className={`${styles.slider} ${sliderStyle ? styles[sliderStyle] : ""}`}
    >
      {title && <h2 className={styles.heading}>{title}</h2>}
      <div ref={boxRef} className={styles.box}>
        <ul ref={containerRef} className={styles.container}>
          {!list.length &&
            Array.from({ length: basicLength }, () => (
              <li className={styles.emptyItem} key={crypto.randomUUID()}>
                Empty Item
              </li>
            ))}
          {sliderStyle === "slider__trending" &&
            list.map((item) => (
              <Card
                title={item.name}
                details={`${item.genres.at(0).name} ${item.released}`}
                rsc={item.background_image}
                key={crypto.randomUUID()}
                scale={scale}
                cardStyle={cardStyle}
                container={boxRef.current}
                handleClick={() => {}}
              />
            ))}
          {sliderStyle === "slider__genre" &&
            list.map((item) => (
              <Card
                title={item.name}
                details={`${item.games_count} games`}
                rsc={item.image_background}
                key={crypto.randomUUID()}
                scale={scale}
                cardStyle={cardStyle}
                container={boxRef.current}
                handleClick={() => {}}
              />
            ))}
          {(sliderStyle === "slider__ranking__trending" ||
            sliderStyle === "slider__ranking__rated") &&
            list
              .slice(0, 10)
              .map((item) => (
                <Card
                  title={item.name}
                  details={
                    sliderStyle === "slider__ranking__trending"
                      ? `Played by: ${item.added}`
                      : `Rating: ${item.rating}/5`
                  }
                  rsc={item.background_image}
                  key={crypto.randomUUID()}
                  scale={scale}
                  cardStyle={cardStyle}
                  container={boxRef.current}
                  handleClick={() => {}}
                />
              ))}
          {sliderStyle === "slider__games" &&
            list.map((item) => (
              <Card
                rsc={item.image}
                key={crypto.randomUUID()}
                scale={scale}
                cardStyle={cardStyle}
                container={boxRef.current}
                handleClick={() => {}}
              />
            ))}
          {sliderStyle === "slider__fav" &&
            list?.map((item) => (
              <Card
                title={item.name}
                details={`${item.genres.at(0).name} ${item.released}`}
                rsc={item.background_image}
                key={crypto.randomUUID()}
                scale={scale}
                cardStyle={cardStyle}
                container={boxRef.current}
                handleClick={() => {}}
              />
            ))}
          {sliderStyle === "slider__fav" &&
            list.length < basicLength &&
            Array.from({ length: basicLength - list.length }, () => (
              <li className={styles.emptyItem} key={crypto.randomUUID()}>
                Empty Item
              </li>
            ))}
          {sliderStyle === "slider__library" &&
            list?.map((item) => (
              <Card
                title={item.name}
                details={`${item.genres?.at(0).name} ${item.released}`}
                rsc={item.background_image}
                key={crypto.randomUUID()}
                scale={scale}
                cardStyle={cardStyle}
                container={boxRef.current}
                handleClick={() => {}}
              />
            ))}
          {sliderStyle === "slider__library" &&
            list.length < basicLength &&
            Array.from({ length: basicLength - list.length }, () => (
              <li className={styles.emptyItem} key={crypto.randomUUID()}>
                Empty Item
              </li>
            ))}
        </ul>

        <TurnBtn next={false} handleClick={() => onScrollLeft(SCROLL_AMOUNT)} />
        <TurnBtn next={true} handleClick={() => onScrollRight(SCROLL_AMOUNT)} />
      </div>
    </section>
  );
}

export default Slider;
