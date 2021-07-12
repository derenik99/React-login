import React from "react"

class SignUp extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
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
                <button onClick = {this.handleRegister}>Register</button>
            </div>
        )
    }
}

export default SignUp