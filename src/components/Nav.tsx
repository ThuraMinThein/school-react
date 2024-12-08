const Nav = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <div className="d-flex">
                    <button className="btn btn-outline-success me-2" >School</button>
                    <button className="btn btn-outline-success" >Student</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav;