import './assets/stylesheets/font-awesome.min.css';
import './assets/stylesheets/anim.css';
import './assets/stylesheets/style.css';
import Header from './components/Header';
import Footer from './components/Header';
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";

const App=()=> {
  return (
    <div className="youi-studio-app">
      <Header/>
      <main className='wrapper'>
        <Home/>
        <About/>
        <Services/>
        <Works/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
