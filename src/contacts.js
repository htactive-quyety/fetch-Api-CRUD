
import 'antd/dist/antd.css';
import { PlusOutlined } from '@ant-design/icons'
import { Button, Modal, Form, Input } from 'antd';


import React, { Component } from 'react'
import { FormEdit } from './FormEdit';

export default class contacts extends Component {
  constructor(props) {
    super(props)
  }


  state = {
    modalAdd: false,
    modalEdit: false,
    addName: "",
    editName: null,
    idEdit: null

  };

  showAddModal = () => {
    this.setState({
      modalAdd: true,
    });
  };

  handleOk = () => {
    const { handleOKProp } = this.props;
    handleOKProp(this.state.addName)
    this.setState({
      modalAdd: false,
    });
  };
  handleCancelAdd = e => {
    console.log(e);
    this.setState({
      modalAdd: false,
    });
  };

  handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa  ??")) {
      const { handleDeleteProp } = this.props;
      handleDeleteProp(id)
      this.setState({
        visible: false,
      });
    }
  }
  handleEdit = ({ id, name }) => {
    const { handleEditProp } = this.props;
    handleEditProp(id, name)
    this.setState({
      modalEdit: false,
    });
  }

  handleCancelEdit = e => {
    console.log(e);
    this.setState({
      modalEdit: false,
    });
  };

  showEditModal = (id, name) => {
    this.setState({
      modalEdit: true,
      editName: name,
      idEdit: id
    });

  };
  render() {
    return (
      <div>
        <center><h1>Contact List</h1></center>
        <Button id='buttonAdd' onClick={this.showAddModal}> <PlusOutlined /></Button>
        <Modal

          title="Add List"
          visible={this.state.modalAdd}
          onOk={this.handleOk}
          onCancel={this.handleCancelAdd}
        >
          {/* contenteditable="true" */}
          <Form>
            <Form.Item label='Name'>
              <Input onChange={(event) => this.setState({ addName: event.target.value })} value={this.state.addName}></Input>
            </Form.Item>
          </Form>
        </Modal>
        <div className="card">
          <table className='table'>
            <thead >
              <tr>
                <th>ID: </th>
                <th>Name: </th>
                <th>Avatar: </th>
              </tr>
            </thead>
            {this.props.contacts.map((contact, index) => (
              <tbody key={index}>
                <tr>
                  <td>{contact.id}</td>
                  <td>{contact.name} </td>
                  <td><img src={contact.avatar} alt="" /></td>
                  <td><Button onClick={() => this.showEditModal(contact.id, contact.name)}>Edit</Button></td>
                  <td><Button onClick={() => this.handleDelete(contact.id)}>Delete</Button></td>

                </tr>
                {/* <Modal
                    title="Edit List"
                    visible={this.state.modalEdit}
                    onOk={() => this.handleEdit(contact.id)}
                    onCancel={this.handleCancelEdit}>
                    <Form>
                      <Form.Item label='Name'>
                        <Input onChange={(event) => this.setState({ editName: event.target.value })} value={this.state.editName} ></Input>
                      </Form.Item>
                    </Form>
                  </Modal> */}
              </tbody>))}
            {/* biet idEdit */}
            {this.state.modalEdit ? <FormEdit contact={(this.props.contacts || []).find(contact => contact.id === this.state.idEdit)}
              modalEdit={this.state.modalEdit}
              handleCancelEdit={this.handleCancelEdit}
              handleEdit={this.handleEdit} /> : ""}
          </table>
        </div>

      </div>
    )
  }
}


