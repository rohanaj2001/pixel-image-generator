import './App.css';
import PixelGrid from './PixelGrid';

function App() {
  return (
    <div className="app">
        <PixelGrid rows={16} cols={16} />
    </div>
  );
}

export default App;
