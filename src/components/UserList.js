import React from 'react';
import UserItem from './UserItem';
import { connect } from "react-redux";
import { addUserAction } from "../actions/users";

class UserList extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.userName.value.trim();
    if (name) {
      this.props.dispatch(addUserAction({ name }));
      e.target.reset();
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input name="userName" />
            <input type="submit" value="dodaj" />
          </div>
        </form>

        <ul>
          {this.props.users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(UserList);