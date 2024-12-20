import React from 'react'
import throttle from "lodash.throttle";

const useHandleScroll = (threshold: number = 0, delay: number = 100) => {

  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = React.useMemo(
    () =>
      throttle(() => {
        setIsScrolled(window.scrollY > threshold);
      }, delay),
    [threshold, delay]
  )

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolled
}

export default useHandleScroll