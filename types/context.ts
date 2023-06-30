export interface contextProps {
  isLoading: boolean;
  outOfFrame: (name: string, idx: number) => void;
  swipe: (name: string) => void;
  resetSwapper: () => void;
  swiped: (name: string, idx: number) => void;
  childRefs: Array<React.RefObject<any>>;
  canSwipe: boolean;
}
