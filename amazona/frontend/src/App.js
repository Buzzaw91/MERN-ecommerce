import Product from './components/Product';
import data from './data';

function App() {
  return (
    <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="index.html">amazona</a>
                </div>
                <div>
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sign In</a>
                </div>
            </header>
            <aside>
                Shopping Categories
            </aside>
            <main className="main">
                <div className="row center">
                  { data.products.map(product => (
                    <Product key={product._id} product={product} />
                  )
                  )
                  }
                </div>
            </main>
            <footer className="row center">All rights reserved</footer>
        </div>
  );
}

export default App;
