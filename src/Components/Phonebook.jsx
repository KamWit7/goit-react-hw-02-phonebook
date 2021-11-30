// import styles from "./css/Phonebook.module.css"
import { nanoid } from "nanoid"
import React, { Component } from "react"
import ContactsFilter from "./ContactsFilter"
import ContactForm from "./ContactForm"
import Contacts from "./Contacts"

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-22", name: "hermione kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: this.props.name,
    number: "",
    filter: "",
  }

  ifNameInContacts = (inputName) =>
    !this.state.contacts.every(({ name }) => name !== inputName)

  handleChange = (event) => {
    if (this.ifNameInContacts(event.target.value)) {
      alert(`${event.target.value} is alredy in contacts.`)
    }
    this.setState(
      event.target.name === "name"
        ? { name: event.target.value }
        : { number: event.target.value }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState(({ name, number, contacts }) => {
      if (name === "") return
      return {
        contacts: [...contacts, { id: nanoid(), name, number }],
        name: "",
      }
    })
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  deleteContact = (idx) => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(({ id }) => id !== idx) }
    })
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />

        <h2>Contacts</h2>
        <ContactsFilter handleFilterChange={this.handleFilterChange} />
        <Contacts {...this.state} deleteContact={this.deleteContact} />
      </>
    )
  }
}

export default Phonebook
