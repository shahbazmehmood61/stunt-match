"use client";

import { contextProps } from "@/types/context";
import { createContext, useContext } from "react";

export const AppContext = createContext<contextProps>({
  isLoading: false,
  swipe: () => {},
  resetSwapper: () => {},
  canSwipe: false,
  outOfFrame: () => {},
  childRefs: [],
  swiped: () => {},
});

export const useAppContext = () => useContext(AppContext);
