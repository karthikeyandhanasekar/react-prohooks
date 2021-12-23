import React from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"


const Home = () => {
    const location = useLocation().pathname
    console.log(location);

    return (
        <React.Fragment>
            {location === '/' || location === '/react-prohooks' ?
                <main className="home">
                    <h1>Welcome to Books with Hooks</h1>
                    <p>You need to signin to use the application</p>
                    <Link to="/login" className="linkbuttons">Signin</Link>
                </main> : null
            }
            {
                location === '/login' ? <div>
                    <h1>login</h1>
                </div> : null
            }

        </React.Fragment>
    )
}

export default Home