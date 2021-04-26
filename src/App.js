import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row,res,req,next } from 'reactstrap';
import Home from './Home';
import Course from './Course';
import Allcourses from './Allcourses';
import Addcourse from './Addcourse';
import Header from './Header';
import LeftSide from './LeftSide';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


function App() {

  
  return(
  <div>
    <Router>
    <Header/>
    <Container>
      <Row>
        <Col md={4}>
        <LeftSide/>

        </Col>
        <Col md={8}>
       <Route path="/" component={Home} exact/>
       <Route path="/add-courses" component={Addcourse} exact/>
       <Route path="/view-courses" component={Allcourses} exact/>

        </Col>
      </Row>
    </Container>
    </Router>
    
    
  </div>
  );
}

export default App;
