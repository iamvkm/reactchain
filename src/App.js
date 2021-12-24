import "./App.css";
import MidSection from "./MidSection";

function App() {
  const Navbar = () => {
    return (
      <nav className="brown">
        <div className="nav-wrapper">
          <div className="container">
            <a href="#" className="brand-logo">
              Reactchain
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Settings</a>
              </li>
              <li>
                <a href="collapsible.html">Create Transaction</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <div>
      <Navbar />
      <MidSection />
    </div>
  );
}

export default App;
