import { useEffect, useState } from "react";

const useIsNarrowScreen = (size: number) => {
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${size}px)`);
    setIsNarrowScreen(mediaQuery.matches);

    const updateScreen = () => setIsNarrowScreen(mediaQuery.matches);
    mediaQuery.addListener(updateScreen);

    return () => {
      mediaQuery.removeListener(updateScreen);
    };
  }, []);

  return { narrowScreen: isNarrowScreen };
};
export { useIsNarrowScreen };
