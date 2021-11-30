import React from "react"

const Contacts = ({ contacts, filter, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return name.toLowerCase().includes(filter.toLowerCase()) ? (
          <li key={id}>
            {name} {number}
            <button onClick={() => deleteContact(id)}>Delete</button>
          </li>
        ) : null
      })}
    </ul>
  )
}

export default Contacts
