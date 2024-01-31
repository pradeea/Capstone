import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Card, CardGroup } from "react-bootstrap";


function Surgeons() 
{
return(
    <div>
    <Header />
    <Card>
        <Card.Img variant="top" width="500px" height="600px" src="/carasoul.jpg" />
        <Card.Body>
          <Card.Text>KWC Hospital</Card.Text>
        </Card.Body>
      </Card>
      <br />
      
    <CardGroup>
    <Card>
        <Card.Img variant="top"  width="200px" height="400px" src="/surgeon1.jpg" />
        <Card.Body>
          <Card.Title>Dr.Mohammad Hussain</Card.Title>
          <Card.Text>
           Advnacing exceptional surgical care in GrandRiverHospital
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" width="180px" height="400px" src="/surgeon2.jpg" />
        <Card.Body>
          <Card.Title>Dr.Lee</Card.Title>
          <Card.Text>
           General Surgeon at KWC Region
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" width="190px" height="400px" src="/surgeon3.jpg" />
        <Card.Body>
          <Card.Title>Dr.Kaseem Ashe</Card.Title>
          <Card.Text>
            Expert at Cardiac Surgery procedure at St.Marys Hospital
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>

</CardGroup>
<Footer/>
</div>
);}

export default Surgeons;