import React from "react";
import {Link} from 'react-router-dom'

class SignUp extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    validateEmail = () => {
        const {email} = this.state; 
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }
    validatePassword = () => {
        const {password} = this.state;
        return password.length > 6
    }
    handleRegister = () => {
        const {firstName, lastName, email,password} = this.state;
        fetch(`http://localhost:3001/users?email=${email}`)
            .then(response => response.json())
            .then(data => {
                if(data.length !== 0) {
                    alert('Please write another email')
                }else {
                    fetch(`http://localhost:3001/users`,{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            firstName,
                            lastName,
                            email,
                            password
                        })
                    })
                }
            })
    }
    register = () => {
        if(this.validateEmail() && this.validatePassword()) {
            this.handleRegister()
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    render() {
        const {firstName, lastName, email,password} = this.state;
        return (
            <div>
                <h3>Sign Up</h3>
                <p>
                    <label>
                        <span  className="label">First Name</span>
                        <input name = 'firstName' value = {firstName} type = "text" onChange = {this.handleChange} />
                    </label>
                </p>
                <p>
                    <label >
                        <span  className="label">Last Name</span>
                        <input name = 'lastName' value = {lastName} type= "text" onChange = {this.handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        <span  className="label">Email</span>
                        <input name = 'email' value = {email} type = "email" onChange = {this.handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        <span  className="label">Password</span>
                        <input name = 'password' value = {password} type= "password" onChange = {this.handleChange} />
                    </label>
                </p>   
                <button onClick = {this.register} >Register</button>
                <h3>
                    <Link to='/login'>Do You have a account ? </Link>
                </h3>
            </div>
        )
    }
}

export default SignUp