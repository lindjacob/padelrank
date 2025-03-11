import { useEffect, useLayoutEffect as useReactLayoutEffect } from 'react';

// Use useLayoutEffect in client environments, fall back to useEffect during SSR
export const useLayoutEffect = typeof window !== 'undefined' ? useReactLayoutEffect : useEffect;