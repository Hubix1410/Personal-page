import './headerNav.scss';

export function HeaderNav() {
    return (
        <nav className="navSection">
            <div className="navLink"> <a href="#"> Home </a> </div>
            <div className="navLink"> <a href="#"> Abilities </a> </div>
            <div className="navLink"> <a href="#"> About </a> </div>
            <div className="navLink"> <a href="#"> Concat </a> </div>
        </nav>
    )
}