
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Companies from "./components/Companies/companies";
import Residencies from "./components/Residencies/residencies";
import Value from "./components/Value/value";
import Contact from "./components/Contact/contact";
import GetStarted from "./components/GetStarted/getStarted";
import Footer from "./components/Footer/footer";

import "./App.css";

function App() {
  return (
    <div className="App"> 
      <div>
        <div className="white-gradient" />
        <Header/>
        <Hero/>
       
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    
    </div>
  );
}

export default App;
