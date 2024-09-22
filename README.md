# React Editor (pet-project)

The React Editor is a web application built with React.js, TypeScript, Redux Toolkit, Tailwind css.
It allows user to create blocks of certain types and change their content without knowing any programming language.
The application doesn't save any data anywhere so it would be lost after reload.

## Features

- **Block creation:** Click on the block of certain type in the block controls panel
  or drag it to the constructor area and drop it there.
- **Block activation:** Click on the certain block in the constructor panel to make it active,
  so you can change the content. To make the block inactive click on the other block,
  any empty space or press "Enter" or "Escape" button.
- **Block content editing:** Print or paste a text in the input of active block to change the content of this block.
  A valid url for the image block should be pasted into the input for an image displaying.
  This link https://picsum.photos/200/300 can be used for the image (the image is not always the same).
- **Block cloning:** The block could be cloned by click on the "clone" button.
- **Block deleting:** The block could be deleted by click on the "delete" button.
- **Block moving:** The block could be moved one position up or down by click on the "move up" or "move down" button.
- **Blocks rendering:** All blocks with the content would be rendered in the render panel.

## Getting Started

### Prerequisites

- Node.js 20x

### How to run

1. **Clone the repository:**

   ```sh
   git clone https://github.com/MykhailoIvchenko/website-constructor.git
   cd website-constructor
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

3. **Launch the application:**

   ```sh
   npm run dev
   ```

4. **Access the application:**

   Open your web browser and go to `http://localhost:5173/`.
