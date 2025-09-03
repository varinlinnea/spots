import '../styles/NavBar.css'

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="navBarLeft">
                <img className="logo" src="./public/logo.PNG"></img>
                <h1>Spots</h1>
            </div>
            <div className="navBarRight">
                <button>Log in</button>
            </div>
        </div>
    );
}