import './assets/stylesheets/font-awesome.min.css';
import './assets/stylesheets/anim.css';
import './assets/stylesheets/style.css';
import Header from './components/Header';
import Footer from './components/Header';

const App=()=> {
  return (
    <div className="youi-studio-app">
      <Header/>
      <main></main>
      <Footer/>
    </div>
  );
}

export default App;
