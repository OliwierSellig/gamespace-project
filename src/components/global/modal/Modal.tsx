"use client";

import {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import React from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import styles from "./modal.module.scss";

type ModalContextProps = {
  openName: string;
  close: () => void;
  open: Dispatch<SetStateAction<string>>;
};

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

function Modal({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

type OpenProps = {
  opens: string;
  children: ReactElement;
};

function Open({ children, opens: opensWindowName }: OpenProps) {
  const { open } = useModal();

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
    onKeyDown: (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        open(opensWindowName);
      }
    },
  });
}

type WindowProps = {
  name: string;
  children: ReactElement;
  locked?: boolean;
};

function Window({ name, children, locked = true }: WindowProps) {
  const { openName, close } = useModal();
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (locked && openName) {
      document.documentElement.classList.add("modal");
    }

    if (
      locked &&
      !openName &&
      document.documentElement.classList.contains("modal")
    )
      document.documentElement.classList.remove("modal");
  }, [openName, locked]);

  if (name !== openName) return null;

  return createPortal(
    <div
      className={`${styles.container} ${
        locked ? styles.container__blurred : ""
      }`}
      ref={backgroundRef}
      onClick={(e) => {
        if (e.target === backgroundRef.current) close();
      }}
    >
      <div>
        <>
          {locked && (
            <button onClick={close} className={styles.close}>
              <IoClose />
            </button>
          )}
          {cloneElement(children, { onCloseModal: close })}
        </>
      </div>
    </div>,
    document.body,
  );
}

function useModal() {
  const modal = useContext(ModalContext);
  if (!modal) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return modal;
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
