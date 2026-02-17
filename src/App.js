import './assets/stylesheets/font-awesome.min.css';
import './assets/stylesheets/anim.css';
import './assets/stylesheets/style.css';
import {Header,Footer,Home,About,Services,Works,Contact} from "./components/";

const App=()=> {
  return (
    <div className="youi-studio-app">
      <Header/>
      <main className='wrapper_inner'>
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
