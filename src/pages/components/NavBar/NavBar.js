import { Link } from "react-router-dom";
import { useState } from "react"
import * as userService from '../../../utilities/users-service'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'

export default function NavBar({ user, setUser }) {

	const [navMenu, setNavMenu] = useState(false)
	const navigate = useNavigate()

	function handleLogOut() {
		userService.logOut()
		setUser(null)
	}

	function handleClick() {
		navigate('/global')
	}

	return (
		<>
			<nav className="navbar bg-dark fluid py-1 d-flex">
				<div id="background">

					<div className="nav-link " id="logo-name" onClick={handleClick}>ribbit 🐸</div>
					<i className="fas fa-frog"></i>
				</div>
				<span className="greeting text-white">Welcome, {user.name}</span>
				<div className="menu-container justify-content-end">
					<div className="navbar-menu">
						<button
							type="button"
							class="btn btn-secondary"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							id="collapse"
							onClick={() => setNavMenu((prevState) => !prevState)}
						>
							<i class="bi bi-three-dots"></i>
						</button>
					</div>
				</div>
			</nav>
			{navMenu ? (
				<div
					className="menuLink collaspe navbar-collaspe bg-dark"
					id="bs-example-navbar-collaspe-1"
				>
					<ul className="nav navbar-nav">
						<li>
							<a>
								<Link className="nav-link text-white" to="/global">
									Discover
								</Link>
							</a>
						</li>
						<li>
							<a>
								<Link
									className="nav-link text-white"
									to='/mythreads'
								>My Threads</Link>
							</a>
						</li>
						<li>
							<a>
								<Link
									className="nav-link text-white"
									to=""
									onClick={handleLogOut}
								>Hop-Out
								<i class="bi bi-box-arrow-in-right"></i></Link>
							</a>
						</li>
					</ul>
				</div>
			) : (
				<></>
			)}
		</>
	)
}
