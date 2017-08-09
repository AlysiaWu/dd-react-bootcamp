import React from 'react'

const RoomHeader = ({names}) => {
  return (
    <div className="App-header">
      <h2>Fun Chat room</h2>
      <div>
        {names.map(author => (<a> {author} </a>))}
      </div>
    </div>
  )
}

export default RoomHeader;
