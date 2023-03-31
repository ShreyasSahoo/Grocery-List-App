import React from 'react'

export default function Footer({length}) {
    const someDate = new Date();
  return (
    <footer>
        <p>{length} {length ===1?"item":"items"}</p>
      <p> copyright {someDate.getFullYear()}</p>
    </footer>
  )
}
