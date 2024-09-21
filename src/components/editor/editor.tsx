import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

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
      <DndProvider backend={backendForDND}></DndProvider>
    </main>
  );
};

export default Editor;
