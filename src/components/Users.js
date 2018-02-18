import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    debugger;
    let users = this.props.users.map((user,index)=><div key={index}><li >{user.userName}</li><li>{user.hometown}</li></div>)
    return (
      <div>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {users: state.users,
          primaryUser: state.users[0]}
}

export const ConnectedUsers= connect(mapStateToProps)(Users) // aren't we supposed to be connecting something around here?
