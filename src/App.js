import './App.css';
import PokemonApp from './PokeMon/PokemonApp';
// import ClassCom from './ClassCom';
// import FunctionalCom from './FunctionalCom';
import TodoApp from './To-Do-List-App/TodoApp';
import UseEffects from './UseEffect/UseEffects';
import UseEffects2 from './UseEffect/UseEffects2';
// import UseStateHook from './useState/UseState-hooks';

function App() {
  return (
    <div className="App">
      {/* <FunctionalCom /> */}
      {/* <ClassCom /> */}
      {/* <UseStateHook /> */}
      {/* <TodoApp /> */}
      {/* <UseEffects/> */}
      {/* <UseEffects2/> */}
      <PokemonApp />
    </div>
  );
}

export default App;