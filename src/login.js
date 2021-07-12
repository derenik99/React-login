import React from "react"
import { Link, withRouter } from "react-router-dom"

class Login extends React.Component {
    state = {
        email: '',
        password: ''
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
                    this.props.history.push('/')
                }
            })
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
                <button onClick={this.handleLogin}>Login</button>
                <h3>
                    <Link to='/signup'>Dont have account ? </Link>
                </h3>
            </div>
        )
    }
}


export default withRouter(Login);