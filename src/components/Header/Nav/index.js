function Nav({ currentPage, handlePageChange }) {
    return (
        <nav>
            <ul className="header-ul">
                <li className="header-li">
                    <a href="#about" onClick={() => handlePageChange('About')} className="header-a">About Me</a>
                </li>
                <li className="header-li">
                    <a  href="#project" onClick={() => handlePageChange('Project')} className="header-a">Projects</a>
                </li>
                <li className="header-li">
                    <a href="#contact" onClick={() => handlePageChange('Contact')} className="header-a">Contact Me</a>
                </li>
                <li className="header-li">
                    <a href="#resume" onClick={() => handlePageChange('Resume')} className="header-a">Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;