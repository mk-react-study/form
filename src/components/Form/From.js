import React, { Component } from 'react'
import TextBox from './text-box.js'
import * as EmailValidator from 'email-validator'
import { Modal, Button } from 'react-bootstrap'

class Checkout extends Component {
  state = {
    modalShow: false,
    label: 'Email',
    placeHolder: 'test@test.com',
    valid: false,
    touched: false,
    value: '',
    validationRequired: true
  }

  onChange = event => {
    let valid = false
    if (event.target.value) {
      valid = EmailValidator.validate(event.target.value.trim())
    }
    console.log({ value: event.target.value, valid })
    this.setState({ value: event.target.value, touched: true, valid })
  }

  onSubmit = event => {
    event.preventDefault()
    this.setState({ modalShow: true })
  }

  handleClose = () => {
    this.setState({ modalShow: false })
  }

  getModal = () => {
    return (
      <Modal show={this.state.modalShow} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  getForm = props => {
    let submitBtn = (
      <button className='btn btn-secondary disabled' disabled type='submit'>
        Submit
      </button>
    )
    if (this.state.valid) {
      submitBtn = (
        <button className='btn btn-primary active' active type='submit' onClick={this.onSubmit}>
          Submit
        </button>
      )
    }
    const Modal = this.getModal()

    return (
      <section className='container'>
        <form>
          <TextBox config={this.state} onChange={this.onChange} />
          {submitBtn}
        </form>
        {Modal}
      </section>
    )
  }

  render() {
    return this.getForm()
  }
}

export default Checkout
