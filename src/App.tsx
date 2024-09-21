import { Provider } from 'react-redux';
import Editor from './components/editor/editor';
import Header from './components/header/header';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Editor />
    </Provider>
  );
}

export default App;
