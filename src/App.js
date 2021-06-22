
import './App.css';
import React from "react";
import Myphoto from "./Component/Profile/ProfilePhoto";
import Fullname from "./Component/Profile/FullName";
import Adresse from "./Component/Profile/Address";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap/'

const App = () => (
 <div>

<Container>
  <Row>
    <Col><Myphoto/></Col>
    <Col width="500px"> <Fullname/></Col>
    <Col> <Adresse/></Col>
  </Row>
</Container>


 
  
 </div>

);
export default App;



