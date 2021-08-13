import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <>
            <img className="navbar__logo" src="https://upload.wikimedia.org/wikipedia/en/0/08/Good_Game_logo_2014.jpg" />

            <ul className="navbar">

                <li className="navbar__item">
                    <Link className="nav-link" to="/"> Home</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/games">Games</Link>
                    {/* <button className="btn btn-1" to="/games">Games</button> */}
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/catagories">Catagories</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/players">Players</Link>
                </li>
                {
                    (localStorage.getItem("lu_token") !== null) ?
                        <li className="nav-item">
                            <button className="nav-link fakeLink"
                                onClick={() => {
                                    localStorage.removeItem("lu_token")
                                    props.history.push({ pathname: "/" })
                                }}
                            >Logout</button>
                        </li> :
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                }
            </ul>
        </>
    )

}
