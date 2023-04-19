import React, { useEffect, useRef } from 'react';
// import { unstable_createRoot } from '@next-core/runtime';

export interface NextPreviewProps {
  brick: any;
  context: any;
}

export default function NextPreview({ brick, context }: NextPreviewProps): JSX.Element {
  const ref = useRef<HTMLDivElement>();
  // const rootRef = useRef<ReturnType<typeof unstable_createRoot>>();

  // useEffect(() => {
  //   if (!ref.current) {
  //     return;
  //   }
  //   const root = rootRef.current = unstable_createRoot(ref.current);
  //   return () => {
  //     root.unmount();
  //   }
  // }, []);

  // useEffect(() => {
  //   if (rootRef.current) {
  //     rootRef.current.render(brick, {
  //       context
  //     });
  //   }
  // }, [brick, context]);

  return <div ref={ref}></div>;
}