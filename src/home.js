import {    withRouter,Redirect} from "react-router-dom";
import React from 'react';

class Home  extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }


    componentDidMount() {
        fetch(`http://localhost:3001/users/${localStorage.getItem('id')}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                firstName: data.firstName,
                lastName: data.lastName
            });
        })
    }
    logout = () => {
        localStorage.clear();
        this.props.history.push('/login')
    }
    render() {

        return (
            <>
                {
                    localStorage.getItem('id') ? <>
                        <h2>Hi {this.state.firstName} {this.state.lastName}</h2>
                        <button onClick={this.logout}>Logout</button>
                    </>: <Redirect 
                        to={{
                            pathname: "/",
                          }}
                    />
                }
            </>
        )
    }

}

export default withRouter(Home)