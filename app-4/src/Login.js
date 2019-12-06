import React, {Component} from 'react'

class Login extends Component {
    constructor(){
        super()
        this.state= {
        username: '',
        password: '',
        }
    }

    handleUserChange(e){
        this.setState({
            username: e.target.value
        })
    }

    handlePassChange(e){
        this.setState({
            password: e.target.value
        })
    }
    
    

    render(){
        return(
            <div>
                <input onChange ={e => this.handleUserChange(e)}/>
                <input onChange ={e => this.handlePassChange(e)}/>
                <button onClick={() => alert(`user:${this.state.username} pass:${this.state.pass}`)}>Login</button>

            </div>
        )
    }
}

export default Login