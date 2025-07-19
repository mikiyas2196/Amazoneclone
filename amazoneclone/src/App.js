import './App.css';
import Routing from './Routing';
import { CartProvider } from './context/CartContext';

function App() {
  return (

    <CartProvider>
      <div className="App">
      <Routing />
    </div>
    </CartProvider>
    
  );
}

export default App;
