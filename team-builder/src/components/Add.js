import React, { useState, useEffect } from 'react'
import { Container, Card, CardBody,
    CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { useHistory, useParams } from 'react-router-dom'
import { useInput } from '../hooks/input-hook'

const Add = (props) => {
    const { id } = useParams() || null
    const { teamMembers } = props
    const history = useHistory()
    const [teamMember, updateTeamMember] = useState({...teamMembers})
    const { value:name, bind:bindName } = useInput('')
    const { value:role, bind:bindRole } = useInput('')
    const { value:email, bind:bindEmail } = useInput('')
    const handleSubmit = (event) => {
        event.preventDefault()
        
        props.addTeamMember(teamMember)
        history.push('/')
    }
    useEffect(() => {
        updateTeamMember({
            name: name,
            role: role,
            email: email,
            id: id
        })
    }, [name, role, email])
    return (
        <Container>
            <Card>
                <CardBody>
                    <CardTitle>Add/Edit Team Member</CardTitle>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for='name'>Name</Label>
                            <Input type='text'
                                    {...bindName}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='role'>Role</Label>
                            <Input type='text'
                                    {...bindRole}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='email'>Email</Label>
                            <Input type='text'
                                    {...bindEmail}
                            />
                        </FormGroup>
                        <Button type='submit'>Done</Button>
                    </Form>
                    
                </CardBody>
            </Card>
        </Container>
    )
}

export default Add