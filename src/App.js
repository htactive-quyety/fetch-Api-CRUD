import React, { Component } from 'react'
import './App.css';
import Contacts from './contacts'
// import FormEdit from './FormEdit';


export default class App extends Component {
  state = {
    contacts: [
    ]
  }
  componentDidMount() {
    fetch('https://5ee7355452bb0500161fd5be.mockapi.io/users')
      .then(res => res.json())
      .then(data => this.setState({ contacts: data }))
  }

  handleOK = (value) => {
    fetch('https://5ee7355452bb0500161fd5be.mockapi.io/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: value,
      })
    })
      .then(res => res.json())
      .then((data) => {

        // this.setState({ contacts: data })
        if (data) {
          // fetch('https://5ee7355452bb0500161fd5be.mockapi.io/users')
          //   .then(res => res.json())
          //   .then(data => this.setState({ contacts: data }))
          this.setState({ contacts: [...this.state.contacts, data] })
        }
      })
      .catch(console.log)
  }
  handleDelete = (id) => {
    fetch(`https://5ee7355452bb0500161fd5be.mockapi.io/users/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then((data) => {
      // this.setState({ contacts: data })
      if (data) {
        // fetch('https://5ee7355452bb0500161fd5be.mockapi.io/users')
        //   .then(res => res.json())
        //   .then(data => this.setState({ contacts: data }))
        this.setState({ contacts: [...this.state.contacts, data] })
      }
    })
    .catch(console.log)
  }

  handleEdit = (id, value) => {
    fetch(`https://5ee7355452bb0500161fd5be.mockapi.io/users/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: value,
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          this.setState({
            contacts: this.state.contacts.map(item => {
              if (item.id === id) {
                return data;
              }
              return item
            })
          })
        }
      });
  }



  render() {
    return (
    <div>
        <Contacts contacts={this.state.contacts} handleOKProp={this.handleOK} handleDeleteProp={this.handleDelete} handleEditProp={this.handleEdit} />
    </div>
      );
  }
}
