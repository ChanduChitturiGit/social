import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import {Routes,Route} from 'react-router-dom'
import { Settings } from './components/Settings';
import {Messages} from './components/Messages';
import {Notifications} from './components/Notifications';
import { ProfileMain } from './components/profileComponents/ProfileMain';



function App() {
  return (
    <div className="App">
      <header className="App-header mb-4">
        <Nav/>
      </header>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/messages' Component={Messages}/>
        <Route path='/notifications' Component={Notifications}/>
        <Route path='/settings' Component={Settings} />
        <Route path='/profileMain' Component={ProfileMain}/>
      </Routes>
    </div>
  );
}

export default App;
