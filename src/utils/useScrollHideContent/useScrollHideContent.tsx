import React, { useEffect, useState } from "react";

export const useScrollHideContent: React.FC<number> = (
  scrollThreshold: number,
) => {
  const [hideContent, setHideContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldHide = window.scrollY > scrollThreshold;
      setHideContent(shouldHide);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return hideContent;
};
