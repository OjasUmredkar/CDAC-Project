import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
function AdminlogIn() {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  const history=useHistory();
  const handleAdminLogin = () => {
      if(email==="admin@gmail.com" && password==="admin@123"){
        alert("Admin Login Succesfull");
        history.push("/adminOperations");
      }else{
        alert("Enter valid login");
      }
  }

  return (
    <>
      <div className="container my-5">
      <h1><center>Admin Login</center></h1><br />
        <form >
          <div className="form-row ">
            <div className="form-group col-md-8">
              Email:
              <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div><br />
          <div className="form-group col-md-8">
            Password:
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div><br />

          <button type="button" className="btn btn-primary " onClick={handleAdminLogin} >Sign in</button>
        </form><br></br>
      </div>
    </>
  )
}

export default AdminlogIn;