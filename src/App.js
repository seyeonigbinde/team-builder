import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';

function App() {

  const initialFormValues = {
    name: '',
    email: '',
    role: '',
  }

  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
 
    setFormValues({...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
   
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newMember.name || !newMember.email || !newMember.role) return
  }
  return (
    <div className="container">
      <h1>Add Team Members</h1>
      <Form values={formValues}
        update={updateForm}
        submit={submitForm}/>
    </div>
  );
}

export default App;

