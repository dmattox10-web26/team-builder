import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Display from './components/Display'
import Add from './components/Add'
function App() {
  const [teamMembers, updateTeam] = useState([
    {
      name: 'Daniel Mattox',
      role: 'Software Engineer',
      email: 'dmattox10@gmail.com',
      id: 0
    },
  ])

  const addTeamMember = (teamMember) => {
    updateTeam(oldTeam => [...oldTeam, teamMember])
  }
  const editTeamMember = (teamMember, id) => {
    const fixedTeamMembers = [...teamMembers]
    fixedTeamMembers[id].name = teamMember.name
    updateTeam(fixedTeamMembers)
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Display team={ teamMembers } />
        </Route>
        <Route exact path='/add'>
          <Add addTeamMember={ addTeamMember } />
        </Route>
        <Route exact path='/edit:id'>
          <Add team={ teamMembers } />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
