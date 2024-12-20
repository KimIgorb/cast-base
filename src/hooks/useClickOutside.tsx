import React from 'react'

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
      if (isActive) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isActive]);
}

export default useClickOutside