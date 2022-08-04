import './App.css';
import React from 'react';
import User from './User';
// import Home from './components/Home';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer';
function App() {
  return (
    <div className="App">
    {/* <h1>App component</h1> */}
    {/* <User  data ={ {name : ' shashank',age: 25}}/> */}
    {/* <Home/> */}
    <HomeContainer/>
    <HeaderContainer/>
    </div>
  );
}

export default App;
