import React, { useState } from 'react'

export const Login = () => {

    // const [userName, setUserName] = useState('');
    // const [password, setPassword] = useState('');
    // const [userType, setUserType] = useState('');

    const userTypeList = [
        {id:1, name: 'Buyer'},
        {id:2, name: 'Seller'}
    ]
  
    const [inputs, setInputs] = useState({});

    const handleInputChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => {
        console.log(values);
        return ({...values, [name]: value})
      })
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }


    return (
        <div className='container'>
        <p>Login</p>
        <form onSubmit={handleSubmit}>
            <div className="form-row">

            <div className="col-md-6 mb-3">
                <label htmlFor="validationServer01">First name</label>
                <input type="text" className="form-control is-valid" name="userName"
                value={inputs.userName || ''} onChange={handleInputChange} required />
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>

            <div className="col-md-6 mb-3">
                <label htmlFor="validationServer02">Last name</label>
                <input type="password" className="form-control is-valid" name="password"
                value={inputs.password || ''} onChange={handleInputChange} required />
                <div className="valid-feedback">
                Looks good!
                </div>
            </div>

            <div className="col-md-3 mb-3">
                <label htmlFor="validationServer04">User Type</label>
                <select className="form-control custom-select is-invalid" name="userType" aria-describedby="validationServer04Feedback" 
                value={inputs.userType || ''} onChange={handleInputChange} required>
                <option value="">Select</option>
                {
                    userTypeList.length ? 
                    userTypeList.map(item => <option key={item.id} value={item.id}> {item.name} </option>)
                    : ''
                }
                </select>
                <div id="validationServer04Feedback" className="invalid-feedback">
                Please select a valid state.
                </div>
            </div>
            </div>

            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
        </div>
    )
}
