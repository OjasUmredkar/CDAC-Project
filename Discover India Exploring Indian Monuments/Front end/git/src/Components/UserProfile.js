import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UserProfile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(sessionStorage.getItem('user-token'));
        setUser(storedUser);
        console.log(storedUser); 
    }, []); 
    if (!user) {
        return (
            <div className="container">
                Loading...
            </div>
        );
    }

    return (
        <>
                    <div className="image"
                style={{
                    backgroundImage:
                        'url("https://static.toiimg.com/thumb/msid-74299784/74299784.jpg?width=500&resizemode=4")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
        <div className="container text-center">
        <br/><br/><br/>
            <h1 className='textcolor title-monument' >User Profile</h1><br/><br/><br/>
            <h3 className='textcolor'><p><strong>Name:</strong> {user.firstName} {user.lastName}</p></h3>
            <h3 className='textcolor'><p><strong>Email:</strong> {user.email}</p></h3>
            <h3 className='textcolor'><p><strong>Address:</strong> {user.address}</p><br/><br/><br/></h3>
            <Link to="/editprofile" className='btn btn-primary'>Edit Profile</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/userbookings" className='btn btn-primary'>Show All Bookings</Link>
            <br/><br/><br/>
        </div>
        </div>
        
        </>
    );
}

export default UserProfile;
