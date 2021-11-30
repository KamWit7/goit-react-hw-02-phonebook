import React from "react"

function ContactsFilter({ handleFilterChange }) {
  return (
    <>
      <label>
        Find contacts by name
        <input
          required
          type="text"
          name="filter"
          onChange={handleFilterChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Please give me a name."
        />
      </label>
    </>
  )
}

export default ContactsFilter
