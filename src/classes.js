// Object oriented programming
/*const UserObject = {
    firstName: 'Michael',
    lastName: 'Law',
    signup: function() {
        console.log(this.firstName, 'signed up!')
    }
}

class User {
    //constructor function tell JS what any given instance of a User consists of
    // constructor () is calles automatically any time you say "new" in JS
    constructor(name, email, password) {  
        this.name = name
        this.email = email
        this.password = password
    }

    signup() {
        console.log(this.name, 'signed up!')
    }
}


class AdminUser extends User {
    constructor(name, email, password) {
        super(name, email, password)
        this.admin = true
    }
}


// this = an instance of User
// a user is a datastructure that has these attributes: name, email, password
let user = new AdminUser('Andor', 'latandor@gmail.com', '11111112')

user.signup()*/


import React from "react";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    
    render() {
        return(
            <div>
            <h1>Hello React class</h1>
            <h2>Count is {this.state.count}</h2>
            <button onClick={() => { 
            this.setState({count: this.state.count + 1})
            }}> Click ME</button>
            </div>
        )
    }
}


export default App;
