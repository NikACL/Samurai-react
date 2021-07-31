import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav-bar';
import Profile from './components/Profile/profile';


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
