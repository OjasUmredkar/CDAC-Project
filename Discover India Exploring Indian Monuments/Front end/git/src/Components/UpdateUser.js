import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';


function UpdateUser() {

    const [user, setUser] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        address: ""

    });

    useEffect(() => {
        const storedUser = JSON.parse(sessionStorage.getItem('user-token'));
        setUser(storedUser);
        console.log(storedUser);
    }, []);

    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleUpdate = async (e) => {
        const url = `http://localhost:8080/user`;
        e.preventDefault();

        const validationErrors = {};

        if (!user.firstName) {
            validationErrors.firstName = "First Name is required";
        }
        if (!user.lastName) {
            validationErrors.lastName = "Last Name is required";
        }
        if (!user.email) {
            validationErrors.firstName = "Email is required";
        }
        if (!user.password) {
            validationErrors.lastName = "Password is required";
        }
        if (!user.address) {
            validationErrors.lastName = "Address is required";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

       



        const registered = await axios.put(url, user).then(history.push('/')).catch(console.error(errors));
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
                    <h1 className="textcolor"><center>Update User Details</center></h1><br />
                    <form onSubmit={handleUpdate} >
                        <div className="form-row ">
                            <div className="form-group col-md-8 ">
                                <b className="textcolor">User ID:</b>
                                <input type="number" className="form-control" value={user.id} disabled />
                            </div><br />
                            <div className="form-group col-md-8 ">
                                <b className="textcolor">FirstName:</b>
                                <input type="text" className="form-control" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                            </div><br />
                            <div className="form-group col-md-8 ">
                                <b className="textcolor">LastName:</b>
                                <input type="text" className="form-control" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                            </div><br />
                            <div className="form-group col-md-8">
                                <b className="textcolor">Email:</b>
                                <input type="email" className="form-control" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                            </div>
                        </div><br />

                        <div className="form-group col-md-8" >
                            <b className="textcolor">Address:</b>
                            <input type="text" className="form-control" value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} />
                        </div><br />

                        <button type="submit" className="btn btn-primary ">Update</button><br /><br />

                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateUser