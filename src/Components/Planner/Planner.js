import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap" 

const Planner = () => {
    return (
        <Container>
            <h1>Plan Your Life Don't Just REACT</h1>
            <Row className="flex">
                <Col lg="6">
                    <Card>
                        Each Task Is A Card

                    </Card>
                    <Card>
                        Each Task Is A Card
                        
                    </Card>
                    <Card>
                        Each Task Is A Card
                        
                    </Card>
                    <Card>
                        Each Task Is A Card
                        
                    </Card>
                    <Button variant="primary">
                        Each Task Is A Card
                        
                    </Button>
                </Col>

                <Col>
                    <Card>
                        Calender Here
                    </Card>
                </Col>
            </Row>
           

        </Container>
    )

}

export default Planner;