import { RefObject, useEffect } from "react";

type TUseOnClickOutside = {
    (
    ref: RefObject<HTMLDivElement>,
    handler: (event: MouseEvent | TouchEvent | KeyboardEvent) => void
    ): void
};

export const useOnClickOutside: TUseOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent | KeyboardEvent) => {
            if (!ref.current) {
                return;
            } else if (event instanceof KeyboardEvent && event.key === 'Escape') {
                handler(event);
            } else if (ref.current.contains(event.target as Node)) {
                return;
            };
            
            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        document.addEventListener('keydown', listener);

        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
          document.removeEventListener('keydown', listener);
        };
      },
      [ref, handler]
    );
  }