import React from "react";
import image from "./image.jpg";
import { Image,Col} from 'react-bootstrap'

const Myphoto = () => {
 return (
     <div>



<Col xs={6} md={4}>
      <Image src={image } width="300px" roundedCircle />
    </Col>

     
     </div>

 )


};
export default Myphoto;
