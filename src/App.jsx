import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Staff from "./components/Staff";
import Clients from "./components/Clients";
import Conctacts from "./components/Contacts";

function App() {
  return (
    <>
      <div className="App">
        <Hero />
        <About />
        <Staff />
        <Clients />
        <Conctacts />
      </div>
    </>
  );
}

export default App;
