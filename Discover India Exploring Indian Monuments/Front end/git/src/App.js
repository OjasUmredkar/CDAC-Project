import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Monuments from './Components/Monuments';
import Footer from './Components/Footer';
import DisplayMonument from './Components/DisplayMonument';
import BookTickets from './Components/BookTickets';
import Login from './Components/Login';
import AdminlogIn from './Components/AdminlogIn';
import Admin from './Components/Admin';
import Register from './Components/Register';
import AllUsers from './Components/AllUsers';
import AllMonuments from './Components/AllMonuments';
import AddMonuments from './Components/AddMonuments';
import PaymentForm from './Components/PaymentForm';
import BillDisplay from './Components/Helper/BillDisplay';
import SuccessfullPayment from './Components/Helper/SuccessfullPayment';
import UserProfile from './Components/UserProfile';
import UserBookings from './Components/UserBookings';
import UpdateUser from './Components/UpdateUser';
import AddTimeSlot from './Components/AddTimeSlot';

function App() {



  return (

    <Router>
      <div className="App">
        <Navbar />
        <div className="container">

        </div>

        <Switch>
          <Route path="/bookticket/:id">
            <BookTickets />
          </Route>
          <Route path="/monument/:id">
            <DisplayMonument />
          </Route>
          <Route path="/adminlogin">
            <AdminlogIn />
          </Route>
          <Route path="/monuments">
            <Monuments />
          </Route>

          <Route path="/adminOperations">
            <Admin />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/allusers">
            <AllUsers />
          </Route>
          <Route path="/getallmonuments">
            <AllMonuments />
          </Route>
          <Route path="/addmonument">
            <AddMonuments />
          </Route>
          <Route path="/payment">
            <PaymentForm />
          </Route>
          <Route path="/billdisplay">
            <BillDisplay />
          </Route>
          <Route path="/pay">
            <SuccessfullPayment/>
          </Route>
          <Route path="/myprofile">
            <UserProfile/>
          </Route>
          <Route path="/userbookings">
            <UserBookings/>
          </Route>
          <Route path="/editprofile">
            <UpdateUser/>
          </Route>
          <Route path="/addtimeslot">
            <AddTimeSlot/>
          </Route>
          <Route path="/">
            <Login />

          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
