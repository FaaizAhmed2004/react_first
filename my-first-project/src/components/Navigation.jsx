const Navigation = () =>{
    return(
        <nav className="container">
            <div className="logo">
                <img src="/images/brand_logo.png" alt = "logo"/>
                <ul>
                    <li href = "#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                     <li href="#">Contact</li>
                </ul>
            </div>
            <button>Login</button>
        </nav>
    );
};
export default Navigation;