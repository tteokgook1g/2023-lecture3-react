import './App.css';
import { ConditionalRendering } from './components/ConditionalRendering';
import { TernaryOperator } from './components/TernaryOperator';
import { ArrayRenderer } from './components/ArrayRenderer';

function App() {
  return (
    <div className="App">
      <ConditionalRendering />
      <hr />
      <TernaryOperator />
      <hr />
      <ArrayRenderer />
    </div>
  );
}

export default App;
