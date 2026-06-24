import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import SearchPage from './components/SearchPage';
import Modal from './components/Modal';
import ListingScreen from './components/ListingScreen';
import { useSelector } from 'react-redux';

const App = () =>  {
const userLogin = useSelector(state => state.userLogin);
const { userInfo } = userLogin;
  return (
    <div className="App">
      <Router>
       <Header />
       <Switch>
        <Route path='/' exact>
        <Home />
        </Route>
        <Route path="/search">
  {userInfo ? (
    <SearchPage />
  ) : (
    <h2>Please login first</h2>
  )}
</Route>
        <Route path="/listing/:id">
  <ListingScreen />
</Route>
       </Switch>
     <Route path="/">
  <Modal />
</Route>
      <Footer />
      </Router>
      
    </div>
  );
}

export default App;
