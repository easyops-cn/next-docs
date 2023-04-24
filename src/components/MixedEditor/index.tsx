import React, { Suspense, forwardRef } from "react";
import LoadingRing from "../LoadingRing";
import type {
  MonacoEditorWorkspaceProps,
  MonacoEditorWorkspaceRef,
} from "../MonacoEditorWorkspace";

const SimpleEditorWorkspace = React.lazy(
  () => import("../SimpleEditorWorkspace")
);
const MonacoEditorWorkspace = React.lazy(
  () => import("../MonacoEditorWorkspace")
);

export default forwardRef<MonacoEditorWorkspaceRef, MonacoEditorWorkspaceProps>(
  function MixedEditor(
    {
      files,
      currentFile,
      theme,
      className,
      onChange,
    }: MonacoEditorWorkspaceProps,
    ref
  ) {
    const isMobile = !!navigator.maxTouchPoints;
    return (
      <Suspense fallback={<LoadingRing />}>
        {isMobile ? (
          <SimpleEditorWorkspace
            files={files}
            currentFile={currentFile}
            className={className}
          />
        ) : (
          <MonacoEditorWorkspace
            files={files}
            currentFile={currentFile}
            theme={theme}
            className={className}
            onChange={onChange}
            ref={ref}
          />
        )}
      </Suspense>
    );
  }
);
