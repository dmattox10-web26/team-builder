import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Display from './components/Display'
import Add from './components/Add'
function App() {
  const [teamMembers, updateTeam] = useState([])

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
          <Display teamMembers={ teamMembers } />
        </Route>
        <Route path='/add'>
          <Add addTeamMember={ addTeamMember } />
        </Route>
        <Route path='/edit/:id'>
          <Add teamMembers={teamMembers} addTeamMember={ editTeamMember } />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
