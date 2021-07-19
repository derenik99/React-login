import React from 'react';
import { connect } from 'react-redux';
import {getUsers} from './store/actions/users.actions'

class Users extends React.Component {

    componentDidMount() {
        fetch(`http://localhost:3001/users`)
        .then(response => response.json())
        .then(data => {
            this.props.getUsers(data)
        })
    }

    render() {
        
        return(
            <>
                <h2>Users</h2>
                <table> 
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>email</th>
                            <th>id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((user, index) => (<>
                                <tr key={index} >
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.id}</td>
                                </tr>
                            </>)
                        )}
                    </tbody>
                </table>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = {
    getUsers
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)