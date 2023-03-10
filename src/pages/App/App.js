import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';
import GlobalPage from '../GlobalPage/GlobalPage';
import CreateThread from '../CreateThread/CreateThread';
import NavBar from '../components/NavBar/NavBar';
import './App.css';

import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser())

  function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(
	  () => JSON.parse(localStorage.getItem('token')) || false
	)
  
	const setAuth = (value) => {
	  setIsAuthenticated(value)
	  //alert(value);
	}
  
	useEffect(()=>{
	  localStorage.setItem("token", JSON.stringify(isAuthenticated))
	}, [isAuthenticated])

 return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser}/>
					<Routes>
						<Route path='/global' element={isAuthenticated ? <GlobalPage /> : <Navigate to="/AuthPage" replace/>} />
						<Route path="/login" element={<AuthPage/>} />
						<Route path='/create' element={<CreateThread />} />
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	)
}}
