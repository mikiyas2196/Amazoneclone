import './App.css';
import Header from './components/Header/Header';
import CarouselEffect from './components/carousel/CarouselEffect';
import Category from './components/category/Category';
import Product from './components/product/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </div>
  );
}

export default App;
