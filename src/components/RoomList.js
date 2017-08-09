import React from 'react'

class RoomList extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.rooms.map(room => (<div onClick={console.log(room)}> {room.name} </div>))}
      </div>
    )
  }
}

export default RoomList;
