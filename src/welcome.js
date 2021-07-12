import { Link } from "react-router-dom"

function Welcome () {
    return (
        <>
            <h2>Welocme</h2>
            <button>
            <Link to='/Login'>Login</Link>
            </button>
            <button>
                <Link to='/signup'>Sign Up</Link>
            </button>
        </>
    )
}

export default Welcome