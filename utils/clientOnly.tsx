import { Suspense, forwardRef, lazy, useEffect, useState } from "react";

/**
 * Usage is the same as `dynamic()` from NextJS with 1 exception: `ssr` IS ALWAYS FALSE, hence the name of this function.
 * @param {() => any} importCallback Ex: () => import('./LazyComponent.jsx')
 * @param {{ loading?: () => import('react').ReactNode }} options This can be similar to options of `dynamic()` from NextJS
 */
export const clientOnly = (importCallback: any, { loading }: { loading?: () => import("react").ReactNode } = {}) => {
  const LazyComponent = lazy(importCallback);
  return forwardRef(function ClientOnlyComponent(props, forwardedRef) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
      setIsClient(true);
    }, []);
    return (
      isClient && (
        <Suspense fallback={loading?.()}>
          <LazyComponent {...props} ref={forwardedRef} />
        </Suspense>
      )
    );
  });
};
