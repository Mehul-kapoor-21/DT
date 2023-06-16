import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Sidebar from './Components/Sidebar/Sidebar';



function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Sidebar />
    </div>
  );
}

export default App;
