import logo from './logo.svg';
import './App.css';
import FocusInput from './component/FocusInput';
import ClassTimer from './component/ClassTimer';
import HookTimer from './component/HookTimer';

function App() {
  return (
    <div className="App">
     {/* <FocusInput /> */}
     <ClassTimer />
     <HookTimer />
    </div>
  );
}

export default App;
