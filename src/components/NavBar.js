import './NavBar.css'

export default function NavBar() {

    return(
        <nav>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#footer'>Contact</a></li>
            </ul>
        </nav>
    )
}