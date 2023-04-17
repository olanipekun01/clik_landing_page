import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      {/* <Calculator /> */}
      <Header />
      <Hero />
      <Footer /> 
      <hr className='last_horizontal_line'/>
    </div>
  );
}

export default App;
