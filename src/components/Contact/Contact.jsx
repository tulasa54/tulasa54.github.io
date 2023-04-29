import React from 'react'
import "./contact.css"

function Contact() {
  return (
    <main>
      <div className='head'></div>

      <div className='row'>
        <div className='col'>
          <div className='row'>
            <div className='col'>
              <h1>Contact Me</h1>
              <hr />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <form>
                <div className='form-group'>
                  <label for='name'>Name</label><br />
                  <input className='form-control' placeholder="Name" />
                </div>
                <div className='form-group'>
                  <label for='email'>Email</label><br />
                  <input className='form-control' placeholder="Email" />
                </div>
                <div className='form-group'>
                  <label for='message'>Message</label><br />
                  <textarea className='form-control' placeholder="Message" rows="3" />
                </div>
                <button type='submit' className='btn'>Submit</button>
              </form>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              (917) 741 - 3105 |
              tulasa.chitrakar@gmail.com
            </div>
          </div>
        </div>
        </div>
    
    </main>
  )
}

export default Contact
