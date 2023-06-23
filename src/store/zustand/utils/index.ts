"use client";

import { useRef } from "react";
import { StoreApi } from "zustand";

interface InitializerProps<Values> {
  values: Values;
  store: StoreApi<Values>;
}

function StoreInitializer<Values>(props: InitializerProps<Values>) {
  const { values, store } = props;

  const initialized = useRef(false);

  if (!initialized.current) {
    store.setState(values);
    initialized.current = true;
  }
  return null;
}

export default StoreInitializer;
