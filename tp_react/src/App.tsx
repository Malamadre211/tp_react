import './App.css'
import NameForm from './nameform.tsx';
import HelloWorld from './helloworld.tsx';
import Counter from './counter.tsx';
import List from './list.tsx';
import Todo from './todo.tsx'


const App = () => {
  return (
      <div>
        {/* <HelloWorld />
        <Counter />
        <List />
        <NameForm /> */}
        <Todo />
      </div>
  );
};

export default App;