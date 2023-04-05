import React from 'react'

const Person = (props) => {
  return (
    <div>
        <h2> Hello {props.fullName}</h2>
        <h2> {props.bio}</h2>
        <h2> I am a {props.profession}</h2>
        <h2></h2>
    </div>
  )
}

export default Person