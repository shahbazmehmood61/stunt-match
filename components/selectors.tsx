import React from "react";
import { useAppContext } from "@/hooks/context";
import { useAppSelector } from "@/hooks/store";

function Selectors() {
  const { isLoading, swipe, resetSwapper, canSwipe } = useAppContext();
  const { acceptedDoubles, rejectedDoubles } = useAppSelector((state) => state.stunt);

  return (
    <div className="buttons">
      <button
        data-badge={rejectedDoubles.length}
        className="reject"
        disabled={!canSwipe || isLoading}
        onClick={() => swipe("left")}
      >
        <img src="/cross.svg" />
      </button>
      <button onClick={() => resetSwapper()}>Reset</button>
      <button
        disabled={!canSwipe || isLoading}
        data-badge={acceptedDoubles.length}
        className="accept"
        onClick={() => swipe("right")}
      >
        <img src="/tick.svg" />
      </button>
    </div>
  );
}

export default Selectors;
