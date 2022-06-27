import { useEffect, useRef } from "react";

export const usePrevious = (prevValue: any) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = prevValue;
  }, [prevValue]);

  return ref.current;
};
