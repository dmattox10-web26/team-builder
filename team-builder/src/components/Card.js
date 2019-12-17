import React from 'react'
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const MemberCard = (props) => {
    const { name, email, role, id } =  props
    return (
        <Card>
            <CardBody>
                <CardTitle>{ name }</CardTitle>
                <CardSubtitle>{ role }</CardSubtitle>
                <CardText>{ email }</CardText>
                <Link to={{pathname: `/edit/${id}`}}><Button>Edit</Button></Link>
            </CardBody>
        </Card>
    )
}

export default MemberCard