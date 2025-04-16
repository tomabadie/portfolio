import { Link } from "react-router";

import "./Header.css"

import type { NavigationListProps } from "./data/headerType.en";

const Header = ({navList} : NavigationListProps ) => {
    return (
        <header>
            <h1>Thomas Abadie</h1>
            <nav>
                <ul>
                {navList.map((item) => (
                    <li key={item.id}>
                        <Link to={item.path} >
                            {item.name}
                        </Link>
                    </li>
                ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;