import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Nav from './components/nav-bar';
import Profile from './components/profile';


const App = () => {
  return (
    <div className='app-wrap'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}




export default App;
