import React from 'react'
import { Container, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'

import MemberCard from './Card'

const Display = (props) => {
    const history = useHistory()
    console.log(props)
    const teamMembers = props.team
    return (
        <Container>
            {teamMembers.map((teamMember, index) => 
                <MemberCard teamMember={ teamMember } id={ index } />
            )}
            <Button onClick={() => history.push('/add')}>Add</Button>
        </Container>
    )
}

export default Display