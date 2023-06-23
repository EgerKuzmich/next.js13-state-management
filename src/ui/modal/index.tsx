"use client";

import React, { PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  id: string;
  className?: string;
}

const Modal = (props: ModalProps) => {
  const { children, className, id } = props;

  return (
    <dialog id={id} className={`modal modal--custom ${className}`}>
      <form method="dialog">
        {children}
        <button className="fixed bottom-5 left-5 btn btn-circle btn outline drop-shadow-xl">
          ✕
        </button>
      </form>
    </dialog>
  );
};

export default Modal;
