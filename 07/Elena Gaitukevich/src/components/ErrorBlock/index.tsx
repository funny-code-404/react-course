import { memo } from "react";

export const ErrorBlock = memo(() => {
  return (
    <div className="error">
      <div className="container">
        <h2 className="title">Something went wrong</h2>
      </div>
    </div>
  );
});
