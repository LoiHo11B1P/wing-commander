
import { Container, Row, Col} from "react-bootstrap"
import { } from "../../features/timeKeeperSlice"
import './TimeKeeper.css'
import { useSelector } from "react-redux"
//import { useEffect, useState } from "react"


const TimeKeeper = () => {

    const timeKeeperData = useSelector((state) => state.timeKeeper.timeKeeperData)

    // Render Data
 
    const displayTimeKeeperData = () => {
        if(timeKeeperData.length > 0) {
            return (
                <div>
                {
                    timeKeeperData.map(element => {
                    
                        return(
                            <div key={ element.name }>
                                <h4>{ element.name }</h4>
                                <p>Status: { element.status }</p>
                                <p>Type: { element.type }</p>
                                <p>Time Spend: { element.timeSpend } mins</p>
                                <p>Start Date: { element.startDate }</p>
                                <p>End Date: { element.endDate }</p>
                                <p>Created Date: { element.createDate }</p>
                            </div>
                        )
                    })
                }
                </div>
            )
        }
    }
    
    return (
        <Container fluid className="py-3">
            <Row className="mx-2">
                <Col lg="9" className="text-white">
                   { displayTimeKeeperData() }
                </Col>
                <Col lg="3">
                   
                </Col>
            </Row>
            
        </Container>
    )
}

export default TimeKeeper