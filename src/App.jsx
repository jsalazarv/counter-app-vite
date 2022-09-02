import { Counter } from './components/Counter/Counter.jsx';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <Counter value={0} />
      <Footer />
    </div>
  );
}

export default App;
