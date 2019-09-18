import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <User></User>
                <User age="40">John</User>
                <User age="60">Jill</User>
               
             </div>
        )
    }
}

export default Users;