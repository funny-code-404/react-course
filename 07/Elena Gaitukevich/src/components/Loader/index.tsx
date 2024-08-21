import { memo } from "react";

export const Loader = memo(() => {
  return (
    <div className="preloader">
      <div className="preloader__row">
        <div className="preloader__item"></div>
        <div className="preloader__item"></div>
      </div>
    </div>
  );
});
