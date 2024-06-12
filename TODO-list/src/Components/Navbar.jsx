import "./CSS/Navbar.css";
// import Navbar_logo from "./Assets/Navbar.jpeg";
export const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar__logo">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-check2-square"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                        <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                    </svg>
                    {/* <img className="navbar__img" src={Navbar_logo} alt="logo" /> */}
                    <p>TODO-List</p>
                </div>
                <div>
                    <input
                        className="navbar__search"
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <div className="navbar__menu">
                    <div className="navbar__menu__item">Home</div>
                    <div className="navbar_menu_today">Today</div>
                    <div className="navbar_menu_upcoming">Upcoming</div>
                </div>
            </div>
        </div>
    );
};