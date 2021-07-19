import React from "react"
import { Link, withRouter } from "react-router-dom"
import {connect} from 'react-redux'
import {getProfile} from './store/actions/user.profiel.actions';

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }
    validateEmail = () => {
        const {email} = this.state
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }
    handleLogin = () => {
        const {email,password} = this.state;
        fetch(`http://localhost:3001/users?email=${email}&password=${password}`)
            .then(response => response.json())
            .then(data => {
                if(data.length === 0) {
                    alert('Wrong email or password')
                }else {
                    localStorage.setItem('id', data[0].id)
                    this.props.getProfile(data[0]);
                    this.props.history.push('/home')
                }
            })
    }
    login = () => {
        if(this.validateEmail()) {
            this.handleLogin()
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    render() {
        const {email,password} = this.state;
        return (
            <div>
                <h3>Login</h3>
                <p>
                    <label>
                        <span  className="label">Email</span>
                        <input name='email' type = "email" value = {email} onChange = {this.handleChange}/>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="label">Password</span>
                        <input name='password' type= "password" value = {password} onChange = {this.handleChange} />
                    </label>
                </p>
                <button onClick={this.login}>Login</button>
                <h3>
                    <Link to='/signup'>Dont have account ? </Link>
                </h3>
            </div>
        )
    }
}

const mapDispatchToProps = {
    getProfile
}

export default connect(null, mapDispatchToProps)(withRouter(Login));