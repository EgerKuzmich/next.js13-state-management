"use client";

import Modal from "@/src/ui/modal";
import React from "react";
import HotList from "./list";

const HOT_SECTION_ID = "hot-section";

const onShowHotSection = () => {
  if (!window) {
    throw new Error("window is not defined");
  }

  if (!(HOT_SECTION_ID in window)) {
    throw new Error("hot section not found");
  }

  const el = window[HOT_SECTION_ID] as HTMLDialogElement;

  el.showModal();
};

const HotSection = () => {
  return (
    <>
      <button
        className="fixed bottom-5 left-5 btn btn-circle outline drop-shadow-xl"
        onClick={onShowHotSection}
      >
        Hot!
      </button>

      <Modal
        id={HOT_SECTION_ID}
        className="h-[684px] w-full max-w-screen-lg ms-auto me-auto"
      >
        <HotList />
      </Modal>
    </>
  );
};

export default HotSection;
