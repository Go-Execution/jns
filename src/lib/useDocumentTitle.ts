import { useEffect } from 'react';

const DEFAULT_TITLE =
  'JNS Hauling LLC | DBE Certified Dump Truck Hauling — Columbus, GA';

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | JNS Hauling LLC` : DEFAULT_TITLE;
  }, [title]);
}
