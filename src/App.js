
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Players from './components/Players';

function App() {
  return (
    <>
      <h1> Welcome to my turn based combat game</h1>
      <Header />
      <Players />
      <Footer />
    </>
  );
}

export default App;
