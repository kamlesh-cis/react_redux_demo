import { React, Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUsers, getUser, deleteUser } from '../actions/users'

class Users extends Component {
	loadData = () => {
		this.props.getUsers()
	}
	render() {
		const { usersList } = this.props
		const userItems = usersList.map((user) => {
			return (
				<li key={user.id}>
					{user.name}
				</li>
			)
		})
		return (
			<div>
				<button onClick={this.loadData}>LOAD DATA</button>
				<ul>
					{userItems}
				</ul>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return ({
  	usersList: state.users.usersList
	})
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUsers,
      getUser,
      deleteUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
