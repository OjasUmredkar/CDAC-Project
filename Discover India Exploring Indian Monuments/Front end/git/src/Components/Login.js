import { useEffect, useState } from "react";

import { useHistory ,Link} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

function LoginForm() {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	useEffect(() => {
    sessionStorage.clear();
    // Push a new state into the history when the component mounts
    window.history.pushState(null, null, window.location.href);

    // Add an event listener for the popstate event
    const handlePopstate = (event) => {
      // Push the new state again to prevent navigating back
      window.history.pushState(null, null, window.location.href);

     
      
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);
	const navigate = useHistory();
  const loginUser = (e) => {
		e.preventDefault();

		var email = username;

		const user = { email, password }
		console.log(user)
		axios.post(`http://localhost:8080/user/signin`, user)
			.then(response => {
				console.log("User Login Credentials Send", response.data)

				if (response.data.length === 0) {
					toast.error('Invalid Credentials', {
						style: {
							borderRadius: '10px',
							background: '#333',
							color: '#fff',
						},
					});
				}

				sessionStorage.setItem("user-token", JSON.stringify(response.data));

				var data = JSON.parse(sessionStorage.getItem("user-token"));

				console.log("user");
				navigate.push("/monuments");
			})
			.catch(error => {
				console.log('Something Went Wrong', error);
			});
	}

	return (
    <div className="image"
        style={{
          backgroundImage:
            'url("https://static.nationalgeographic.co.uk/files/styles/image_3200/public/taj9.jpg?w=1600&h=900")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
			<Toaster
				position="top-center"
				reverseOrder={false}
				toastOptions={{
					duration: 2200,
				}}
			/>
      <Link className="btn btn-danger my-2 mx-3" to="/adminlogin">
                                    Login as Admin
                                </Link>
      
			<div className="container h-100">
				<div className="row justify-content-sm-center h-100">
					<div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
						<div className="text-center my-5">
							
						</div>
						<div className="card shadow-lg">
							<div className="card-body p-5">
								<h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
								<form onSubmit={(e) => loginUser(e)}>

									<div className="mb-3">
										<label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
										<input id="email" type="email" className="form-control" name="email" required autoFocus
											value={username}
											onChange={(e) => setUsername(e.target.value)}
										/>
									</div>

									<div className="mb-3">
										<div className="mb-2 w-100">
											<label className="text-muted" htmlFor="password">Password</label>
										</div>
										<input id="password" type="password" className="form-control" name="password" required
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>

									<div className="d-flex align-items-center">
										<button type="submit" className="btn btn-primary">
											Login
										</button>
									</div>
								</form>
							</div>
							<div className="card-footer py-1 border-0">
								<div className="text-center mb-4">
									Don't have an account? <a href="/register" className="text-dark">Create One</a>
								</div>
							</div>
						</div>
						<div className="text-center mt-5 text-muted ">
							Copyright &copy; 2023 &mdash; Discover India: Exploring Indian Monumements 
						</div>
					</div>
				</div>
			</div>
		</div>
    
	);
}

export default LoginForm;