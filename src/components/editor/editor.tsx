import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import EditorSection from '../editor.section/editor.section';
import ControlsPanel from '../controls.panel/controls.panel';
import ConstructorPanel from '../constructor.panel/constructor.panel';

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
          <ControlsPanel />
        </EditorSection>

        <EditorSection width={37} isColoredBg={true}>
          <ConstructorPanel />
        </EditorSection>

        <EditorSection width={44}>
          <></>
        </EditorSection>
      </DndProvider>
    </main>
  );
};

export default Editor;
