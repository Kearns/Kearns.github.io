import React from 'react'

const Contact = ({active})=> {
    return (
    <section id="contact" className={`contact page ${active ? 'active' : 'inactive'}`}>
      <div className="container">
       <h2>Thank you for your time!</h2>
       <h3>Please, feel free to contact me with any questions</h3>
      </div>
    </section>
    )
}

export default Contact