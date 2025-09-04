// src/hooks/useActiveState.ts

import { useState } from 'react';

export function useActiveState<T>(initialState: T) {
  const [activeItem, setActiveItem] = useState<T>(initialState);

  const setActive = (item: T) => {
    setActiveItem(item);
  };

  const isActive = (item: T) => {
    return activeItem === item;
  };

  return {
    activeItem,
    setActive,
    isActive
  };
}