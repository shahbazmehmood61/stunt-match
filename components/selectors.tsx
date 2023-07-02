import React from "react";
import { useAppContext } from "@/hooks/context";
import { useAppSelector } from "@/hooks/store";

function Selectors() {
  const { isLoading, swipe, resetSwapper, canSwipe } = useAppContext();
  const { acceptedDoubles, rejectedDoubles } = useAppSelector((state) => state.stunt);
  const disabled = !canSwipe || isLoading;
  const cursor = disabled ? "wait" : "pointer";

  return (
    <div className="buttons">
      <button
        data-badge={rejectedDoubles.length}
        className="reject"
        disabled={disabled}
        style={{ cursor: cursor }}
        onClick={() => swipe("left")}
      >
        <img src="/assets/images/cross.svg" />
      </button>
      <button onClick={() => resetSwapper()}>Reset</button>
      <button
        disabled={disabled}
        data-badge={acceptedDoubles.length}
        style={{ cursor: cursor }}
        className="accept"
        onClick={() => swipe("right")}
      >
        <img src="/assets/images/tick.svg" />
      </button>
    </div>
  );
}

export default Selectors;
