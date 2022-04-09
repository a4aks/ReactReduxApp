import './App.css';
import {store} from "./Redux/store";
import{Counter} from "./components/Counter/Counter";
import { Todo } from './components/Todo/Todo';

function App() {
   return (
    <div className="App">
     <Counter />
     <hr />
     <Todo />
    </div>
  );
}

export default App;
