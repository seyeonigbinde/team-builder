import React from 'react';

export default function Form (props) {
  const { values, update, submit } = props

  const onChange = evt => {
  
    const { name, value } = evt.target
  
    update(name, value)
  }

  const onSubmit = evt => {
 
    evt.preventDefault()
   
    submit()
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Name
          <input
            type="text"
            value={values.name}
            onChange={onChange}
            name="fullName"
            placeholder="Full Name"
            maxLength="30"
          />
        </label>

        <label>Email
          <input
            type='text'
            value={values.email}
            onChange={onChange}
            name="email"
            placeholder="Email Address"
          />
        </label>

        <label>Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">-- Select a Role --</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="UX Designer">UX Designer</option>
          </select>
        </label>

        <div className='submit'>
          <button disabled={!values.fullName || !values.email || !values.role}>submit</button>
        </div>
      </div>
    </form>
  )
}
