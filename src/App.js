import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import Members from './Members'

function App() {

  const membersList = [
  { fullName: 'Titi Coker', email: 'dog', role: 'Frontend Engineer' },
  { fullName: 'John Bush', email: 'canary', role: 'Frontend Engineer' },
  { fullName: 'Thiago Silva', email: 'fish', role: 'Backend Engineer' },
]

  const initialFormValues = {
    fullName: '',
    email: '',
    role: '',
  }

  const [teamMembers, setTeamMembers] = useState(membersList)
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
 
    setFormValues({...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
   
    const newMember = {
      fullName: formValues.fullName.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    setTeamMembers([...teamMembers, newMember])

    setFormValues(initialFormValues)
    if (!newMember.fullName || !newMember.email || !newMember.role) return
  }
  return (
    <div className="container">
      <h1>Add Team Members</h1>
      <Form values={formValues}
        update={updateForm}
        submit={submitForm}/>

          {teamMembers.map((member, idx) => {
        return (
          <Members key={idx} fullName={member.fullName} email={member.email} role={member.role} />
        )
      })}    

      
    </div>
  );
}

export default App;


