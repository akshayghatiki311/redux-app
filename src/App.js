import './App.css';
import Navbar from './components/Navbar';
import Transaction from './components/Transaction';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Transaction/>
    </div>
    </>
  );
}

export default App;
