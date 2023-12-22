import { createContext, useContext } from 'react';

export const HireMeContext = createContext();

export function useHireMe() {
  return useContext(HireMeContext);
}
