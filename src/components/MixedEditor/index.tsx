import React, { Suspense, forwardRef, useEffect } from "react";
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
      typingEffectReady,
      onChange,
    }: MonacoEditorWorkspaceProps,
    ref
  ) {
    const isMobile = !!navigator.maxTouchPoints;

    useEffect(() => {
      if (isMobile && onChange) {
        const file = files.find((f) => f.name === currentFile);
        if (file.codeSlides) {
          onChange(file.code, currentFile);
        }
      }
    }, [currentFile, files, isMobile, onChange]);

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
            typingEffectReady={typingEffectReady}
            onChange={onChange}
            ref={ref}
          />
        )}
      </Suspense>
    );
  }
);
