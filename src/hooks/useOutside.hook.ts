import { TypeOut } from '@interfaces/component.interface';
import { useEffect, useRef, useState } from 'react';

export const useOutside = (initialIsVisible: boolean): TypeOut => {
  const [show, setShow] = useState(initialIsVisible);
  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, show, setShow };
};
