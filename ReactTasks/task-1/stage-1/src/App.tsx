import './App.scss';
import Todolist from './components/TodoList/TodoList';

function App() {
  return (
    <main className="main">
      <h1 className={'main__title'}>TO-DO List</h1>
      <Todolist title={'Tasks'} />
    </main>
  );
}

export default App;
