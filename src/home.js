import {  Link,  withRouter, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import { getProfile } from "./store/actions/user.profiel.actions";
import React from 'react';

class Home  extends React.Component {

    componentDidMount() {
        fetch(`http://localhost:3001/users/${localStorage.getItem('id')}`)
        .then(response => response.json())
        .then(data => {
            this.props.getProfile(data);
        })
    }
    logout = () => {
        localStorage.clear();
        this.props.history.push('/login')
    }
    render() {

        return (
            <>
                        <Link to={'/profile'}><button>Profile</button></Link>
                        <Link to = {'/users'}><button>Users</button></Link>
                        <br />
                        <button onClick={this.logout}>Logout</button>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        firstName: state.profile.firstName,
        lastName: state.profile.lastName,
    }
}

const mapDispatchToProps = {
    getProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))