"use client";

import { useEffect, useRef, useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import OpenWelcomeMessage from "../../settings/openWelcomeMessage/OpenWelcomeMessage";
import styles from "./userSettingButton.module.scss";

function UserSettingsButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectorRef = useRef<HTMLDivElement>(null);

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
          <OpenWelcomeMessage />
          <button>Settings</button>
          <button>Logout</button>
        </nav>
      )}
    </div>
  );
}

export default UserSettingsButton;
