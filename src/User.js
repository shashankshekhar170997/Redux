import React from 'react'

export default function user(props) {
  return (
    <div>
      <h1>This is user</h1>
      <h2>{props.data.name }</h2>
      <h2>{props.data.age }</h2>

    </div>
  )
}

