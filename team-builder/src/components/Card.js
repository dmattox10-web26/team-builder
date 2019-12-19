import React from 'react'
import { Row, Col, Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const MemberCard = (props) => {
    console.log(props)
    return (
        <Card>
            <CardBody>
                <Row>
                <Col xs='10'>
                <CardTitle>{ props.teamMember.name }</CardTitle>
                <CardSubtitle>{ props.teamMember.role }</CardSubtitle>
                <CardText>{ props.teamMember.email }</CardText>
                </Col>
                <Col xs='2'>
                <Link to={{pathname: `/edit/${props.id}`}}><Button>Edit</Button></Link>
                </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default MemberCard