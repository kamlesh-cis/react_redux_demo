import { React, Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUsers, getUser, deleteUser } from '../actions/users'

class Posts extends Component {
	render() {
		return (
			<ul>
				<li>
					KKK
				</li>
			</ul>
		)
	}
}



const mapStateToProps = (state) => {
	return ({
  users: state.posts
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
)(Posts);
