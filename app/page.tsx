import AppContextProvider from "@/hooks/provider";
import StuntMatcher from "./StuntMatcher/page";

export default () => {
  return (
    <AppContextProvider>
      <StuntMatcher />
    </AppContextProvider>
  );
};
