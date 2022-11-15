import './App.css';
import Bio from './Bio';
import Footer from './Footer';
import Info from './Info';

function App() {
  return (
    <div className="App">
      <main className="mainContainer">

        <div className="card bg-dark">
          < Info />

          <div className="card-body">
            <Bio />
          </div>

          <Footer />
        </div>

      </main>
    </div>
  );
}

export default App;
