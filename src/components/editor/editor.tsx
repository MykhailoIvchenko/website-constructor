import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import EditorSection from '../editor.section/editor.section';

const Editor: React.FC = () => {
  const isTouchDevice = () => {
    if ('ontouchstart' in window) {
      return true;
    }
    return false;
  };

  const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend;

  return (
    <main className="flex h-full w-full flex-col md:flex-row">
      <DndProvider backend={backendForDND}>
        <EditorSection width={19}>
          <></>
        </EditorSection>

        <EditorSection width={37} bgColor="bg-secondary">
          <></>
        </EditorSection>

        <EditorSection width={44}>
          <></>
        </EditorSection>
      </DndProvider>
    </main>
  );
};

export default Editor;
