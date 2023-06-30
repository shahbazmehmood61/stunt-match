"use client";
import React, { useMemo, useRef, useState } from "react";
import { AppContext } from "./context";
import { contextProps } from "@/types/context";
import { useAppDispatch, useAppSelector } from "./store";
import { acceptDouble, rejectDouble, reset } from "@/store/slices/Index";

const AppContextProvider = (props: { children: React.ReactElement }) => {
  const { data } = useAppSelector((state) => state.stunt);
  const [currentIndex, setCurrentIndex] = useState(data.length - 1);
  const [isReset, setIsReset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs: any = useMemo(
    () =>
      Array(data.length)
        .fill(0)
        .map((i) => React.createRef()),
    [isReset]
  );

  const updateCurrentIndex = (val: any) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canSwipe = currentIndex >= 0;

  // decrease current index
  const swiped = (_: any, index: any) => {
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name: any, idx: any) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current?.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir: any) => {
    setIsLoading(true);
    if (canSwipe && currentIndex < data.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
      // await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
      childRefs.splice(currentIndex, 1);
    }

    if (dir === "left") {
      dispatch(rejectDouble({ data: data[currentIndex], currentIndex }));
    }

    if (dir === "right") {
      dispatch(acceptDouble({ data: data[currentIndex], currentIndex }));
    }
    setIsLoading(false);
  };

  const resetSwapper = () => {
    setIsReset((prev) => prev + 1);
    updateCurrentIndex(9);
    dispatch(reset());
  };

  const value: contextProps = {
    isLoading,
    outOfFrame,
    swipe,
    resetSwapper,
    swiped,
    canSwipe,
    childRefs,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
