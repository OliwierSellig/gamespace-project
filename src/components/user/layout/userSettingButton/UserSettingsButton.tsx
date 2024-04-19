"use client";

import { useEffect, useRef, useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { useUser } from "../../../../contexts/UserContext";
import styles from "./userSettingButton.module.scss";

function UserSettingsButton() {
  const { setSettings, setLoggingOut } = useUser();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  const buttons = [
    { name: "User Settings", onClick: () => setSettings(true) },
    { name: "Logout", onClick: () => setLoggingOut(true) },
  ];

  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(e.target as Node)
      )
        setIsOpen(false);
    }

    addEventListener("scroll", () => setIsOpen(false));
    addEventListener("mouseup", (e: MouseEvent) => clickOutside(e));
    return () => {
      removeEventListener("mouseup", (e: MouseEvent) => clickOutside(e));
      removeEventListener("scroll", () => setIsOpen(false));
    };
  }, []);
  return (
    <>
      <div ref={selectorRef} className={styles.container}>
        <button
          onClick={() => setIsOpen(true)}
          className={styles.btn}
          aria-label="See settings"
        >
          <HiOutlineAdjustmentsHorizontal />
        </button>
        {isOpen && (
          <nav className={styles.nav}>
            {buttons.map((button, i) => (
              <button
                key={i}
                onClick={button.onClick}
                className={styles.nav__btn}
              >
                {button.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}

export default UserSettingsButton;
