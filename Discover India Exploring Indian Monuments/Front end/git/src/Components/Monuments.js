import React, { Component } from 'react';
import MonumentCard from './MonumentCard';
import { content } from './JsonObj';
import { Link } from 'react-router-dom';
export class Monuments extends Component {
    constructor() {
        super();
        this.state = {
            content: content,
            data: JSON.parse(sessionStorage.getItem("user-token"))
        }
    }
    componentDidMount() {
        // Push a new state into the history when the component mounts
        window.history.pushState(null, null, window.location.href);

        // Add an event listener for the popstate event
        window.addEventListener('popstate', this.handlePopstate);
    }

    componentWillUnmount() {
        // Remove the event listener when the component unmounts
        window.removeEventListener('popstate', this.handlePopstate);
    }

    handlePopstate = (event) => {
        // Push the new state again to prevent navigating back
        window.history.pushState(null, null, window.location.href);

        // Optionally, you can display a message to the user

    };
    handleLogout = (e) => {
        sessionStorage.removeItem('user-token');
        // Use this.props.history.push to navigate to a different route

    }


    render() {
        const monuments = this.state.content[0].indian_monuments;

        return (
            <div className="image"
                style={{
                    backgroundImage:
                        'url("https://static.vecteezy.com/system/resources/thumbnails/017/523/623/original/happy-india-republic-day-on-grunge-flag-texture-background-flat-animation-with-fireworks-and-indian-monuments-landmark-free-video.jpg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
                <div className="container">
                <h1 className="text-center underline textcolor2">Indian Historical Monuments</h1> <br />
                    <h3 align="right" className="textwhite">Hi, {this.state.data.firstName}</h3> <br />

                    <div>
                        <Link to="/myprofile" className="btn btn-primary mr-2 alignright">Profile</Link> &nbsp;&nbsp;
                        <Link to="/" className="btn btn-primary alignright" onClick={this.handleLogout}>Logout</Link>
                    </div><br/><br/>
                   
                    <div className="row">
                        {monuments.map((monument) => (
                            <div className="col-md-4" key={monument.id}>
                                <MonumentCard mon={monument} /><br /><br /><br />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Monuments;
