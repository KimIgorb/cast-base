import React from 'react';

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  onClickOutside: (event: MouseEvent) => void,
  isActive: boolean = true
) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      onClickOutside(event);
    }
  };

  React.useEffect(() => {
    const eventListener = (event: MouseEvent) => handleClickOutside(event);

    if (isActive) {
      document.addEventListener("mousedown", eventListener);
    }

    return () => {
      document.removeEventListener("mousedown", eventListener)
    }
  }, [isActive, ref, onClickOutside]);
}
  export default useClickOutside