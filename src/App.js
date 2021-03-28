import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Nav from './Nav'
import Section1 from './Section1'
import Section2 from './Section2'
import Overlay from './Overlay';

function App() {
  
  
  return (
    
    <div className="App">
      <Overlay />
      <Menu />
      <Nav />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
