import Editor from './components/editor/editor';
import Header from './components/header/header';
import useDeactivateBlock from './hooks/use.deactivate.block';

function App() {
  useDeactivateBlock();

  return (
    <>
      <Header />
      <Editor />
    </>
  );
}

export default App;
