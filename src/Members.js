import React from 'react'

export default function Members (props) {
  const { fullName, email, role } = props

  if (!props) {
    return <h3>Working fetching your member&apos;s details...</h3>
  }

  return (
    <div className='container'>
      <h2>{fullName}</h2>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </div>
  )
}
