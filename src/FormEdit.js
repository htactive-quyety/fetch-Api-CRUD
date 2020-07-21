import React, { Component, useState, useEffect } from 'react'
import { Modal, Form, Input } from 'antd';

// export default class FormEdit extends Component {
//     constructor(props) {
//         super(props)
//     }
//     state = {
//         modalAdd: false,
//         modalEdit: false,
//         addName: "",
//         editName: null,
//         idEdit: null
//     };
//     handleEdit = (id) => {
//         const { handleEditProp } = this.props;
//         handleEditProp(id, this.state.editName)
//         this.setState({
//             modalEdit: false,
//         });
//     }
//     handleCancelEdit = e => {
//         console.log(e);
//         this.setState({
//             modalEdit: false,
//         });
//     };

//     render() {
//         return (
//             <div>
//                 {this.props.contacts.map((contact, index) => (
//                     <Modal key={index}
//                         title="Edit List"
//                         visible={this.state.modalEdit}
//                         onOk={
//                             () => this.handleEdit(contact.id)}
//                         onCancel={this.handleCancelEdit} >
//                         <Form>
//                             <Form.Item label='Name' >
//                                 <Input onChange={(event) => this.setState({ editName: event.target.value })}
//                                     value={this.state.editName} >
//                                 </Input>
//                             </Form.Item>
//                         </Form>
//                     </Modal>))}
//             </div>
//         )
//     }
// }

export const FormEdit = ({ contact, modalEdit, handleEdit, handleCancelEdit }) => {
    const [contactEdit, setContactEdit] = useState({});
    useEffect(() => {
        setContactEdit(contact)
    }, [])
    return (
        <div>
            <Modal
                title="Edit List"
                visible={modalEdit}
                onOk={() => handleEdit(contactEdit)}
                onCancel={handleCancelEdit} >
                <Form.Item label='Name' >
                    <Input onChange={(event) => ({ name: event.target.value })}
                        value={contactEdit.name}
                        onChange={event => setContactEdit({ ...contactEdit, name: event.target.value })}>
                    </Input>
                </Form.Item>
            </Modal>
        </div>
    )
}