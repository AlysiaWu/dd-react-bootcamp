import React from 'react'

class RoomHeader extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="App-header">
        <h2>Fun Chat room</h2>
        <div>
          {this.props.names.map(author => (<a> {author} </a>))}
        </div>
      </div>
    )
  }
}

export default RoomHeader;
