import React from 'react'
import '../css/contact1.css'
const Contact1 = () => {
  return (
    <div className="contact-form-container d-flex justify-content-center align-items-center">
    <form className="contact-form">
      <div className="textt ">Contact Us</div>
      <p className="text-light mb-4 text-lg-start">Contact us if you need support for your next event</p>
      <div className="row g-3 mb-3 d-flex">
        <div className="col-md-6">
          <label className="form-label text-light">First Name</label>
          <input type="text" className="form-control border"/>
        </div>
        <div className="col-md-6">
          <label className="form-label text-light">Last Name</label>
          <input type="text" className="form-control border" />
        </div>
      </div>

      <div className=" mb-3 d-flex flex-column">

        <div className='w-50 mb-4'>
          <label className="form-label text-light">Email</label>
          <input type="email" className="form-control border" />
        </div>

        <div className='w-50'>
          <label className="form-label text-light">Phone number</label>
          <input type="tel" className="form-control border" />
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-12">
          <label className="form-label text-light">Your Message</label>
          <textarea className="form-control border" rows="4"></textarea>
        </div>
      </div>
      <button type="submit" className="btn btn-light mt-3">Send Message</button>
    </form>
  </div>
  )
}

export default Contact1
