import React, { useState, useEffect } from 'react'
import { Container, Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link, useHistory, useParams } from 'react-router-dom'

const Add = (props) => {
    const { id } = useParams() || null
    const { teamMembers } = props
    const history = useHistory()
    const [teamMember, updateTeamMember] = useState({id: id})
    const handleInputChange = (event) => {
        event.persist();
        updateTeamMember(teamMember => ({...teamMember, [event.target.name]: event.target.value}));
      }
    useEffect(() => {
        if(typeof id === 'string') {
            try {
                updateTeamMember(teamMembers[id])
            }
            catch (e) {
                console.log(e)
            }
        }
    }, [teamMember])
    return (
        <Container>
            <Card>
                <CardBody>
                    <CardTitle>Add/Edit Team Member</CardTitle>
                    <Form>
                        <FormGroup>
                            <Label for='name'>Name</Label>
                            <Input type='name'
                                    name='name'
                                    id='name'
                                    placeholder={props.name}
                                    value={teamMember.name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='role'>Role</Label>
                            <Input type='role'
                                    name='role'
                                    id='role'
                                    placeholder={props.role}
                                    value={teamMember.Role}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='email'>Email</Label>
                            <Input type='email'
                                    name='email'
                                    id='email'
                                    placeholder={props.email}
                                    value={teamMember.Email}
                            />
                        </FormGroup>
                    </Form>
                    <Button onClick={props.addTeamMember(teamMember)}>Add/Edit</Button>
                    <Button onClick={() => history.push('/')}>Home</Button>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Add