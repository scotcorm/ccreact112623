import Header from './components/Header';
import './App.css';
import CCList from './features/sites/CCList.js';
import { SITES } from './app/shared/SITES';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CCList site={SITES[0]} />
      <Footer />
    </div>
  );
}

export default App;
