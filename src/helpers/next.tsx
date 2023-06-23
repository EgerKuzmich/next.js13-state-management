import React, { PropsWithChildren, useEffect, useState } from "react";

export const ClientOnly = ({ children }: PropsWithChildren) => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};
