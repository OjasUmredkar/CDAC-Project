import React, { useState, } from 'react'
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';



function Register() {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: ""

  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleRegister = async (e) => {
    const url = `http://localhost:8080/user`;
    e.preventDefault();
    
    const validationErrors = {};

    if (!newUser.firstName) {
      validationErrors.firstName = "First Name is required";
    }
    if (!newUser.lastName) {
      validationErrors.lastName = "Last Name is required";
    }
    if (!newUser.email) {
      validationErrors.firstName = "Email is required";
    }
    if (!newUser.password) {
      validationErrors.lastName = "Password is required";
    }
    if (!newUser.address) {
      validationErrors.lastName = "Address is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    if (newUser.password !== confirmPassword) {
      alert("Confirm password must be the same as password");
      return;
    }
    
    
    
    
        const registered = await axios.post(url, newUser).then(history.push('/')).catch(console.error(errors));
        console.log(registered.data);
     
        
      

   

  }


  return (
    <>



      <div className="image"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9udW1lbnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
        <div className="container" >
          <h1 className="textcolor"><center>Registering User</center></h1><br />
          <form onSubmit={handleRegister} >
            <div className="form-row ">
              <div className="form-group col-md-8 ">
                <b className="textcolor">FirstName:</b>
                <input type="text" className="form-control" value={newUser.firstName} onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })} />
              </div><br />
              <div className="form-group col-md-8 ">
                <b className="textcolor">LastName:</b>
                <input type="text" className="form-control" value={newUser.lastName} onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })} />
              </div><br />
              <div className="form-group col-md-8">
                <b className="textcolor">Email:</b>
                <input type="email" className="form-control" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
              </div>
            </div><br />
            <div className="form-group col-md-8" >
              <b className="textcolor">Password:</b>
              <input type="password" className="form-control" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
            </div><br />
            <div className="form-group col-md-8" >
              <b className="textcolor">Confirm Password:</b>
              <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div><br />
            <div className="form-group col-md-8" >
              <b className="textcolor">Address:</b>
              <input type="text" className="form-control" value={newUser.address} onChange={(e) => setNewUser({ ...newUser, address: e.target.value })} />
            </div><br />

            <button type="submit" className="btn btn-primary ">Register</button><br /><br />

          </form>
        </div>
      </div>
    </>
  )
}

export default Register