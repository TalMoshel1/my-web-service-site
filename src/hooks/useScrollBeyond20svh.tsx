"use client";

import { useState, useEffect } from "react";

/**

  @returns {boolean} True if scrolled beyond 20svh, false otherwise.
 */
const useScrollBeyond20svh = (): boolean => {
  const [scrolledBeyond, setScrolledBeyond] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      // Get the current scroll position in pixels.
      const scrollY: number = window.scrollY;

      // Calculate 20svh (20% of the viewport height) in pixels.
      // window.innerHeight provides the height of the browser viewport.
      const twentySvhInPixels: number = window.innerHeight * 0.1;

      // Update the state based on whether the scroll position is beyond 20svh.
      setScrolledBeyond(scrollY > twentySvhInPixels);
    };

    // Add the scroll event listener to the window.
    window.addEventListener("scroll", handleScroll);

    // Perform an initial check when the component mounts.
    // This is useful if the page loads already scrolled or if a user
    // refreshes the page while scrolled down.
    handleScroll();
    handleScroll();
    // Clean up the event listener when the component unmounts.
    // This prevents memory leaks and ensures efficient resource management.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount and cleans up on unmount.

  return scrolledBeyond;
};

export default useScrollBeyond20svh;
