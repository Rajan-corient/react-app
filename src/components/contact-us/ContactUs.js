import React, { useState } from 'react'


export default function ContactUs() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('delhi');
  const [pin, setPin] = useState('');
  const [terms, setTerms] = useState(false);
  const [reason, setReason] = useState('The content of a textarea goes in the value attribute'
  );

  const firstNameHandler = (event) => {
    console.log(event);
    setFirstName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      firstName,
      lastName,
      city,
      state,
      pin,
      terms,
      reason
    }
    console.log(obj);
  }

  return (

    <div className='container'>
      <p>ContactUs</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationServer01">First name</label>
            <input type="text" className="form-control is-valid" id="validationServer01"
              value={firstName} onChange={firstNameHandler} required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="validationServer02">Last name</label>
            <input type="text" className="form-control is-valid" id="validationServer02"
              value={lastName} onChange={(e) => setlastName(e.target.value)} required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationServer03">City</label>
            <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" value={city}
              onChange={(e) => setCity(e.target.value)} required />
            <div id="validationServer03Feedback" className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <label htmlFor="validationServer04">State</label>
            <select className="form-control custom-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" value={state}
              onChange={(e) => setState(e.target.value)} required>
              <option value="">Select</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="delhi">Delhi</option>
              <option value="gujrat">Gujrat</option>
            </select>
            <div id="validationServer04Feedback" className="invalid-feedback">
              Please select a valid state.
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <label htmlFor="validationServer05">Zip</label>
            <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" value={pin}
              onChange={(e) => setPin(e.target.value)} required />
            <div id="validationServer05Feedback" className="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input is-invalid" type="checkbox" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" value={terms}
              onChange={(e) => setTerms(e.target.value)} required />
            <label className="form-check-label" htmlFor="invalidCheck3">
              Agree to terms and conditions
            </label>
            <div id="invalidCheck3Feedback" className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="validationTextarea">Textarea</label>
          <textarea className="form-control is-invalid" id="validationTextarea" 
          placeholder="Required example textarea" value={reason}
          onChange={(e) => setReason(e.target.value)} required></textarea>
          <div className="invalid-feedback">
            Please enter a message in the textarea.
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  )
}
