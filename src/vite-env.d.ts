/// <reference types="vite/client" />

type BlockType = 'image' | 'headline' | 'paragraph' | 'button';

interface IConstructorBlock {
  id: string;
  type: BlockType;
  title: string;
  content: string;
}

type ConstructorBlocks = IConstructorBlock[];

type ReactChildrenType = React.ReactNode | React.ReactNode[];

type AddNewBlockType = (type: BlockType) => void;
