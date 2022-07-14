import React from 'react';
import "./index.css";
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import img1 from './Image/img.jpg';
import NotFound from './NotFound';



function App() {

  
  
  return (
    <Router>
    <div className="App">
      <section className='main-container'>
      <div className='img1'>
      <img src={img1} height ={400} width ={1000}/>
      </div>
      </section>
      <Navbar/>

      <div className="content">
       
       
       <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>

        
      </div>
    </div>
    </Router>
  );
}

export default App;
